/**
 * Migracja tytułów z SQL Server do PostgreSQL.
 *
 * Źródło: tblTitles (właściciel praw = CustID → Client lub Publisher)
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-titles.ts
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

type SourceTitle = {
  TitleID: number
  CustID: number | null
  Title: string
  ISBN: string | null
  ISBN0: string | null
  ISBN1: string | null
  ISBN2: string | null
  ISBN3: string | null
  ISBN4: string | null
  LangAbb: string | null
  ClassCode: string | null
  Edition: number | null
  NoOfPages: number | null
  CopyrightYear: string | null
  CopyrightOwnerDesc: string | null
  KeyWords: string | null
  TitleVolume: number | null
  NoOfTitleVolumes: number | null
  Hit: boolean | null
  Collection: boolean | null
  CD: boolean | null
  Remarks: string | null
  DateOfReceipt: Date | null
  DateMod: Date
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
  // Publisher ma priorytet (tytuły głównie od wydawców zagranicznych)
  const publisherId = publisherMap.get(custId) ?? null
  const clientId = publisherId ? null : (clientMap.get(custId) ?? null)
  return { clientId, publisherId }
}

// ─── normalizacja ISBN ────────────────────────────────────────────────────────

function normalizeISBN(row: SourceTitle): string | null {
  // Preferuj pole ISBN (pełny numer), fallback na sklejenie ISBN0-4
  if (row.ISBN?.trim()) return row.ISBN.trim()
  const parts = [row.ISBN0, row.ISBN1, row.ISBN2, row.ISBN3, row.ISBN4]
    .map(p => p?.trim() ?? '')
    .filter(Boolean)
  if (parts.length > 0) return parts.join('-')
  return null
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
    console.log('Pobieranie tytułów...')
    const result = await pool.request().query<SourceTitle>(`
      SELECT
        TitleID, CustID,
        RTRIM(Title) AS Title,
        RTRIM(ISBN) AS ISBN,
        RTRIM(ISBN0) AS ISBN0,
        RTRIM(ISBN1) AS ISBN1,
        RTRIM(ISBN2) AS ISBN2,
        RTRIM(ISBN3) AS ISBN3,
        RTRIM(ISBN4) AS ISBN4,
        RTRIM(LangAbb) AS LangAbb,
        RTRIM(ClassCode) AS ClassCode,
        Edition, NoOfPages,
        RTRIM(CopyrightYear) AS CopyrightYear,
        RTRIM(CopyrightOwnerDesc) AS CopyrightOwnerDesc,
        RTRIM(KeyWords) AS KeyWords,
        TitleVolume, NoOfTitleVolumes,
        Hit, Collection, CD,
        RTRIM(Remarks) AS Remarks,
        DateOfReceipt, DateMod
      FROM tblTitles
    `)

    const titles = result.recordset
    console.log(`  Tytuły: ${titles.length}`)

    const { clientMap, publisherMap } = await buildEntityMaps(pg)
    console.log(`  Client mapa: ${clientMap.size}, Publisher mapa: ${publisherMap.size}`)

    const stats = { inserted: 0, skipped: 0, noOwner: 0 }

    await pg.query('BEGIN')
    try {
      await pg.query('DELETE FROM "Title"')

      for (const t of titles) {
        let clientId: number | null = null
        let publisherId: number | null = null

        if (t.CustID) {
          const resolved = resolveEntity(t.CustID, clientMap, publisherMap)
          clientId = resolved.clientId
          publisherId = resolved.publisherId
        }

        if (!clientId && !publisherId) {
          stats.noOwner++
        }

        const isbn = normalizeISBN(t)

        await pg.query(`
          INSERT INTO "Title" (
            "sourceId", "clientId", "publisherId",
            "title", "isbn", "languageCode", "classCode",
            "edition", "pages", "copyrightYear", "copyrightOwner",
            "keywords", "volume", "totalVolumes",
            "isHit", "isCollection", "isCD",
            "notes", "dateOfReceipt", "createdAt", "updatedAt"
          ) VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19, NOW(),$20
          )
          ON CONFLICT ("sourceId") DO UPDATE SET
            "clientId"      = EXCLUDED."clientId",
            "publisherId"   = EXCLUDED."publisherId",
            "title"         = EXCLUDED."title",
            "isbn"          = EXCLUDED."isbn",
            "languageCode"  = EXCLUDED."languageCode",
            "classCode"     = EXCLUDED."classCode",
            "edition"       = EXCLUDED."edition",
            "pages"         = EXCLUDED."pages",
            "copyrightYear" = EXCLUDED."copyrightYear",
            "copyrightOwner"= EXCLUDED."copyrightOwner",
            "keywords"      = EXCLUDED."keywords",
            "volume"        = EXCLUDED."volume",
            "totalVolumes"  = EXCLUDED."totalVolumes",
            "isHit"         = EXCLUDED."isHit",
            "isCollection"  = EXCLUDED."isCollection",
            "isCD"          = EXCLUDED."isCD",
            "notes"         = EXCLUDED."notes",
            "dateOfReceipt" = EXCLUDED."dateOfReceipt",
            "updatedAt"     = EXCLUDED."updatedAt"
        `, [
          t.TitleID,
          clientId,
          publisherId,
          t.Title,
          isbn,
          t.LangAbb || null,
          t.ClassCode || null,
          t.Edition,
          t.NoOfPages,
          t.CopyrightYear || null,
          t.CopyrightOwnerDesc || null,
          t.KeyWords || null,
          t.TitleVolume,
          t.NoOfTitleVolumes,
          t.Hit ?? false,
          t.Collection ?? false,
          t.CD ?? false,
          t.Remarks || null,
          t.DateOfReceipt,
          t.DateMod,
        ])

        stats.inserted++
      }

      await pg.query('COMMIT')
    } catch (err) {
      await pg.query('ROLLBACK')
      throw err
    }

    console.log('\n✓ Migracja tytułów zakończona:')
    console.log(`  Wstawione/zaktualizowane: ${stats.inserted}`)
    console.log(`  Bez właściciela (CustID null lub brak mapowania): ${stats.noOwner}`)
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch(err => {
  console.error('BŁĄD:', err.message ?? err)
  process.exit(1)
})
