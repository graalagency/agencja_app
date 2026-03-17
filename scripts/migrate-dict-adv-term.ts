import sql from 'mssql'
import { Client } from 'pg'

function required(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value
}

function envBool(name: string, defaultValue: boolean): boolean {
  const value = process.env[name]
  if (!value) return defaultValue
  return value.toLowerCase() === 'true'
}

type AdvTermRow = {
  AdvTermId: number
  AdvTermDesc: string | null
  AdvTermPL: string | null
}

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

  const pgClient = new Client({
    connectionString: required('DATABASE_URL'),
  })

  const sqlPool = await sql.connect(sqlConfig)
  await pgClient.connect()

  try {
    const source = await sqlPool
      .request()
      .query<AdvTermRow>('SELECT AdvTermId, AdvTermDesc, AdvTermPL FROM dictAdvTerm ORDER BY AdvTermId')

    const rows = source.recordset

    let inserted = 0
    let updated = 0

    await pgClient.query('BEGIN')

    for (const row of rows) {
      const result = await pgClient.query<{ inserted: boolean }>(
        `
        INSERT INTO "dictAdvTerm" ("AdvTermId", "AdvTermDesc", "AdvTermPL")
        VALUES ($1, $2, $3)
        ON CONFLICT ("AdvTermId") DO UPDATE
        SET
          "AdvTermDesc" = EXCLUDED."AdvTermDesc",
          "AdvTermPL" = EXCLUDED."AdvTermPL"
        RETURNING (xmax = 0) AS inserted
        `,
        [row.AdvTermId, row.AdvTermDesc, row.AdvTermPL]
      )

      if (result.rows[0]?.inserted) {
        inserted += 1
      } else {
        updated += 1
      }
    }

    await pgClient.query('COMMIT')

    console.log(
      JSON.stringify(
        {
          sourceCount: rows.length,
          inserted,
          updated,
          targetTable: 'dictAdvTerm',
        },
        null,
        2
      )
    )
  } catch (error) {
    await pgClient.query('ROLLBACK')
    throw error
  } finally {
    await pgClient.end()
    await sqlPool.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
