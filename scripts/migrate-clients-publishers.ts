/**
 * Migracja danych z SQL Server (tblCustomers) do PostgreSQL (Client, Publisher)
 *
 * Logika:
 * - rekord z typem 'Client'     → tabela Client
 * - rekord z typem 'Publisher'  → tabela Publisher
 * - rekord z oboma typami       → duplikowany do obu tabel
 * - dane bankowe z tblCustBank  → pola bank* w Client/Publisher
 * - kraj z dictCountries        → pole country (CountryPL)
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-clients-publishers.ts
 */

import 'dotenv/config'
import sql from 'mssql'
import { Client as PgClient } from 'pg'

// ─── helpers ────────────────────────────────────────────────────────────────

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

/** Czyści string; null/undefined/pusty → null */
function str(v: unknown): string | null {
  if (v === null || v === undefined) return null
  const s = String(v).trim()
  return s === '' ? null : s
}

/** Decimal z SQL Server (może być string) → number | null */
function dec(v: unknown): number | null {
  if (v === null || v === undefined) return null
  const n = Number(v)
  return isNaN(n) ? null : n
}

// ─── typy źródłowe ──────────────────────────────────────────────────────────

type SourceCustomer = {
  CustID: number
  CustAbb: string | null
  Name: string | null
  DefaultPhone: string | null
  DefaultFax: string | null
  DefaultEmail: string | null
  DefaultWWW: string | null
  Address1: string | null
  Address2: string | null
  City: string | null
  Zip: string | null
  StateAbb: string | null
  CountryPL: string | null   // z dictCountries (JOIN)
  LangAbb: string | null
  TaxID: string | null
  VATID: string | null
  Remarks: string | null
  Jurisdiction: string | null
  Status: string | null
  Commission: number | null
  CommissionForeign: number | null
  CommissionMaterials: number | null
  RepModeID: number | null
  ParentCustID: number | null
  // z tblCustBank (LEFT JOIN, tylko pierwsze konto)
  BankAccountNo: string | null
  BankName: string | null
  BankAddress: string | null
  BankRoutingNo: string | null
  BankAccountName: string | null
}

type SourceCustType = {
  CustID: number
  CustTypeName: string
}

// ─── odczyt danych źródłowych ────────────────────────────────────────────────

async function fetchCustomers(pool: sql.ConnectionPool): Promise<SourceCustomer[]> {
  const result = await pool.request().query<SourceCustomer>(`
    SELECT
      c.CustID,
      c.CustAbb,
      c.Name,
      c.DefaultPhone,
      c.DefaultFax,
      c.DefaultEmail,
      c.DefaultWWW,
      c.Address1,
      c.Address2,
      c.City,
      c.Zip,
      c.StateAbb,
      co.CountryPL,
      c.LangAbb,
      c.TaxID,
      c.VATID,
      c.Remarks,
      c.Jurisdiction,
      c.Status,
      c.Commission,
      c.CommissionForeign,
      c.CommissionMaterials,
      c.RepModeID,
      c.ParentCustID,
      -- pierwsze konto bankowe (jeśli istnieje)
      cb.AccountNo   AS BankAccountNo,
      cb.BankName    AS BankName,
      cb.BankAddress AS BankAddress,
      cb.RoutingNo   AS BankRoutingNo,
      cb.AccountName AS BankAccountName
    FROM tblCustomers c
    LEFT JOIN dictCountries co ON c.CountryID = co.CountryID
    LEFT JOIN (
      SELECT CustID, AccountNo, BankName, BankAddress, RoutingNo, AccountName,
             ROW_NUMBER() OVER (PARTITION BY CustID ORDER BY CustID) AS rn
      FROM tblCustBank
    ) cb ON cb.CustID = c.CustID AND cb.rn = 1
  `)
  return result.recordset
}

async function fetchCustTypes(pool: sql.ConnectionPool): Promise<SourceCustType[]> {
  const result = await pool.request().query<SourceCustType>(`
    SELECT ct.CustID, dct.CustTypeName
    FROM tblCustTypes ct
    JOIN dictCustTypes dct ON ct.CustTypeID = dct.CustTypeID
    WHERE dct.CustTypeName IN ('Client', 'Publisher')
  `)
  return result.recordset
}

// ─── zapis do PostgreSQL ─────────────────────────────────────────────────────

