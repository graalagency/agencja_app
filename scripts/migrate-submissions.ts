/**
 * Migracja wysyłek z SQL Server do PostgreSQL.
 *
 * Kolejność:
 *   1. tblSubmissions  → Submission
 *   2. tblSubmEvents   → SubmissionEvent
 *
 * Wymagane zmienne środowiskowe (.env):
 *   DATABASE_URL, SQLSERVER_HOST, SQLSERVER_INSTANCE, SQLSERVER_DATABASE,
 *   SQLSERVER_USER, SQLSERVER_PASSWORD
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-submissions.ts
 *
 * Opcje:
 *   DRY_RUN=true   — tylko raport, bez zapisu do bazy
 *   BATCH_SIZE=500 — rozmiar wsadu INSERT (domyślnie 500)
 */

import 'dotenv/config'
import sql from 'mssql'
import { Client as PgClient } from 'pg'

function required(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

const DRY_RUN    = process.env.DRY_RUN === 'true'
const BATCH_SIZE = Number(process.env.BATCH_SIZE || '500')

// ─── Połączenia ───────────────────────────────────────────────────────────────

async function connectMssql(): Promise<sql.ConnectionPool> {
  const pool = await sql.connect({
    server:   required('SQLSERVER_HOST'),
    database: required('SQLSERVER_DATABASE'),
    authentication: {
      type: 'default',
      options: { userName: required('SQLSERVER_USER'), password: required('SQLSERVER_PASSWORD') },
    },
    options: {
      instanceName:           process.env.SQLSERVER_INSTANCE || undefined,
      encrypt:                process.env.SQLSERVER_ENCRYPT === 'true',
      trustServerCertificate: process.env.SQLSERVER_TRUST_SERVER_CERTIFICATE !== 'false',
    },
  })
  console.log('✓ SQL Server connected')
  return pool
}

async function connectPg(): Promise<PgClient> {
  const pg = new PgClient({ connectionString: required('DATABASE_URL') })
  await pg.connect()
  console.log('✓ PostgreSQL connected')
  return pg
}

// ─── Pomocniki ────────────────────────────────────────────────────────────────

function trim(v: string | null | undefined): string | null {
  if (v == null) return null
  const s = v.trim()
  return s === '' ? null : s
}

function toDate(v: Date | null | undefined): Date | null {
  return v instanceof Date && !isNaN(v.getTime()) ? v : null
}

async function upsertBatch(pg: PgClient, table: string, rows: Record<string, unknown>[], conflictCol = 'sourceId') {
  if (rows.length === 0) return 0
  const cols    = Object.keys(rows[0])
  const colStr  = cols.map(c => `"${c}"`).join(', ')
  const updates = cols.filter(c => c !== conflictCol).map(c => `"${c}" = EXCLUDED."${c}"`).join(', ')
  let inserted  = 0

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch  = rows.slice(i, i + BATCH_SIZE)
    const values: unknown[] = []
    const placeholders = batch.map((row, ri) => {
      const ph = cols.map((_, ci) => `$${ri * cols.length + ci + 1}`)
      cols.forEach(c => values.push(row[c]))
      return `(${ph.join(', ')})`
    }).join(', ')

    const q = `INSERT INTO "${table}" (${colStr}) VALUES ${placeholders}
               ON CONFLICT ("${conflictCol}") DO UPDATE SET ${updates}`
    if (!DRY_RUN) await pg.query(q, values)
    inserted += batch.length
    process.stdout.write(`  ${table}: ${inserted}/${rows.length}\r`)
  }
  console.log(`  ${table}: ${inserted} wierszy${DRY_RUN ? ' [DRY RUN]' : ''} ✓`)
  return inserted
}

// ─── Krok 1: Submission ───────────────────────────────────────────────────────

async function migrateSubmissions(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[1/2] tblSubmissions → Submission')

  const pubMap = new Map<number, number>()
  const titMap = new Map<number, number>()

  const [pubRows, titRows] = await Promise.all([
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Publisher" WHERE "sourceId" IS NOT NULL'),
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Title"     WHERE "sourceId" IS NOT NULL'),
  ])
  pubRows.rows.forEach(r => pubMap.set(r.sourceId, r.id))
  titRows.rows.forEach(r => titMap.set(r.sourceId, r.id))

  console.log(`  Mapy: ${pubMap.size} wydawców, ${titMap.size} tytułów`)

  const result = await mssql.request().query<{
    SubmID: number
    TitleID: number | null
    CustID: number | null
    ContactID: number | null
    CopyTypeID: number | null
    SubmSentTypeID: number | null
    SubmDate: Date
    SentDate: Date | null
    EndDate: Date | null
    ReturnDate: Date | null
    NoOfCopies: number | null
    TrackingNo: string | null
    Exclusive: number | null
    SubmNr: number | null
    Status: string | null
    Remarks: string | null
    UserMod: string | null
    DateMod: Date | null
  }>('SELECT * FROM tblSubmissions')

  let skipped = 0
  const rows = result.recordset.map(r => {
    const publisherId = r.CustID   ? (pubMap.get(r.CustID)   ?? null) : null
    const titleId     = r.TitleID  ? (titMap.get(r.TitleID)  ?? null) : null

    if (!publisherId && r.CustID)  skipped++
    if (!titleId     && r.TitleID) skipped++

    return {
      sourceId:       r.SubmID,
      titleId,
      publisherId,
      contactId:      r.ContactID      ?? null,
      copyTypeId:     r.CopyTypeID     ?? null,
      submSentTypeId: r.SubmSentTypeID ?? null,
      submDate:       toDate(r.SubmDate) ?? new Date('1900-01-01'),
      sentDate:       toDate(r.SentDate),
      endDate:        toDate(r.EndDate),
      returnDate:     toDate(r.ReturnDate),
      noOfCopies:     r.NoOfCopies  ?? null,
      trackingNo:     trim(r.TrackingNo),
      exclusive:      r.Exclusive === 1,
      submNr:         r.SubmNr     ?? null,
      status:         trim(r.Status),
      remarks:        trim(r.Remarks),
      userMod:        trim(r.UserMod),
      dateMod:        toDate(r.DateMod),
      updatedAt:      toDate(r.DateMod) ?? new Date(),
    }
  })

  console.log(`  ${rows.length} wysyłek, ${skipped} nierozwiązanych FK`)
  await upsertBatch(pg, 'Submission', rows)
}

