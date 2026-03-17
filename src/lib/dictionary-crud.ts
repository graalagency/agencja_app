import { prisma } from '@/lib/prisma'
import { getDictionaryDefinition } from '@/lib/dictionaries'

type ColumnMeta = {
  name: string
  dataType: string
  isNullable: boolean
  defaultValue: string | null
  isAuto: boolean
}

const IDENTIFIER_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/

function quoteIdent(identifier: string): string {
  if (!IDENTIFIER_REGEX.test(identifier)) {
    throw new Error('Invalid SQL identifier')
  }
  return `"${identifier}"`
}

function parseBoolean(value: unknown): boolean {
  if (typeof value === 'boolean') return value
  if (typeof value === 'number') return value !== 0
  const raw = String(value ?? '').trim().toLowerCase()
  return raw === 'true' || raw === '1' || raw === 't' || raw === 'yes' || raw === 'on'
}

function coerceValue(value: unknown, dataType: string, isNullable: boolean): unknown {
  if (value === undefined) return undefined
  if (value === null) return null

  if (typeof value === 'string' && value.trim() === '') {
    return isNullable ? null : value
  }

  if (['smallint', 'integer', 'bigint'].includes(dataType)) {
    const n = Number(value)
    if (Number.isNaN(n)) throw new Error('Invalid integer value')
    return n
  }

  if (['numeric', 'decimal', 'real', 'double precision'].includes(dataType)) {
    const n = Number(value)
    if (Number.isNaN(n)) throw new Error('Invalid numeric value')
    return n
  }

  if (dataType === 'boolean') {
    return parseBoolean(value)
  }

  if (dataType === 'json' || dataType === 'jsonb') {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value)
      } catch {
        throw new Error('Invalid JSON value')
      }
    }
    return value
  }

  return value
}

export async function getDictionaryMetadata(dictionaryKey: string): Promise<{ table: string; label: string; columns: ColumnMeta[]; primaryKey: string }> {
  const definition = getDictionaryDefinition(dictionaryKey)
  if (!definition) {
    throw new Error('Unknown dictionary')
  }

  const columns = await prisma.$queryRaw<Array<{ column_name: string; data_type: string; is_nullable: string; column_default: string | null }>>`
    SELECT column_name, data_type, is_nullable, column_default
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = ${definition.table}
    ORDER BY ordinal_position
  `

  if (columns.length === 0) {
    throw new Error('Dictionary table does not exist in database')
  }

  const primaryRows = await prisma.$queryRaw<Array<{ column_name: string }>>`
    SELECT a.attname AS column_name
    FROM pg_index i
    JOIN pg_class c ON c.oid = i.indrelid
    JOIN pg_namespace n ON n.oid = c.relnamespace
    JOIN unnest(i.indkey) WITH ORDINALITY AS k(attnum, ord) ON TRUE
    JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = k.attnum
    WHERE n.nspname = 'public' AND c.relname = ${definition.table} AND i.indisprimary
    ORDER BY k.ord
    LIMIT 1
  `

  if (primaryRows.length === 0) {
    throw new Error('Dictionary table has no primary key')
  }

  return {
    table: definition.table,
    label: definition.label,
    primaryKey: primaryRows[0].column_name,
    columns: columns.map((column) => ({
      name: column.column_name,
      dataType: column.data_type,
      isNullable: column.is_nullable === 'YES',
      defaultValue: column.column_default,
      isAuto: typeof column.column_default === 'string' && column.column_default.includes('nextval('),
    })),
  }
}

