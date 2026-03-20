/**
 * Migracja kontaktów z SQL Server (tblContacts + tblCustContacts)
 * do PostgreSQL z tabelami pośrednimi (ClientContact, PublisherContact).
 *
 * Logika:
 * - każdy unikalny ContactID → jeden rekord Contact (osoba)
 * - każdy wiersz tblCustContacts z typem 'Client'     → wiersz ClientContact
 * - każdy wiersz tblCustContacts z typem 'Publisher'  → wiersz PublisherContact
 * - inne typy (Agent, Other, Proprietor) → pomijane
 * - pole DefaultContact z tblCustContacts → isDefault
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-contacts.ts
 */

import 'dotenv/config'
import sql from 'mssql'
import { Client as PgClient } from 'pg'

function required(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

function envBool(name: string, def: boolean): boolean {
  const v = process.env[name]
  if (!v) return def
  return v.toLowerCase() === 'true'
}

function str(v: unknown): string | null {
  if (v === null || v === undefined) return null
  const s = String(v).trim()
  return s === '' ? null : s
}

// ─── typy źródłowe ───────────────────────────────────────────────────────────

type SourceContact = {
  ContactID: number
  PhoneNumber: string | null
  FirstName: string | null
  MiddleName: string | null
  LastName: string | null
  Informal: number
  Fax: string | null
  Email: string | null
  ContactPosition: string | null
  Accountant: number | null
}

type SourceLink = {
  ContactID: number
  CustID: number
  CustTypeName: string
  DefaultContact: number   // -1 = true (SQL Server BIT quirk), 0 = false
}

// ─── odczyt źródła ───────────────────────────────────────────────────────────

async function fetchContacts(pool: sql.ConnectionPool): Promise<SourceContact[]> {
  const result = await pool.request().query<SourceContact>(`
    SELECT
      ContactID,
      PhoneNumber,
      FirstName,
      MiddleName,
      LastName,
      Informal,
      Fax,
      Email,
      ContactPosition,
      Accountant
    FROM tblContacts
  `)
  return result.recordset
}

async function fetchLinks(pool: sql.ConnectionPool): Promise<SourceLink[]> {
  // Pobieramy tylko powiązania z typami Client i Publisher
  // DefaultContact w SQL Server przechowywane jako INT (-1 = true)
  const result = await pool.request().query<SourceLink>(`
    SELECT
      cc.ContactID,
      cc.CustID,
      dct.CustTypeName,
      cc.DefaultContact
    FROM tblCustContacts cc
    JOIN tblCustTypes ct   ON cc.CustID = ct.CustID
    JOIN dictCustTypes dct ON ct.CustTypeID = dct.CustTypeID
    WHERE dct.CustTypeName IN ('Client', 'Publisher')
  `)
  return result.recordset
}

// ─── mapowanie sourceId → id w PG ────────────────────────────────────────────

async function buildIdMap(
  pg: PgClient,
  table: 'Client' | 'Publisher'
): Promise<Map<number, number>> {
  const res = await pg.query<{ id: number; sourceId: number }>(
    `SELECT id, "sourceId" FROM "${table}" WHERE "sourceId" IS NOT NULL`
  )
  const map = new Map<number, number>()
  for (const row of res.rows) map.set(Number(row.sourceId), row.id)
  return map
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  const sqlConfig: sql.config = {
    user: required('SQLSERVER_USER'),
    password: required('SQLSERVER_PASSWORD'),
    server: required('SQLSERVER_HOST'),
    database: required('SQLSERVER_DATABASE'),
    options: {
      instanceName: process.env.SQLSERVER_INSTANCE,
      encrypt: envBool('SQLSERVER_ENCRYPT', false),
      trustServerCertificate: envBool('SQLSERVER_TRUST_SERVER_CERTIFICATE', true),
    },
  }

  console.log('Łączenie z SQL Server...')
  const pool = await sql.connect(sqlConfig)

  console.log('Łączenie z PostgreSQL...')
  const pg = new PgClient({ connectionString: required('DATABASE_URL') })
  await pg.connect()

  try {
    console.log('Pobieranie danych...')
    const [sourceContacts, links, clientMap, publisherMap] = await Promise.all([
      fetchContacts(pool),
      fetchLinks(pool),
      buildIdMap(pg, 'Client'),
      buildIdMap(pg, 'Publisher'),
    ])

    console.log(`  tblContacts: ${sourceContacts.length} rekordów`)
    console.log(`  tblCustContacts (Client+Publisher): ${links.length} powiązań`)
    console.log(`  Client mapa: ${clientMap.size} wpisów`)
    console.log(`  Publisher mapa: ${publisherMap.size} wpisów`)

    // Wyznacz unikalne ContactID, które mają co najmniej jedno powiązanie
    const linkedContactIds = new Set(links.map(l => l.ContactID))
    const contactsToInsert = sourceContacts.filter(c => linkedContactIds.has(c.ContactID))
    console.log(`  Kontakty z powiązaniem do Client/Publisher: ${contactsToInsert.length}`)

    const stats = {
      contacts: 0,
      clientLinks: 0,
      publisherLinks: 0,
      skippedLinks: 0,
    }

    await pg.query('BEGIN')
    try {
      // Idempotentność: wyczyść tabele pośrednie i kontakty
      await pg.query('DELETE FROM "ClientContact"')
      await pg.query('DELETE FROM "PublisherContact"')
      await pg.query('DELETE FROM "Contact"')

      // 1. Wstaw unikalne osoby (Contact)
      //    Mapowanie: stary ContactID → nowy PG id
      const contactIdMap = new Map<number, number>()

      for (const c of contactsToInsert) {
        const res = await pg.query<{ id: number }>(`
          INSERT INTO "Contact" (
            "phoneNumber", "firstName", "middleName", "lastName",
            informal, fax, email, "contactPosition", accountant,
            "createdAt", "updatedAt"
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, NOW(), NOW())
          RETURNING id
        `, [
          str(c.PhoneNumber),
          str(c.FirstName) ?? '(brak)',
          str(c.MiddleName),
          str(c.LastName) ?? '(brak)',
          c.Informal ?? 0,
          str(c.Fax),
          str(c.Email),
          str(c.ContactPosition),
          c.Accountant ?? null,
        ])
        contactIdMap.set(c.ContactID, res.rows[0].id)
        stats.contacts++
      }

      // 2. Wstaw powiązania
      for (const link of links) {
        const newContactId = contactIdMap.get(link.ContactID)
        if (!newContactId) {
          stats.skippedLinks++
          continue
        }

        const isDefault = link.DefaultContact !== 0  // -1 = true w SQL Server

        if (link.CustTypeName === 'Client') {
          const clientId = clientMap.get(link.CustID)
          if (!clientId) { stats.skippedLinks++; continue }
          await pg.query(`
            INSERT INTO "ClientContact" ("contactId", "clientId", "isDefault", "createdAt")
            VALUES ($1, $2, $3, NOW())
            ON CONFLICT ("contactId", "clientId") DO NOTHING
          `, [newContactId, clientId, isDefault])
          stats.clientLinks++

        } else if (link.CustTypeName === 'Publisher') {
          const publisherId = publisherMap.get(link.CustID)
          if (!publisherId) { stats.skippedLinks++; continue }
          await pg.query(`
            INSERT INTO "PublisherContact" ("contactId", "publisherId", "isDefault", "createdAt")
            VALUES ($1, $2, $3, NOW())
            ON CONFLICT ("contactId", "publisherId") DO NOTHING
          `, [newContactId, publisherId, isDefault])
          stats.publisherLinks++
        }
      }

      await pg.query('COMMIT')
    } catch (err) {
      await pg.query('ROLLBACK')
      throw err
    }

    console.log('\n✓ Migracja kontaktów zakończona:')
    console.log(`  Osoby (Contact):              ${stats.contacts}`)
    console.log(`  Powiązania z Client:           ${stats.clientLinks}`)
    console.log(`  Powiązania z Publisher:        ${stats.publisherLinks}`)
    console.log(`  Pominięte powiązania:          ${stats.skippedLinks}`)
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch(err => {
  console.error('BŁĄD:', err.message ?? err)
  process.exit(1)
})
