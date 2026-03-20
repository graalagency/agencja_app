/**
 * Migracja autorów z SQL Server do PostgreSQL.
 *
 * Etap 1: tblAuthors → Author (sourceId, firstName, lastName, ...)
 * Etap 2: tblTitAuthors → TitleAuthor (powiązania tytuł↔autor)
 *
 * Uruchomienie:
 *   npx tsx scripts/migrate-authors.ts
 */

import 'dotenv/config'
import sql from 'mssql'
import { Client as PgClient } from 'pg'

function required(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

type SourceAuthor = {
  AuthorID: number
  FirstName: string | null
  MiddleName: string | null
  LastName: string | null
  Suffix: string | null
  PenName: string | null
  Remarks: string | null
  DateMod: Date
}

type SourceTitAuth = {
  AuthorID: number
  TitleID: number
  Main: number | null
  Lp: number
}

async function main() {
  const sqlConfig: sql.config = {
    user: required('SQLSERVER_USER'),
    password: required('SQLSERVER_PASSWORD'),
    server: required('SQLSERVER_HOST'),
    database: required('SQLSERVER_DATABASE'),
    options: {
      instanceName: process.env.SQLSERVER_INSTANCE,
      encrypt: false,
      trustServerCertificate: true,
    },
  }

  console.log('Łączenie z SQL Server...')
  const pool = await sql.connect(sqlConfig)

  console.log('Łączenie z PostgreSQL...')
  const pg = new PgClient({ connectionString: required('DATABASE_URL') })
  await pg.connect()

  try {
    // ── Etap 1: Autorzy ───────────────────────────────────────────────────────
    console.log('\n=== Etap 1: Autorzy ===')
    const authResult = await pool.request().query<SourceAuthor>(`
      SELECT
        AuthorID,
        RTRIM(FirstName)  AS FirstName,
        RTRIM(MiddleName) AS MiddleName,
        RTRIM(LastName)   AS LastName,
        RTRIM(Suffix)     AS Suffix,
        RTRIM(PenName)    AS PenName,
        RTRIM(Remarks)    AS Remarks,
        DateMod
      FROM tblAuthors
    `)
    const authors = authResult.recordset
    console.log(`  Autorzy: ${authors.length}`)

    await pg.query('BEGIN')
    try {
      let inserted = 0
      for (const a of authors) {
        const firstName = a.FirstName?.trim() || null
        const lastName = a.LastName?.trim() || null

        // Jeśli brak imienia i nazwiska — użyj LastName jako lastName
        const finalFirst = firstName || ''
        const finalLast = lastName || '(brak)'

        await pg.query(`
          INSERT INTO "Author" (
            "sourceId", "firstName", "middleName", "lastName",
            "suffix", "penName", "description",
            "createdAt", "updatedAt"
          ) VALUES ($1,$2,$3,$4,$5,$6,$7, NOW(),$8)
          ON CONFLICT ("sourceId") DO UPDATE SET
            "firstName"   = EXCLUDED."firstName",
            "middleName"  = EXCLUDED."middleName",
            "lastName"    = EXCLUDED."lastName",
            "suffix"      = EXCLUDED."suffix",
            "penName"     = EXCLUDED."penName",
            "description" = EXCLUDED."description",
            "updatedAt"   = EXCLUDED."updatedAt"
        `, [
          a.AuthorID,
          finalFirst,
          a.MiddleName?.trim() || null,
          finalLast,
          a.Suffix?.trim() || null,
          a.PenName?.trim() || null,
          a.Remarks?.trim() || null,
          a.DateMod,
        ])
        inserted++
      }
      await pg.query('COMMIT')
      console.log(`  Wstawione/zaktualizowane: ${inserted}`)
    } catch (err) {
      await pg.query('ROLLBACK')
      throw err
    }

    // ── Etap 2: Powiązania Tytuł↔Autor ───────────────────────────────────────
    console.log('\n=== Etap 2: Powiązania TitleAuthor ===')
    const taResult = await pool.request().query<SourceTitAuth>(`
      SELECT AuthorID, TitleID, Main, Lp FROM tblTitAuthors
    `)
    const titAuthors = taResult.recordset
    console.log(`  Powiązania: ${titAuthors.length}`)

    // Zbuduj mapy sourceId → id
    const titleMap = new Map<number, number>()
    const authorMap = new Map<number, number>()

    const titleRows = await pg.query<{ id: number; sourceId: number }>(`SELECT id, "sourceId" FROM "Title" WHERE "sourceId" IS NOT NULL`)
    const authorRows = await pg.query<{ id: number; sourceId: number }>(`SELECT id, "sourceId" FROM "Author" WHERE "sourceId" IS NOT NULL`)
    for (const r of titleRows.rows) titleMap.set(Number(r.sourceId), r.id)
    for (const r of authorRows.rows) authorMap.set(Number(r.sourceId), r.id)
    console.log(`  Mapa tytułów: ${titleMap.size}, mapa autorów: ${authorMap.size}`)

    await pg.query('BEGIN')
    try {
      await pg.query('DELETE FROM "TitleAuthor"')

      const stats = { inserted: 0, skipped: 0 }
      for (const ta of titAuthors) {
        const titleId = titleMap.get(ta.TitleID)
        const authorId = authorMap.get(ta.AuthorID)
        if (!titleId || !authorId) { stats.skipped++; continue }

        await pg.query(`
          INSERT INTO "TitleAuthor" ("titleId", "authorId", "isMain", "order")
          VALUES ($1, $2, $3, $4)
          ON CONFLICT ("titleId", "authorId") DO UPDATE SET
            "isMain" = EXCLUDED."isMain",
            "order"  = EXCLUDED."order"
        `, [titleId, authorId, ta.Main === 1, ta.Lp ?? 1])
        stats.inserted++
      }
      await pg.query('COMMIT')
      console.log(`  Wstawione: ${stats.inserted}, pominięte (brak mapowania): ${stats.skipped}`)
    } catch (err) {
      await pg.query('ROLLBACK')
      throw err
    }

    console.log('\n✓ Migracja autorów zakończona.')
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch(err => {
  console.error('BŁĄD:', err.message ?? err)
  process.exit(1)
})