export async function listDictionaryRows(dictionaryKey: string, options: { page: number; pageSize: number; search: string }) {
  const meta = await getDictionaryMetadata(dictionaryKey)
  const qTable = quoteIdent(meta.table)
  const selectColumns = meta.columns.map((column) => quoteIdent(column.name)).join(', ')

  const searchable = meta.columns.filter((column) => ['character varying', 'text', 'character'].includes(column.dataType))
  const search = options.search.trim()

  let whereClause = ''
  let whereParams: unknown[] = []

  if (search && searchable.length > 0) {
    const predicates = searchable
      .map((column, index) => `${quoteIdent(column.name)}::text ILIKE $${index + 1}`)
      .join(' OR ')

    whereClause = `WHERE (${predicates})`
    whereParams = searchable.map(() => `%${search}%`)
  }

  const page = Math.max(1, options.page)
  const pageSize = Math.min(100, Math.max(1, options.pageSize))
  const offset = (page - 1) * pageSize

  const countSql = `SELECT COUNT(*)::int AS total FROM ${qTable} ${whereClause}`
  const countRows = await prisma.$queryRawUnsafe<Array<{ total: number }>>(countSql, ...whereParams)

  const dataSql = `
    SELECT ${selectColumns}
    FROM ${qTable}
    ${whereClause}
    ORDER BY ${quoteIdent(meta.primaryKey)} ASC
    LIMIT ${pageSize}
    OFFSET ${offset}
  `

  const rows = await prisma.$queryRawUnsafe<Array<Record<string, unknown>>>(dataSql, ...whereParams)
  const total = countRows[0]?.total ?? 0

  return {
    dictionary: { key: dictionaryKey, table: meta.table, label: meta.label },
    columns: meta.columns,
    primaryKey: meta.primaryKey,
    rows,
    meta: {
      page,
      pageSize,
      total,
      pages: Math.max(1, Math.ceil(total / pageSize)),
    },
  }
}

export async function createDictionaryRow(dictionaryKey: string, payload: Record<string, unknown>) {
  const meta = await getDictionaryMetadata(dictionaryKey)
  const qTable = quoteIdent(meta.table)

  const insertColumns: ColumnMeta[] = []
  const insertValues: unknown[] = []

  for (const column of meta.columns) {
    if (column.isAuto && payload[column.name] === undefined) continue
    if (payload[column.name] === undefined) continue
    const coerced = coerceValue(payload[column.name], column.dataType, column.isNullable)
    insertColumns.push(column)
    insertValues.push(coerced)
  }

  if (insertColumns.length === 0) {
    throw new Error('No values provided for create')
  }

  const columnSql = insertColumns.map((column) => quoteIdent(column.name)).join(', ')
  const valuesSql = insertColumns.map((_, index) => `$${index + 1}`).join(', ')
  const returningSql = meta.columns.map((column) => quoteIdent(column.name)).join(', ')

  const sql = `INSERT INTO ${qTable} (${columnSql}) VALUES (${valuesSql}) RETURNING ${returningSql}`
  const rows = await prisma.$queryRawUnsafe<Array<Record<string, unknown>>>(sql, ...insertValues)
  return rows[0]
}

export async function updateDictionaryRow(dictionaryKey: string, id: string, payload: Record<string, unknown>) {
  const meta = await getDictionaryMetadata(dictionaryKey)
  const qTable = quoteIdent(meta.table)

  const pkColumn = meta.columns.find((column) => column.name === meta.primaryKey)
  if (!pkColumn) throw new Error('Primary key not found in metadata')

  const updateColumns: ColumnMeta[] = []
  const updateValues: unknown[] = []

  for (const column of meta.columns) {
    if (column.name === meta.primaryKey) continue
    if (payload[column.name] === undefined) continue
    const coerced = coerceValue(payload[column.name], column.dataType, column.isNullable)
    updateColumns.push(column)
    updateValues.push(coerced)
  }

  if (updateColumns.length === 0) {
    throw new Error('No values provided for update')
  }

  const setSql = updateColumns
    .map((column, index) => `${quoteIdent(column.name)} = $${index + 1}`)
    .join(', ')

  const pkValue = coerceValue(id, pkColumn.dataType, false)
  const returningSql = meta.columns.map((column) => quoteIdent(column.name)).join(', ')

  const sql = `
    UPDATE ${qTable}
    SET ${setSql}
    WHERE ${quoteIdent(meta.primaryKey)} = $${updateColumns.length + 1}
    RETURNING ${returningSql}
  `

  const rows = await prisma.$queryRawUnsafe<Array<Record<string, unknown>>>(sql, ...updateValues, pkValue)
  if (rows.length === 0) {
    throw new Error('Dictionary row not found')
  }

  return rows[0]
}

export async function deleteDictionaryRow(dictionaryKey: string, id: string) {
  const meta = await getDictionaryMetadata(dictionaryKey)
  const qTable = quoteIdent(meta.table)

  const pkColumn = meta.columns.find((column) => column.name === meta.primaryKey)
  if (!pkColumn) throw new Error('Primary key not found in metadata')

  const pkValue = coerceValue(id, pkColumn.dataType, false)
  const sql = `DELETE FROM ${qTable} WHERE ${quoteIdent(meta.primaryKey)} = $1`
  await prisma.$executeRawUnsafe(sql, pkValue)
}
