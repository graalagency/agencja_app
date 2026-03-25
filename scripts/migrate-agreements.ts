/**
 * Migracja umów z SQL Server do PostgreSQL.
 *
 * Kolejność:
 *   1. tblAgreements       → Agreement
 *   2. tblAgrRights        → AgreementRight
 *   3. tblRoyRates         → AgreementRoyRate
 *   4. tblAgrEvents        → AgreementEvent
 *   5. tblAdvance          → AgreementAdvance
 *
 * Wymagane zmienne środowiskowe (.env):
 *   DATABASE_URL, SQLSERVER_HOST, SQLSERVER_INSTANCE, SQLSERVER_DATABASE,
 *   SQLSERVER_USER, SQLSERVER_PASSWORD
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-agreements.ts
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
      instanceName:            process.env.SQLSERVER_INSTANCE || undefined,
      encrypt:                 process.env.SQLSERVER_ENCRYPT === 'true',
      trustServerCertificate:  process.env.SQLSERVER_TRUST_SERVER_CERTIFICATE !== 'false',
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
  const cols   = Object.keys(rows[0])
  const colStr = cols.map(c => `"${c}"`).join(', ')
  const updates = cols.filter(c => c !== conflictCol).map(c => `"${c}" = EXCLUDED."${c}"`).join(', ')
  let inserted = 0

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

// ─── Krok 1: Agreement ────────────────────────────────────────────────────────

async function migrateAgreements(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[1/5] tblAgreements → Agreement')

  // Mapy sourceId → id dla kluczy obcych
  const pubMap = new Map<number, number>()
  const cliMap = new Map<number, number>()
  const titMap = new Map<number, number>()

  const [pubRows, cliRows, titRows] = await Promise.all([
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Publisher" WHERE "sourceId" IS NOT NULL'),
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Client"    WHERE "sourceId" IS NOT NULL'),
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Title"     WHERE "sourceId" IS NOT NULL'),
  ])
  pubRows.rows.forEach(r => pubMap.set(r.sourceId, r.id))
  cliRows.rows.forEach(r => cliMap.set(r.sourceId, r.id))
  titRows.rows.forEach(r => titMap.set(r.sourceId, r.id))

  console.log(`  Mapy: ${pubMap.size} wydawców, ${cliMap.size} klientów, ${titMap.size} tytułów`)

  const result = await mssql.request().query<{
    AgrID: number; CustID: number | null; ClientID: number | null; TitleID: number | null
    CountryID: number | null; LangAbbr: string | null; CurrID: string | null
    AgrDate: Date; ValidYY: number | null; PubTermMM: number | null
    MaxNoOfCopies: number | null; MinNoOfCopies: number | null
    Commission: number | null; CommissionMaterials: number | null
    ClientReference: string | null; GraalAgentID: number | null
    GraalShare: number | null; EstimatedCopyPrice: number | null
    GraalRepresent: boolean; Remarks: string | null; AgrDoc: string | null
    Status: string | null; CopiesToOwner: number | null; CopiesToGraal: number | null
    LocalTitle: string | null; LocalISBN: string | null; LocalPubDate: Date | null
    AgentID: number | null; DateMod: Date | null; UserMod: string | null
  }>('SELECT * FROM tblAgreements')

  let skipped = 0
  const rows = result.recordset.map(r => {
    const publisherId = r.CustID    ? (pubMap.get(r.CustID)    ?? null) : null
    const clientId    = r.ClientID  ? (cliMap.get(r.ClientID)  ?? null) : null
    const titleId     = r.TitleID   ? (titMap.get(r.TitleID)   ?? null) : null

    if (!publisherId && r.CustID)   skipped++
    if (!clientId    && r.ClientID) skipped++
    if (!titleId     && r.TitleID)  skipped++

    return {
      sourceId:            r.AgrID,
      publisherId,
      clientId,
      titleId,
      agrDate:             toDate(r.AgrDate) ?? new Date('1900-01-01'),
      validYY:             r.ValidYY    ?? null,
      pubTermMM:           r.PubTermMM  ?? null,
      maxCopies:           r.MaxNoOfCopies ?? null,
      minCopies:           r.MinNoOfCopies ?? null,
      copiesToOwner:       r.CopiesToOwner ?? null,
      copiesToGraal:       r.CopiesToGraal ?? null,
      currencyCode:        trim(r.CurrID),
      commission:          r.Commission           ?? null,
      commissionMaterials: r.CommissionMaterials  ?? null,
      estimatedCopyPrice:  r.EstimatedCopyPrice   ?? null,
      graalShare:          r.GraalShare           ?? null,
      graalRepresent:      r.GraalRepresent ?? true,
      languageCode:        trim(r.LangAbbr),
      countryId:           r.CountryID   ?? null,
      localTitle:          trim(r.LocalTitle),
      localIsbn:           trim(r.LocalISBN),
      localPubDate:        toDate(r.LocalPubDate),
      clientReference:     trim(r.ClientReference),
      agrDoc:              trim(r.AgrDoc),
      status:              trim(r.Status),
      remarks:             trim(r.Remarks),
      agentId:             r.AgentID    ?? null,
      dateMod:             toDate(r.DateMod),
      userMod:             trim(r.UserMod),
      updatedAt:           toDate(r.DateMod) ?? new Date(),
    }
  })

  console.log(`  ${rows.length} umów, ${skipped} nierozwiązanych FK (brak odpowiednika w target)`)
  await upsertBatch(pg, 'Agreement', rows)
}

// ─── Krok 2: AgreementRight ───────────────────────────────────────────────────

async function migrateRights(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[2/5] tblAgrRights → AgreementRight')

  const agrMap = new Map<number, number>()
  const agrRows = await pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Agreement" WHERE "sourceId" IS NOT NULL')
  agrRows.rows.forEach(r => agrMap.set(r.sourceId, r.id))

  const result = await mssql.request().query<{
    AgrRightID: number; AgrID: number | null
    RightID: number | null; PriceTypeID: number | null
    RoyPriceTypeID: number | null; RoyAccountIntervalID: number | null; DistID: number | null
  }>('SELECT * FROM tblAgrRights')

  let skipped = 0
  const rows = result.recordset
    .filter(r => {
      const ok = r.AgrID && agrMap.has(r.AgrID)
      if (!ok) skipped++
      return ok
    })
    .map(r => ({
      sourceId:             r.AgrRightID,
      agreementId:          agrMap.get(r.AgrID!)!,
      rightFormId:          r.RightID             ?? null,
      priceTypeId:          r.PriceTypeID         ?? null,
      royPriceTypeId:       r.RoyPriceTypeID      ?? null,
      royAccountIntervalId: r.RoyAccountIntervalID ?? null,
      distributionTypeId:   r.DistID              ?? null,
    }))

  console.log(`  ${rows.length} praw, ${skipped} pominięto (brak umowy)`)
  await upsertBatch(pg, 'AgreementRight', rows)
}

// ─── Krok 3: AgreementRoyRate ─────────────────────────────────────────────────

async function migrateRoyRates(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[3/5] tblRoyRates → AgreementRoyRate')

  const agrMap   = new Map<number, number>()
  const rightMap = new Map<number, number>()
  const [agrRows, rightRows] = await Promise.all([
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Agreement"      WHERE "sourceId" IS NOT NULL'),
    pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "AgreementRight" WHERE "sourceId" IS NOT NULL'),
  ])
  agrRows.rows.forEach(r   => agrMap.set(r.sourceId, r.id))
  rightRows.rows.forEach(r => rightMap.set(r.sourceId, r.id))

  const result = await mssql.request().query<{
    AgrID: number | null; AgrRightID: number | null
    Step: number; CpsMax: number | null; Rate: number
  }>('SELECT * FROM tblRoyRates')

  let skipped = 0
  const rows = result.recordset
    .filter(r => {
      const ok = r.AgrRightID && rightMap.has(r.AgrRightID) && r.AgrID && agrMap.has(r.AgrID)
      if (!ok) skipped++
      return ok
    })
    .map(r => ({
      agreementId: agrMap.get(r.AgrID!)!,
      rightId:     rightMap.get(r.AgrRightID!)!,
      step:        r.Step,
      copiesMax:   r.CpsMax ?? null,
      rate:        r.Rate,
    }))

  console.log(`  ${rows.length} stawek, ${skipped} pominięto`)

  // RoyRate nie ma naturalnego sourceId — używamy UPSERT przez (rightId, step)
  if (rows.length === 0) return
  const cols = Object.keys(rows[0])
  const colStr = cols.map(c => `"${c}"`).join(', ')
  const updates = cols.filter(c => !['rightId', 'step'].includes(c)).map(c => `"${c}" = EXCLUDED."${c}"`).join(', ')
  let inserted = 0

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch  = rows.slice(i, i + BATCH_SIZE)
    const values: unknown[] = []
    const placeholders = batch.map((row, ri) => {
      const ph = cols.map((_, ci) => `$${ri * cols.length + ci + 1}`)
      cols.forEach(c => values.push(row[c as keyof typeof row]))
      return `(${ph.join(', ')})`
    }).join(', ')

    const q = `INSERT INTO "AgreementRoyRate" (${colStr}) VALUES ${placeholders}
               ON CONFLICT ("rightId", "step") DO UPDATE SET ${updates}`
    if (!DRY_RUN) await pg.query(q, values)
    inserted += batch.length
    process.stdout.write(`  AgreementRoyRate: ${inserted}/${rows.length}\r`)
  }
  console.log(`  AgreementRoyRate: ${inserted} wierszy${DRY_RUN ? ' [DRY RUN]' : ''} ✓`)
}

// ─── Krok 4: AgreementEvent ───────────────────────────────────────────────────

async function migrateEvents(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[4/5] tblAgrEvents → AgreementEvent')

  const agrMap = new Map<number, number>()
  const agrRows = await pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Agreement" WHERE "sourceId" IS NOT NULL')
  agrRows.rows.forEach(r => agrMap.set(r.sourceId, r.id))

  const result = await mssql.request().query<{
    AgrEventID: number; AgrID: number | null; AgrEventCode: number
    EventDate: Date | null; NoOfCopies: number | null; EndDate: Date | null
    DateMod: Date | null; UserMod: string | null
  }>('SELECT * FROM tblAgrEvents')

  let skipped = 0
  const rows = result.recordset
    .filter(r => {
      const ok = r.AgrID && agrMap.has(r.AgrID)
      if (!ok) skipped++
      return ok
    })
    .map(r => ({
      sourceId:    r.AgrEventID,
      agreementId: agrMap.get(r.AgrID!)!,
      eventCode:   r.AgrEventCode,
      eventDate:   toDate(r.EventDate),
      endDate:     toDate(r.EndDate),
      noOfCopies:  r.NoOfCopies ?? null,
      dateMod:     toDate(r.DateMod),
      userMod:     trim(r.UserMod),
    }))

  console.log(`  ${rows.length} zdarzeń, ${skipped} pominięto`)
  await upsertBatch(pg, 'AgreementEvent', rows)
}

// ─── Krok 5: AgreementAdvance ─────────────────────────────────────────────────

async function migrateAdvances(mssql: sql.ConnectionPool, pg: PgClient) {
  console.log('\n[5/5] tblAdvance → AgreementAdvance')

  const agrMap = new Map<number, number>()
  const agrRows = await pg.query<{ id: number; sourceId: number }>('SELECT id, "sourceId" FROM "Agreement" WHERE "sourceId" IS NOT NULL')
  agrRows.rows.forEach(r => agrMap.set(r.sourceId, r.id))

  const result = await mssql.request().query<{
    AdvID: number; AgrID: number | null; Inst: number | null
    AdvTermId: number | null; AdvTypeId: number | null
    Amount: number; AdvTermDate: Date | null; RoyID: number | null
  }>('SELECT * FROM tblAdvance')

  let skipped = 0
  const rows = result.recordset
    .filter(r => {
      const ok = r.AgrID && agrMap.has(r.AgrID)
      if (!ok) skipped++
      return ok
    })
    .map(r => ({
      sourceId:    r.AdvID,
      agreementId: agrMap.get(r.AgrID!)!,
      instalment:  r.Inst      ?? null,
      advTermId:   r.AdvTermId ?? null,
      advTypeId:   r.AdvTypeId ?? null,
      amount:      r.Amount,
      termDate:    toDate(r.AdvTermDate),
      royaltyId:   r.RoyID     ?? null,
    }))

  console.log(`  ${rows.length} zaliczek, ${skipped} pominięto`)
  await upsertBatch(pg, 'AgreementAdvance', rows)
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n${'─'.repeat(60)}`)
  console.log('Migracja umów: SQL Server → PostgreSQL')
  console.log(`DRY_RUN: ${DRY_RUN}, BATCH_SIZE: ${BATCH_SIZE}`)
  console.log(`${'─'.repeat(60)}\n`)

  const [mssql, pg] = await Promise.all([connectMssql(), connectPg()])

  try {
    await migrateAgreements(mssql, pg)
    await migrateRights(mssql, pg)
    await migrateRoyRates(mssql, pg)
    await migrateEvents(mssql, pg)
    await migrateAdvances(mssql, pg)

    // Statystyki końcowe
    const [agr, rights, rates, events, advances] = await Promise.all([
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "Agreement"'),
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "AgreementRight"'),
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "AgreementRoyRate"'),
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "AgreementEvent"'),
      pg.query<{ cnt: string }>('SELECT COUNT(*) as cnt FROM "AgreementAdvance"'),
    ])
    console.log('\n── Wynik w bazie docelowej ──────────────────────────────────')
    console.log(`  Agreement:         ${agr.rows[0].cnt}`)
    console.log(`  AgreementRight:    ${rights.rows[0].cnt}`)
    console.log(`  AgreementRoyRate:  ${rates.rows[0].cnt}`)
    console.log(`  AgreementEvent:    ${events.rows[0].cnt}`)
    console.log(`  AgreementAdvance:  ${advances.rows[0].cnt}`)
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
