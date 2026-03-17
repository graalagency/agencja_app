import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const CURRENCY_LIST_CSV_URL = 'https://datahub.io/core/currency-codes/r/codes-all.csv'

type CurrencyRow = {
  code: string
  description: string
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

async function fetchCurrenciesFromCsv(): Promise<CurrencyRow[]> {
  const response = await fetch(CURRENCY_LIST_CSV_URL)
  if (!response.ok) {
    throw new Error(`Failed to fetch currency list CSV (${response.status})`)
  }

  const csv = await response.text()
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  if (lines.length < 2) {
    throw new Error('Currency list CSV is empty')
  }

  const currenciesMap = new Map<string, string>()

  for (let index = 1; index < lines.length; index += 1) {
    const fields = parseCsvLine(lines[index])
    if (fields.length < 6) {
      continue
    }

    const description = fields[1]
    const code = fields[2].toUpperCase()
    const withdrawalDate = fields[5]

    // Keep only active ISO-4217 alphabetic codes.
    if (!/^[A-Z]{3}$/.test(code) || withdrawalDate.length > 0 || !description) {
      continue
    }

    if (!currenciesMap.has(code)) {
      currenciesMap.set(code, description)
    }
  }

  return [...currenciesMap.entries()]
    .map(([code, description]) => ({ code, description }))
    .sort((a, b) => a.code.localeCompare(b.code))
}

async function main() {
  const p = prisma as any
  const currencies = await fetchCurrenciesFromCsv()

  let inserted = 0
  let updated = 0

  for (const currency of currencies) {
    const existing = await p.dictCurrency.findUnique({ where: { code: currency.code } })

    if (!existing) {
      await p.dictCurrency.create({
        data: {
          code: currency.code,
          description: currency.description,
          updatedAt: new Date(),
        },
      })
      inserted += 1
      continue
    }

    await p.dictCurrency.update({
      where: { code: currency.code },
      data: {
        description: currency.description,
        updatedAt: new Date(),
      },
    })
    updated += 1
  }

  const total = await p.dictCurrency.count()
  console.log(`Currency dictionary synced. Inserted: ${inserted}, Updated: ${updated}, Total now: ${total}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