// ─── Krok 2: SubmissionEvent ──────────────────────────────────────────────────
// Źródło: tblEvents WHERE EventCode BETWEEN 200 AND 299
// Join:   tblEvents.ID = tblSubmissions.SubmID (= Submission.sourceId)

async function migrateSubmissionEvents(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[2/2] tblEvents (200–299) → SubmissionEvent')

  // Mapa sourceId (SubmID) → wewnętrzne id Submission
  const submMap = new Map<number, number>()
  const submRows = await pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Submission" WHERE "sourceId" IS NOT NULL')
  submRows.rows.forEach(r => submMap.set(r.sourceId, r.id))

  const result = await mssql.request().query<{
    TitleID: number | null
    EventCode: number
    ID: number           // = SubmID w tblSubmissions
    DateMod: Date | null
    UserMod: string | null
  }>('SELECT TitleID, EventCode, ID, DateMod, UserMod FROM tblEvents WHERE EventCode BETWEEN 200 AND 299')

  let skipped = 0
  const rows = result.recordset
    .filter(r => {
      const ok = submMap.has(r.ID) && r.EventCode != null
      if (!ok) skipped++
      return ok
    })
    .map(r => ({
      submissionId: submMap.get(r.ID)!,
      eventCode:    r.EventCode,
      eventDate:    toDate(r.DateMod) ?? new Date('1900-01-01'),
      noOfCopies:   null as number | null,
      endDate:      null as Date | null,
    }))

  console.log(`  ${rows.length} zdarzeń, ${skipped} pominięto (brak wysyłki)`)

  if (!DRY_RUN) {
    await pg.query('TRUNCATE TABLE "SubmissionEvent" RESTART IDENTITY')
    console.log('  SubmissionEvent: wyczyszczono')
  }

  // INSERT bez sourceId (brak naturalnego PK w źródle) — zwykły batch insert
  if (rows.length === 0) return 0
  const cols    = Object.keys(rows[0])
  const colStr  = cols.map(c => `"${c}"`).join(', ')
  let inserted  = 0

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch  = rows.slice(i, i + BATCH_SIZE)
    const values: unknown[] = []
    const placeholders = batch.map((row, ri) => {
      const ph = cols.map((_, ci) => `$${ri * cols.length + ci + 1}`)
      cols.forEach(c => values.push((row as any)[c]))
      return `(${ph.join(', ')})`
    }).join(', ')

    const q = `INSERT INTO "SubmissionEvent" (${colStr}) VALUES ${placeholders}`
    if (!DRY_RUN) await pg.query(q, values)
    inserted += batch.length
    process.stdout.write(`  SubmissionEvent: ${inserted}/${rows.length}\r`)
  }
  console.log(`  SubmissionEvent: ${inserted} wierszy${DRY_RUN ? ' [DRY RUN]' : ''} ✓`)
  return inserted
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n${'─'.repeat(60)}`)
  console.log('Migracja wysyłek: SQL Server → PostgreSQL')
  console.log(`DRY_RUN: ${DRY_RUN}, BATCH_SIZE: ${BATCH_SIZE}`)
  console.log(`${'─'.repeat(60)}\n`)

  const [mssql, pg] = await Promise.all([connectMssql(), connectPg()])

  const eventsOnly = process.env.EVENTS_ONLY === 'true'

  try {
    if (!eventsOnly) await migrateSubmissions(mssql, pg)
    await migrateSubmissionEvents(mssql, pg)

    const [subm, events] = await Promise.all([
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "Submission"'),
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "SubmissionEvent"'),
    ])
    console.log('\n── Wynik w bazie docelowej ──────────────────────────────────')
    console.log(`  Submission:       ${subm.rows[0].cnt}`)
    console.log(`  SubmissionEvent:  ${events.rows[0].cnt}`)
    console.log('────────────────────────────────────────────────────────────\n')

  } finally {
    await mssql.close()
    await pg.end()
  }
}

main().catch(err => {
  console.error('\n❌ Migracja nieudana:', err.message)
  process.exit(1)
})
