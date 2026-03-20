import 'dotenv/config'
import { Client } from 'pg'
import sql from 'mssql'

function required(name: string) {
  const v = process.env[name]; if (!v) throw new Error(`Missing: ${name}`); return v
}

async function main() {
  const pg = new Client({ connectionString: process.env.DATABASE_URL })
  await pg.connect()

  // 1. Ile certów i sendów
  const counts = await pg.query(`
    SELECT
      (SELECT COUNT(*) FROM "TaxResidenceCert") AS certs,
      (SELECT COUNT(*) FROM "TaxResidenceCert" WHERE "clientId" IS NOT NULL AND "publisherId" IS NULL) AS cert_client_only,
      (SELECT COUNT(*) FROM "TaxResidenceCert" WHERE "publisherId" IS NOT NULL AND "clientId" IS NULL) AS cert_pub_only,
      (SELECT COUNT(*) FROM "TaxResidenceCert" WHERE "clientId" IS NOT NULL AND "publisherId" IS NOT NULL) AS cert_both,
      (SELECT COUNT(*) FROM "TaxResidenceSend") AS sends,
      (SELECT COUNT(*) FROM "TaxResidenceSend" WHERE "clientId" IS NOT NULL AND "publisherId" IS NULL) AS send_client,
      (SELECT COUNT(*) FROM "TaxResidenceSend" WHERE "publisherId" IS NOT NULL AND "clientId" IS NULL) AS send_pub,
      (SELECT COUNT(*) FROM "TaxResidenceSend" WHERE "clientId" IS NULL AND "publisherId" IS NULL) AS send_no_owner
  `)
  console.log('=== COUNTS ===')
  console.log(counts.rows[0])

  // 2. Przykład: cert z sendsami - pokaż kto jest właścicielem i do kogo wysłano
  console.log('\n=== SAMPLE cert with sends (cert owner vs send recipient) ===')
  const sample = await pg.query(`
    SELECT
      c.id AS cert_id,
      c."sourceId" AS cert_src,
      c."clientId",
      c."publisherId",
      cl.name AS client_name,
      pu.name AS publisher_name,
      c.notes,
      s.id AS send_id,
      s."clientId" AS send_clientId,
      s."publisherId" AS send_publisherId,
      scl.name AS send_to_client,
      spu.name AS send_to_publisher,
      s."dateSend", s."sendOrig", s."sendCopy"
    FROM "TaxResidenceCert" c
    LEFT JOIN "Client" cl ON cl.id = c."clientId"
    LEFT JOIN "Publisher" pu ON pu.id = c."publisherId"
    LEFT JOIN "TaxResidenceSend" s ON s."certId" = c.id
    LEFT JOIN "Client" scl ON scl.id = s."clientId"
    LEFT JOIN "Publisher" spu ON spu.id = s."publisherId"
    WHERE s.id IS NOT NULL
    LIMIT 10
  `)
  for (const r of sample.rows) {
    console.log(`cert#${r.cert_id}(src=${r.cert_src}) owner=${r.client_name || r.publisher_name} notes=${r.notes}`)
    console.log(`  → send#${r.send_id} to=${r.send_to_client || r.send_to_publisher || '?'} date=${r.datesend} orig=${r.sendorig} copy=${r.sendcopy}`)
  }

  // 3. Sprawdź w źródle: co to jest ClientID w tblTaxResidenceSend vs tblTaxResidenceCertificate
  console.log('\n=== SOURCE: sample TaxResidenceSend with cert owner vs send ClientID ===')
  const pool = await sql.connect({
    user: required('SQLSERVER_USER'),
    password: required('SQLSERVER_PASSWORD'),
    server: required('SQLSERVER_HOST'),
    database: required('SQLSERVER_DATABASE'),
    options: { encrypt: false, trustServerCertificate: true },
  })
  const srcSample = await pool.request().query(`
    SELECT TOP 15
      s.CertID,
      c.ClientID AS cert_owner,
      s.ClientID AS send_recipient,
      s.DateSend, s.SendOrig, s.SendCopy,
      oc.CustAbb AS owner_abb,
      rc.CustAbb AS recipient_abb
    FROM tblTaxResidenceSend s
    JOIN tblTaxResidenceCertificate c ON c.CertID = s.CertID
    JOIN tblCustomers oc ON oc.CustID = c.ClientID
    JOIN tblCustomers rc ON rc.CustID = s.ClientID
    WHERE s.ClientID <> c.ClientID
    ORDER BY s.CertID
  `)
  console.log('Sends where recipient DIFFERS from cert owner:')
  for (const r of srcSample.recordset) {
    console.log(`  cert#${r.CertID} owner=${r.owner_abb}(${r.cert_owner}) → sent to=${r.recipient_abb}(${r.send_recipient}) date=${r.DateSend?.toISOString().slice(0,10)} orig=${r.SendOrig} copy=${r.SendCopy}`)
  }

  const same = await pool.request().query(`
    SELECT COUNT(*) AS cnt FROM tblTaxResidenceSend s
    JOIN tblTaxResidenceCertificate c ON c.CertID = s.CertID
    WHERE s.ClientID = c.ClientID
  `)
  const diff = await pool.request().query(`
    SELECT COUNT(*) AS cnt FROM tblTaxResidenceSend s
    JOIN tblTaxResidenceCertificate c ON c.CertID = s.CertID
    WHERE s.ClientID <> c.ClientID
  `)
  console.log(`\nSend where ClientID SAME as cert owner: ${same.recordset[0].cnt}`)
  console.log(`Send where ClientID DIFFERENT from cert owner: ${diff.recordset[0].cnt}`)

  await pg.end()
  await pool.close()
}
main().catch(e => { console.error(e); process.exit(1) })
