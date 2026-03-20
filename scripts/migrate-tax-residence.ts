/**
 * Migracja certyfikatów rezydencji podatkowej z SQL Server do PostgreSQL.
 *
 * Źródło:
 *  - tblTaxResidenceCertificate — certyfikaty (właściciel = ClientID → Client lub Publisher)
 *  - tblTaxResidenceSend        — historia wysyłek (odbiorca = ClientID → Client lub Publisher)
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-tax-residence.ts
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
  return v ? v.toLowerCase() === 'true' : def
}

// ─── typy źródłowe ───────────────────────────────────────────────────────────

type SourceCert = {
  CertID: number
  ClientID: number
  ValidDate: Date
  RequestDate: Date | null
  ReceiveDate: Date | null
  UpdateDate: Date
  HasCert: string        // '0' | '1'
  Remarks: string | null
  CertFile: Buffer | null
}

type SourceSend = {
  CertID: number
  ClientID: number
  DateSend: Date | null
  SendOrig: boolean
  SendCopy: boolean
}

// ─── mapowanie CustID → {clientId?, publisherId?} ───────────────────────────

async function buildEntityMaps(pg: PgClient) {
  const clients = await pg.query<{ id: number; sourceId: number }>(
    `SELECT id, "sourceId" FROM "Client" WHERE "sourceId" IS NOT NULL`
  )
  const publishers = await pg.query<{ id: number; sourceId: number }>(
    `SELECT id, "sourceId" FROM "Publisher" WHERE "sourceId" IS NOT NULL`
  )
  const clientMap = new Map<number, number>()
  const publisherMap = new Map<number, number>()
  for (const r of clients.rows) clientMap.set(Number(r.sourceId), r.id)
  for (const r of publishers.rows) publisherMap.set(Number(r.sourceId), r.id)
  return { clientMap, publisherMap }
}

function resolveEntity(
  custId: number,
  clientMap: Map<number, number>,
  publisherMap: Map<number, number>
): { clientId: number | null; publisherId: number | null } {
  // Priorytet: Publisher (bo certyfikaty rezydencji są głównie dla wydawców)
  // ale sprawdzamy oba i bierzemy pierwszy pasujący
  const publisherId = publisherMap.get(custId) ?? null
  const clientId = publisherId ? null : (clientMap.get(custId) ?? null)
  return { clientId, publisherId }
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

    // Pobierz certyfikaty (bez binarnych plików — osobno)
    const certsResult = await pool.request().query<Omit<SourceCert, 'CertFile'>>(`
      SELECT CertID, ClientID, ValidDate, RequestDate, ReceiveDate, UpdateDate,
             HasCert, RTRIM(Remarks) AS Remarks
      FROM tblTaxResidenceCertificate
    `)

    // Pobierz certyfikaty Z plikami (osobne zapytanie — mssql streamuje dane)
    const filesResult = await pool.request().query<{ CertID: number; CertFile: Buffer | null }>(`
      SELECT CertID, CertFile FROM tblTaxResidenceCertificate WHERE CertFile IS NOT NULL
    `)
    const fileMap = new Map<number, Buffer>()
    for (const r of filesResult.recordset) {
      if (r.CertFile) fileMap.set(r.CertID, r.CertFile)
    }

    const sendsResult = await pool.request().query<SourceSend>(`
      SELECT CertID, ClientID, DateSend, SendOrig, SendCopy
      FROM tblTaxResidenceSend
    `)

    const certs = certsResult.recordset
    const sends = sendsResult.recordset

    console.log(`  Certyfikaty: ${certs.length}`)
    console.log(`  Pliki PDF:   ${fileMap.size}`)
    console.log(`  Wysyłki:     ${sends.length}`)

    const { clientMap, publisherMap } = await buildEntityMaps(pg)
    console.log(`  Client mapa: ${clientMap.size}, Publisher mapa: ${publisherMap.size}`)

    const stats = {
      certsInserted: 0, certsSkipped: 0,
      sendsInserted: 0, sendsSkipped: 0,
    }

    await pg.query('BEGIN')
    try {
      await pg.query('DELETE FROM "TaxResidenceSend"')
      await pg.query('DELETE FROM "TaxResidenceCert"')

      // Mapowanie: stary CertID → nowy PG id
      const certIdMap = new Map<number, number>()

      for (const cert of certs) {
        const { clientId, publisherId } = resolveEntity(cert.ClientID, clientMap, publisherMap)

        if (!clientId && !publisherId) {
          stats.certsSkipped++
          continue
        }

        const fileBuffer = fileMap.get(cert.CertID) ?? null
        const fileName = fileBuffer ? `cert_${cert.CertID}.pdf` : null

        const res = await pg.query<{ id: number }>(`
          INSERT INTO "TaxResidenceCert" (
            "sourceId", "clientId", "publisherId",
            "validDate", "requestDate", "receiveDate",
            "hasCert", notes, "fileData", "fileName",
            "createdAt", "updatedAt"
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, NOW(),$11)
          RETURNING id
        `, [
          cert.CertID,
          clientId,
          publisherId,
          cert.ValidDate,
          cert.RequestDate,
          cert.ReceiveDate,
          cert.HasCert === '1',
          cert.Remarks || null,
          fileBuffer,
          fileName,
          cert.UpdateDate,
        ])

        certIdMap.set(cert.CertID, res.rows[0].id)
        stats.certsInserted++
      }

      // Wysyłki
      for (const send of sends) {
        const newCertId = certIdMap.get(send.CertID)
        if (!newCertId) { stats.sendsSkipped++; continue }

        const { clientId, publisherId } = resolveEntity(send.ClientID, clientMap, publisherMap)
        if (!clientId && !publisherId) { stats.sendsSkipped++; continue }

        await pg.query(`
          INSERT INTO "TaxResidenceSend" (
            "certId", "clientId", "publisherId",
            "dateSend", "sendOrig", "sendCopy", "createdAt"
          ) VALUES ($1,$2,$3,$4,$5,$6, NOW())
        `, [
          newCertId,
          clientId,
          publisherId,
          send.DateSend,
          send.SendOrig,
          send.SendCopy,
        ])
        stats.sendsInserted++
      }

      await pg.query('COMMIT')
    } catch (err) {
      await pg.query('ROLLBACK')
      throw err
    }

    console.log('\n✓ Migracja certyfikatów rezydencji zakończona:')
    console.log(`  Certyfikaty wstawione:  ${stats.certsInserted}`)
    console.log(`  Certyfikaty pominięte:  ${stats.certsSkipped} (brak mapowania CustID)`)
    console.log(`  Wysyłki wstawione:      ${stats.sendsInserted}`)
    console.log(`  Wysyłki pominięte:      ${stats.sendsSkipped}`)
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch(err => {
  console.error('BŁĄD:', err.message ?? err)
  process.exit(1)
})
