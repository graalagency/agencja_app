import sql from 'mssql'
import { Client } from 'pg'

type MigrationResult = {
  table: string
  sourceCount: number
  inserted: number
  updated: number
  mode: 'upsert' | 'replace'
}

function required(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required env var: ${name}`)
  return value
}

function envBool(name: string, defaultValue: boolean): boolean {
  const value = process.env[name]
  if (!value) return defaultValue
  return value.toLowerCase() === 'true'
}

function q(identifier: string): string {
  return `"${identifier.replace(/"/g, '""')}"`
}

function sourceQ(identifier: string): string {
  return `[${identifier.replace(/\]/g, ']]')}]`
}

async function getTargetDictTables(pg: Client): Promise<string[]> {
  const result = await pg.query<{ tablename: string }>(
    `
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public'
      AND tablename LIKE 'dict%'
      AND tablename <> 'dictDictionaries'
    ORDER BY tablename
    `
  )
  return result.rows.map((r) => r.tablename)
}

async function sourceTableExists(pool: sql.ConnectionPool, table: string): Promise<boolean> {
  const result = await pool
    .request()
    .input('table', sql.NVarChar(128), table)
    .query(`
      SELECT COUNT(*) AS cnt
      FROM INFORMATION_SCHEMA.TABLES
      WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = @table
    `)

  return Number(result.recordset[0]?.cnt ?? 0) > 0
}

async function getSourceColumns(pool: sql.ConnectionPool, table: string): Promise<string[]> {
  const result = await pool
    .request()
    .input('table', sql.NVarChar(128), table)
    .query(`
      SELECT COLUMN_NAME
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = @table
      ORDER BY ORDINAL_POSITION
    `)

  return result.recordset.map((r: { COLUMN_NAME: string }) => r.COLUMN_NAME)
}

async function getTargetColumns(pg: Client, table: string): Promise<string[]> {
  const result = await pg.query<{ column_name: string }>(
    `
    SELECT column_name
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = $1
    ORDER BY ordinal_position
    `,
    [table]
  )
  return result.rows.map((r) => r.column_name)
}

async function getTargetPrimaryKeys(pg: Client, table: string): Promise<string[]> {
  const result = await pg.query<{ column_name: string }>(
    `
    SELECT a.attname AS column_name
    FROM pg_index i
    JOIN pg_class c ON c.oid = i.indrelid
    JOIN pg_namespace n ON n.oid = c.relnamespace
    JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = ANY(i.indkey)
    WHERE n.nspname = 'public'
      AND c.relname = $1
      AND i.indisprimary
    ORDER BY array_position(i.indkey, a.attnum)
    `,
    [table]
  )
  return result.rows.map((r) => r.column_name)
}

async function migrateTable(
  pool: sql.ConnectionPool,
  pg: Client,
  table: string
): Promise<MigrationResult | null> {
  const existsInSource = await sourceTableExists(pool, table)
  if (!existsInSource) {
    return null
  }

  const sourceColumns = await getSourceColumns(pool, table)
  const targetColumns = await getTargetColumns(pg, table)
  const commonColumns = sourceColumns.filter((c) => targetColumns.includes(c))

  if (commonColumns.length === 0) {
    return {
      table,
      sourceCount: 0,
      inserted: 0,
      updated: 0,
      mode: 'replace',
    }
  }

  const sourceSelect = commonColumns.map(sourceQ).join(', ')
  const sourceSql = `SELECT ${sourceSelect} FROM ${sourceQ(table)}`
  const sourceRows = (await pool.request().query(sourceSql)).recordset as Record<string, unknown>[]

  const pkColumns = await getTargetPrimaryKeys(pg, table)
  const hasPk = pkColumns.length > 0 && pkColumns.every((pk) => commonColumns.includes(pk))

  let inserted = 0
  let updated = 0

  await pg.query('BEGIN')
  try {
    if (!hasPk) {
      await pg.query(`DELETE FROM ${q(table)}`)

      for (const row of sourceRows) {
        const colsSql = commonColumns.map(q).join(', ')
        const placeholders = commonColumns.map((_, i) => `$${i + 1}`).join(', ')
        const values = commonColumns.map((c) => row[c] ?? null)

        await pg.query(
          `INSERT INTO ${q(table)} (${colsSql}) VALUES (${placeholders})`,
          values
        )
        inserted += 1
      }

      await pg.query('COMMIT')
      return {
        table,
        sourceCount: sourceRows.length,
        inserted,
        updated,
        mode: 'replace',
      }
    }

    const nonPkColumns = commonColumns.filter((c) => !pkColumns.includes(c))

    for (const row of sourceRows) {
      const colsSql = commonColumns.map(q).join(', ')
      const placeholders = commonColumns.map((_, i) => `$${i + 1}`).join(', ')
      const values = commonColumns.map((c) => row[c] ?? null)

      const conflictSql = pkColumns.map(q).join(', ')
      const updateSql = nonPkColumns.length
        ? nonPkColumns.map((c) => `${q(c)} = EXCLUDED.${q(c)}`).join(', ')
        : ''

      const query = nonPkColumns.length
        ? `
          INSERT INTO ${q(table)} (${colsSql})
          VALUES (${placeholders})
          ON CONFLICT (${conflictSql}) DO UPDATE SET ${updateSql}
          RETURNING (xmax = 0) AS inserted
        `
        : `
          INSERT INTO ${q(table)} (${colsSql})
          VALUES (${placeholders})
          ON CONFLICT (${conflictSql}) DO NOTHING
          RETURNING TRUE AS inserted
        `

      const result = await pg.query<{ inserted: boolean }>(query, values)

      if (result.rows.length === 0) {
        updated += 1
      } else if (result.rows[0].inserted) {
        inserted += 1
      } else {
        updated += 1
      }
    }

    await pg.query('COMMIT')

    return {
      table,
      sourceCount: sourceRows.length,
      inserted,
      updated,
      mode: 'upsert',
    }
  } catch (error) {
    await pg.query('ROLLBACK')
    throw error
  }
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

  const pg = new Client({ connectionString: required('DATABASE_URL') })
  const pool = await sql.connect(sqlConfig)
  await pg.connect()

  try {
    const tables = await getTargetDictTables(pg)
    const summary: MigrationResult[] = []

    for (const table of tables) {
      const migrated = await migrateTable(pool, pg, table)
      if (migrated) summary.push(migrated)
    }

    const totals = summary.reduce(
      (acc, item) => {
        acc.tables += 1
        acc.rows += item.sourceCount
        acc.inserted += item.inserted
        acc.updated += item.updated
        return acc
      },
      { tables: 0, rows: 0, inserted: 0, updated: 0 }
    )

    console.log(
      JSON.stringify(
        {
          totals,
          tables: summary,
        },
        null,
        2
      )
    )
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
