/**
 * Patch: uzupełnia brakujących wydawców w umowach.
 *
 * Problem: 91 firm oznaczonych w źródle jako typ 'Client' (nie 'Publisher')
 * pojawia się jako CustID w tblAgreements. Nie zostały dodane do tabeli Publisher
 * podczas migracji, przez co 9459 umów ma publisherId = null.
 *
 * Rozwiązanie:
 *  1. Pobiera z SQL Server wszystkie (AgrID, CustID) gdzie CustID nie ma typu Publisher
 *  2. Kopiuje te firmy do tabeli Publisher (na podstawie danych z tabeli Client)
 *  3. Aktualizuje Agreement.publisherId na podstawie Agreement.sourceId ↔ AgrID
 *
 * Uruchomienie:
 *   npx tsx scripts/patch-agreements-publishers.ts
 *   DRY_RUN=true npx tsx scripts/patch-agreements-publishers.ts
 */

import 'dotenv/config'
import sql from 'mssql'
import { Client as PgClient } from 'pg'

const DRY_RUN = process.env.DRY_RUN === 'true'

function required(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

async function main() {
  const pool = await sql.connect({
    server: required('SQLSERVER_HOST'),
    database: required('SQLSERVER_DATABASE'),
    authentication: {
      type: 'default',
      options: { userName: required('SQLSERVER_USER'), password: required('SQLSERVER_PASSWORD') },
    },
    options: {
      instanceName: process.env.SQLSERVER_INSTANCE || undefined,
      trustServerCertificate: true,
    },
  })
  console.log('✓ SQL Server connected')

  const pg = new PgClient({ connectionString: required('DATABASE_URL') })
  await pg.connect()
  console.log('✓ PostgreSQL connected')

  try {
    // 1. Pobierz wszystkie (AgrID → CustID) gdzie CustID nie ma typu Publisher
    console.log('\n[1/3] Pobieranie mapowania AgrID → CustID (problematyczne)...')
    const agrResult = await pool.request().query<{ AgrID: number; CustID: number }>(`
      SELECT a.AgrID, a.CustID
      FROM tblAgreements a
      WHERE a.CustID IS NOT NULL
        AND NOT EXISTS (
          SELECT 1 FROM tblCustTypes ct
          JOIN dictCustTypes dct ON ct.CustTypeID = dct.CustTypeID
          WHERE ct.CustID = a.CustID AND dct.CustTypeName = 'Publisher'
        )
    `)
    const agrMap = new Map<number, number>() // AgrID → CustID
    for (const r of agrResult.recordset) agrMap.set(r.AgrID, r.CustID)

    const distinctCustIDs = new Set(agrResult.recordset.map(r => r.CustID))
    console.log(`  ${agrResult.recordset.length} umów, ${distinctCustIDs.size} unikalnych CustID`)

    // 2. Pobierz dane tych firm z SQL Server
    console.log('\n[2/3] Pobieranie danych firm z SQL Server...')
    const idList = [...distinctCustIDs].join(',')
    const custResult = await pool.request().query<{
      CustID: number; Name: string | null; CustAbb: string | null
      DefaultEmail: string | null; DefaultPhone: string | null
      DefaultFax: string | null; DefaultWWW: string | null
      Address1: string | null; Address2: string | null
      City: string | null; Zip: string | null; StateAbb: string | null
      CountryPL: string | null; LangAbb: string | null
      TaxID: string | null; VATID: string | null
      Remarks: string | null; Jurisdiction: string | null; Status: string | null
      Commission: number | null; CommissionForeign: number | null; CommissionMaterials: number | null
      RepModeID: number | null
      BankAccountNo: string | null; BankName: string | null; BankAddress: string | null
      BankRoutingNo: string | null; BankAccountName: string | null
    }>(`
      SELECT
        c.CustID, c.Name, c.CustAbb,
        c.DefaultEmail, c.DefaultPhone, c.DefaultFax, c.DefaultWWW,
        c.Address1, c.Address2, c.City, c.Zip, c.StateAbb,
        co.CountryPL,
        c.LangAbb, c.TaxID, c.VATID, c.Remarks, c.Jurisdiction, c.Status,
        c.Commission, c.CommissionForeign, c.CommissionMaterials, c.RepModeID,
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
      WHERE c.CustID IN (${idList})
    `)
    console.log(`  Pobrano ${custResult.recordset.length} firm`)

    function str(v: unknown): string | null {
      if (v == null) return null
      const s = String(v).trim()
      return s === '' ? null : s
    }
    function dec(v: unknown): number | null {
      if (v == null) return null
      const n = Number(v)
      return isNaN(n) ? null : n
    }

    // 3. Wstaw do Publisher (ON CONFLICT DO UPDATE)
    console.log('\n[3/3] Aktualizacja bazy PostgreSQL...')
    if (!DRY_RUN) await pg.query('BEGIN')

    const pubIdMap = new Map<number, number>() // sourceId → new Publisher.id

    let inserted = 0, updated = 0
    for (const c of custResult.recordset) {
      if (DRY_RUN) {
        console.log(`  [DRY] Publisher: ${c.CustAbb?.trim()} / ${c.Name}`)
        pubIdMap.set(c.CustID, -1)
        continue
      }
      const res = await pg.query<{ id: number; inserted: boolean }>(`
        INSERT INTO "Publisher" (
          "sourceId", name, abbreviation, email, phone, fax, www,
          address, address2, city, state, "postalCode", country, language,
          "legalForm", nip, "vatId", regon, jurisdiction, status, notes,
          "bankAccount", "bankName", "bankAddress", "bankRoutingNo", "bankAccountName",
          commission, "commissionForeign", "commissionMaterials", "repModeId",
          "createdAt", "updatedAt"
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,
          $15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,
          $27,$28,$29,$30,NOW(),NOW()
        )
        ON CONFLICT ("sourceId") DO UPDATE SET
          name         = EXCLUDED.name,
          abbreviation = EXCLUDED.abbreviation
        RETURNING id, (xmax = 0) AS inserted
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
      pubIdMap.set(c.CustID, res.rows[0].id)
      if (res.rows[0].inserted) inserted++; else updated++
    }

    if (!DRY_RUN) {
      console.log(`  Publisher: ${inserted} dodanych, ${updated} zaktualizowanych`)
    }

    // 4. Zaktualizuj Agreement.publisherId
    // Pobierz Agreement.id dla każdego sourceId (AgrID)
    const agrSourceIds = [...agrMap.keys()]
    if (!DRY_RUN && agrSourceIds.length > 0) {
      const agrPgRows = await pg.query<{ id: number; sourceId: number }>(
        `SELECT id, "sourceId" FROM "Agreement" WHERE "sourceId" = ANY($1)`,
        [agrSourceIds]
      )
      const agrPgMap = new Map<number, number>() // sourceId → id
      agrPgRows.rows.forEach(r => agrPgMap.set(r.sourceId, r.id))

      let updatedAgreements = 0
      // Grupuj updates żeby nie robić 9459 pojedynczych queries
      // Buduj CASE WHEN ... END
      const chunks: Array<{ agrId: number; pubId: number }> = []
      for (const [agrSourceId, custId] of agrMap) {
        const agrId = agrPgMap.get(agrSourceId)
        const pubId = pubIdMap.get(custId)
        if (agrId && pubId && pubId > 0) {
          chunks.push({ agrId, pubId })
        }
      }

      // Batch UPDATE po 500
      const BATCH = 500
      for (let i = 0; i < chunks.length; i += BATCH) {
        const batch = chunks.slice(i, i + BATCH)
        if (batch.length === 0) continue
        const cases = batch.map((_, j) => `WHEN $${j * 2 + 1}::int THEN $${j * 2 + 2}::int`).join(' ')
        const ids   = batch.map((_, j) => `$${j * 2 + 1}::int`).join(', ')
        const vals  = batch.flatMap(x => [x.agrId, x.pubId])
        await pg.query(
          `UPDATE "Agreement" SET "publisherId" = CASE id ${cases} END WHERE id IN (${ids})`,
          vals
        )
        updatedAgreements += batch.length
        process.stdout.write(`  Agreement.publisherId: ${updatedAgreements}/${chunks.length}\r`)
      }
      console.log(`  Agreement.publisherId: ${updatedAgreements} zaktualizowanych ✓`)
    } else if (DRY_RUN) {
      console.log(`  [DRY] Zaktualizowałbym publisherId dla ${agrMap.size} umów`)
    }

    if (!DRY_RUN) await pg.query('COMMIT')
    console.log('\n✓ Patch zakończony pomyślnie')

  } catch (err) {
    if (!DRY_RUN) await pg.query('ROLLBACK').catch(() => {})
    throw err
  } finally {
    await pg.end()
    await pool.close()
  }
}

main().catch(err => {
  console.error('BŁĄD:', err.message ?? err)
  process.exit(1)
})
