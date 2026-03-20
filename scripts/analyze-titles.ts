import 'dotenv/config'
import sql from 'mssql'

function required(name: string) {
  const v = process.env[name]; if (!v) throw new Error(`Missing: ${name}`); return v
}

async function main() {
  const pool = await sql.connect({
    user: required('SQLSERVER_USER'),
    password: required('SQLSERVER_PASSWORD'),
    server: required('SQLSERVER_HOST'),
    database: required('SQLSERVER_DATABASE'),
    options: { encrypt: false, trustServerCertificate: true },
  })

  // 1. Struktura tabeli tblTitles
  console.log('=== COLUMNS tblTitles ===')
  const cols = await pool.request().query(`
    SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH, IS_NULLABLE
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_NAME = 'tblTitles'
    ORDER BY ORDINAL_POSITION
  `)
  for (const c of cols.recordset) {
    console.log(`  ${c.COLUMN_NAME.padEnd(30)} ${c.DATA_TYPE}${c.CHARACTER_MAXIMUM_LENGTH ? `(${c.CHARACTER_MAXIMUM_LENGTH})` : ''} ${c.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL'}`)
  }

  // 2. Liczba rekordów
  const cnt = await pool.request().query(`SELECT COUNT(*) AS cnt FROM tblTitles`)
  console.log(`\n=== COUNT: ${cnt.recordset[0].cnt} rows ===`)

  // 3. Przykładowe rekordy
  console.log('\n=== SAMPLE ROWS ===')
  const sample = await pool.request().query(`SELECT TOP 5 * FROM tblTitles ORDER BY TitleID`)
  for (const r of sample.recordset) {
    console.log(JSON.stringify(r, null, 2))
  }

  // 4. Powiązane tabele - klucze obce
  console.log('\n=== FOREIGN KEYS FROM tblTitles ===')
  const fk = await pool.request().query(`
    SELECT
      fk.name AS fk_name,
      COL_NAME(fkc.parent_object_id, fkc.parent_column_id) AS fk_column,
      OBJECT_NAME(fkc.referenced_object_id) AS ref_table,
      COL_NAME(fkc.referenced_object_id, fkc.referenced_column_id) AS ref_column
    FROM sys.foreign_keys fk
    JOIN sys.foreign_key_columns fkc ON fk.object_id = fkc.constraint_object_id
    WHERE fk.parent_object_id = OBJECT_ID('tblTitles')
  `)
  for (const r of fk.recordset) console.log(`  ${r.fk_column} → ${r.ref_table}.${r.ref_column}`)

  // 5. Tabele odwołujące się do tblTitles
  console.log('\n=== TABLES REFERENCING tblTitles ===')
  const refs = await pool.request().query(`
    SELECT DISTINCT
      OBJECT_NAME(fkc.parent_object_id) AS child_table,
      COL_NAME(fkc.parent_object_id, fkc.parent_column_id) AS child_column,
      COL_NAME(fkc.referenced_object_id, fkc.referenced_column_id) AS ref_column
    FROM sys.foreign_keys fk
    JOIN sys.foreign_key_columns fkc ON fk.object_id = fkc.constraint_object_id
    WHERE fk.referenced_object_id = OBJECT_ID('tblTitles')
    ORDER BY child_table
  `)
  for (const r of refs.recordset) console.log(`  ${r.child_table}.${r.child_column} → tblTitles.${r.ref_column}`)

  // 6. Unikalne wartości kluczowych kolumn
  console.log('\n=== VALUE RANGES / DISTRIBUTIONS ===')

  // Distinct values of important lookup columns
  for (const col of ['TitleTypeID', 'CurrencyID', 'Active']) {
    try {
      const d = await pool.request().query(`
        SELECT TOP 20 ${col}, COUNT(*) AS cnt FROM tblTitles GROUP BY ${col} ORDER BY cnt DESC
      `)
      console.log(`\n  ${col}:`)
      for (const r of d.recordset) console.log(`    ${String(r[col]).padEnd(20)} ${r.cnt}`)
    } catch {}
  }

  // 7. Sprawdź tabele lookup
  console.log('\n=== tblTitleTypes ===')
  try {
    const tt = await pool.request().query(`SELECT * FROM tblTitleTypes`)
    for (const r of tt.recordset) console.log('  ', JSON.stringify(r))
  } catch (e: any) { console.log('  not found:', e.message) }

  console.log('\n=== tblCurrencies (sample) ===')
  try {
    const tc = await pool.request().query(`SELECT TOP 10 * FROM tblCurrencies`)
    for (const r of tc.recordset) console.log('  ', JSON.stringify(r))
  } catch (e: any) { console.log('  not found:', e.message) }

  // 8. Powiązanie z kontrahentami/wydawcami przez inne tabele
  console.log('\n=== tblCustTitles (powiązanie tytuł-kontrahent) ===')
  try {
    const ctCols = await pool.request().query(`
      SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'tblCustTitles' ORDER BY ORDINAL_POSITION
    `)
    console.log('  Columns:', ctCols.recordset.map((c: any) => c.COLUMN_NAME).join(', '))
    const ctCnt = await pool.request().query(`SELECT COUNT(*) AS cnt FROM tblCustTitles`)
    console.log('  Rows:', ctCnt.recordset[0].cnt)
    const ctSample = await pool.request().query(`SELECT TOP 3 * FROM tblCustTitles`)
    for (const r of ctSample.recordset) console.log('  Sample:', JSON.stringify(r))
  } catch (e: any) { console.log('  not found:', e.message) }

  // 9. Inne tabele zaczynające się od tblTitle
  console.log('\n=== ALL tblTitle* tables ===')
  const titleTables = await pool.request().query(`
    SELECT TABLE_NAME, (SELECT COUNT(*) FROM sys.objects o WHERE o.name = t.TABLE_NAME) AS cnt
    FROM INFORMATION_SCHEMA.TABLES t
    WHERE TABLE_NAME LIKE 'tblTitle%'
    ORDER BY TABLE_NAME
  `)
  for (const r of titleTables.recordset) console.log(`  ${r.TABLE_NAME}`)

  await pool.close()
}

main().catch(e => { console.error(e.message); process.exit(1) })
