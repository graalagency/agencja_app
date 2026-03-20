import 'dotenv/config'
import { Client } from 'pg'

async function main() {
  const pg = new Client({ connectionString: process.env.DATABASE_URL })
  await pg.connect()

  const c = await pg.query('SELECT id, "sourceId", name FROM "Client" WHERE id = 4018')
  console.log('Client:', c.rows[0])

  const certs = await pg.query('SELECT id, "sourceId", "clientId", "publisherId", "validDate", "hasCert" FROM "TaxResidenceCert" WHERE "clientId" = 4018')
  console.log('Certs by clientId:', certs.rows)

  const sourceId = c.rows[0]?.sourceId
  if (sourceId) {
    // check if this sourceId has certs (regardless of mapping)
    const bySource = await pg.query('SELECT id, "sourceId", "clientId", "publisherId" FROM "TaxResidenceCert" WHERE "sourceId" IN (SELECT "CertID" FROM unnest(ARRAY[]::int[]))')
    // check if source customer has a publisher counterpart
    const pub = await pg.query('SELECT id, "sourceId", name FROM "Publisher" WHERE "sourceId" = $1', [sourceId])
    console.log('Publisher with same sourceId:', pub.rows)
    if (pub.rows[0]) {
      const pcerts = await pg.query('SELECT id, "sourceId", "clientId", "publisherId", "validDate" FROM "TaxResidenceCert" WHERE "publisherId" = $1', [pub.rows[0].id])
      console.log('Certs linked to publisher counterpart:', pcerts.rows)
    }

    // Check what source CertIDs map to this sourceId in tblTaxResidenceCertificate
    console.log('\nClient sourceId (=CustID in source):', sourceId)

    // Total certs in DB
    const total = await pg.query('SELECT COUNT(*) FROM "TaxResidenceCert"')
    console.log('Total certs in DB:', total.rows[0].count)

    // Certs with no owner
    const orphan = await pg.query('SELECT COUNT(*) FROM "TaxResidenceCert" WHERE "clientId" IS NULL AND "publisherId" IS NULL')
    console.log('Certs with no owner:', orphan.rows[0].count)
  }

  await pg.end()
}

main().catch(err => { console.error(err); process.exit(1) })
