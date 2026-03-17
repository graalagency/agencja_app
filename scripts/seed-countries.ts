import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const COUNTRY_LIST_CSV_URL = 'https://datahub.io/core/country-list/r/data.csv'

const EU_COUNTRY_CODES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
  'SI', 'ES', 'SE'
])

type CountryRow = {
  code: string
  name: string
}

function parseCsvLine(line: string): string[] {
  const values: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]
    const next = line[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (char === ',' && !inQuotes) {
      values.push(current.trim())
      current = ''
      continue
    }

    current += char
  }

  values.push(current.trim())
  return values
}

async function fetchCountriesFromCsv(): Promise<CountryRow[]> {
  const response = await fetch(COUNTRY_LIST_CSV_URL)
  if (!response.ok) {
    throw new Error(`Failed to fetch country list CSV (${response.status})`)
  }

  const csv = await response.text()
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  if (lines.length < 2) {
    throw new Error('Country list CSV is empty')
  }

  const countries: CountryRow[] = []

  for (let index = 1; index < lines.length; index += 1) {
    const fields = parseCsvLine(lines[index])
    if (fields.length < 2) {
      continue
    }

    const name = fields[0]
    const code = fields[1].toUpperCase()

    if (!/^[A-Z]{2}$/.test(code)) {
      continue
    }

    countries.push({ code, name })
  }

  countries.sort((a, b) => a.code.localeCompare(b.code))
  return countries
}

async function main() {
  const countries = await fetchCountriesFromCsv()

  let inserted = 0
  let updated = 0

  for (const country of countries) {
    const code = country.code
    const description = country.name
    const eu = EU_COUNTRY_CODES.has(code)

    const existing = await prisma.dictCountry.findUnique({ where: { code } })

    if (!existing) {
      await prisma.dictCountry.create({
        data: {
          description,
          code,
          tax: 0,
          eu,
          updatedAt: new Date(),
        },
      })
      inserted += 1
      continue
    }

    await prisma.dictCountry.update({
      where: { code },
      data: {
        description,
        eu,
        updatedAt: new Date(),
      },
    })
    updated += 1
  }

  const total = await prisma.dictCountry.count()
  console.log(`Country dictionary synced. Inserted: ${inserted}, Updated: ${updated}, Total now: ${total}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