async function upsertClient(pg: PgClient, c: SourceCustomer): Promise<'inserted' | 'updated'> {
  const res = await pg.query<{ inserted: boolean }>(`
    INSERT INTO "Client" (
      "sourceId",
      name, abbreviation, email, phone, fax, www,
      address, address2, city, state, "postalCode", country, language,
      "legalForm", nip, "vatId", regon, jurisdiction, status, notes,
      "bankAccount", "bankName", "bankAddress", "bankRoutingNo", "bankAccountName",
      commission, "commissionForeign", "commissionMaterials", "repModeId",
      "createdAt", "updatedAt"
    ) VALUES (
      $1,
      $2,$3,$4,$5,$6,$7,
      $8,$9,$10,$11,$12,$13,$14,
      $15,$16,$17,$18,$19,$20,$21,
      $22,$23,$24,$25,$26,
      $27,$28,$29,$30,
      NOW(), NOW()
    )
    ON CONFLICT ("sourceId") DO UPDATE SET
      name = EXCLUDED.name,
      abbreviation = EXCLUDED.abbreviation
    RETURNING (xmax = 0) AS inserted
  `, [
    c.CustID,
    str(c.Name) ?? '(brak nazwy)',
    str(c.CustAbb),
    str(c.DefaultEmail),
    str(c.DefaultPhone),
    str(c.DefaultFax),
    str(c.DefaultWWW),
    str(c.Address1),
    str(c.Address2),
    str(c.City),
    str(c.StateAbb),
    str(c.Zip),
    str(c.CountryPL),
    str(c.LangAbb),
    null,             // legalForm – brak w źródle
    str(c.TaxID),
    str(c.VATID),
    null,             // regon – brak w źródle
    str(c.Jurisdiction),
    str(c.Status),
    str(c.Remarks),
    str(c.BankAccountNo),
    str(c.BankName),
    str(c.BankAddress),
    str(c.BankRoutingNo),
    str(c.BankAccountName),
    dec(c.Commission),
    dec(c.CommissionForeign),
    dec(c.CommissionMaterials),
    c.RepModeID ?? null,
  ])
  return res.rows[0]?.inserted ? 'inserted' : 'updated'
}

async function upsertPublisher(pg: PgClient, c: SourceCustomer): Promise<'inserted' | 'updated'> {
  const res = await pg.query<{ inserted: boolean }>(`
    INSERT INTO "Publisher" (
      "sourceId",
      name, abbreviation, email, phone, fax, www,
      address, address2, city, state, "postalCode", country, language,
      "legalForm", nip, "vatId", regon, jurisdiction, status, notes,
      "bankAccount", "bankName", "bankAddress", "bankRoutingNo", "bankAccountName",
      commission, "commissionForeign", "commissionMaterials", "repModeId",
      "createdAt", "updatedAt"
    ) VALUES (
      $1,
      $2,$3,$4,$5,$6,$7,
      $8,$9,$10,$11,$12,$13,$14,
      $15,$16,$17,$18,$19,$20,$21,
      $22,$23,$24,$25,$26,
      $27,$28,$29,$30,
      NOW(), NOW()
    )
    ON CONFLICT ("sourceId") DO UPDATE SET
      name = EXCLUDED.name,
      abbreviation = EXCLUDED.abbreviation
    RETURNING (xmax = 0) AS inserted
  `, [
    c.CustID,
    str(c.Name) ?? '(brak nazwy)',
    str(c.CustAbb),
    str(c.DefaultEmail),
    str(c.DefaultPhone),
    str(c.DefaultFax),
    str(c.DefaultWWW),
    str(c.Address1),
    str(c.Address2),
    str(c.City),
    str(c.StateAbb),
    str(c.Zip),
    str(c.CountryPL),
    str(c.LangAbb),
    null,
    str(c.TaxID),
    str(c.VATID),
    null,
    str(c.Jurisdiction),
    str(c.Status),
    str(c.Remarks),
    str(c.BankAccountNo),
    str(c.BankName),
    str(c.BankAddress),
    str(c.BankRoutingNo),
    str(c.BankAccountName),
    dec(c.Commission),
    dec(c.CommissionForeign),
    dec(c.CommissionMaterials),
    c.RepModeID ?? null,
  ])
  return res.rows[0]?.inserted ? 'inserted' : 'updated'
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
    console.log('Pobieranie danych źródłowych...')
    const [customers, custTypes] = await Promise.all([
      fetchCustomers(pool),
      fetchCustTypes(pool),
    ])

    console.log(`  tblCustomers: ${customers.length} rekordów`)
    console.log(`  tblCustTypes (Client+Publisher): ${custTypes.length} powiązań`)

    // buduj mapy typów: CustID → Set<'Client'|'Publisher'>
    const typeMap = new Map<number, Set<string>>()
    for (const ct of custTypes) {
      if (!typeMap.has(ct.CustID)) typeMap.set(ct.CustID, new Set())
      typeMap.get(ct.CustID)!.add(ct.CustTypeName)
    }

    // rekordy bez żadnego z interesujących typów
    const untyped = customers.filter(c => !typeMap.has(c.CustID)).length
    const dualType = [...typeMap.values()].filter(s => s.size > 1).length
    console.log(`  Bez typu Client/Publisher: ${untyped}`)
    console.log(`  Z oboma typami (duplikowane): ${dualType}`)

    const stats = { clients: { inserted: 0, updated: 0 }, publishers: { inserted: 0, updated: 0 } }

    await pg.query('BEGIN')
    try {
      for (const c of customers) {
        const types = typeMap.get(c.CustID)
        if (!types) continue

        if (types.has('Client')) {
          const action = await upsertClient(pg, c)
          stats.clients[action]++
        }

        if (types.has('Publisher')) {
          const action = await upsertPublisher(pg, c)
          stats.publishers[action]++
        }
      }
      await pg.query('COMMIT')
    } catch (err) {
      await pg.query('ROLLBACK')
      throw err
    }

    console.log('\n✓ Migracja zakończona:')
    console.log(`  Client:    ${stats.clients.inserted} dodanych, ${stats.clients.updated} zaktualizowanych`)
    console.log(`  Publisher: ${stats.publishers.inserted} dodanych, ${stats.publishers.updated} zaktualizowanych`)
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch(err => {
  console.error('BŁĄD:', err.message ?? err)
  process.exit(1)
})
