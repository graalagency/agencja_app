import { prisma } from '../src/lib/prisma'

type CsvLanguage = {
  code: string
  description: string
}

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }

  result.push(current)
  return result.map((v) => v.trim())
}

async function fetchLanguagesFromCsv(): Promise<CsvLanguage[]> {
  const url = 'https://datahub.io/core/language-codes/r/language-codes.csv'
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch language CSV: ${response.status} ${response.statusText}`)
  }

  const csv = await response.text()
  const lines = csv.split(/\r?\n/).filter((line) => line.trim().length > 0)
  if (lines.length === 0) {
    return []
  }

  const header = parseCsvLine(lines[0]).map((h) => h.toLowerCase())
  const codeIndex = header.findIndex((h) => h === 'alpha2')
  const descriptionIndex = header.findIndex((h) => h === 'english')

  if (codeIndex === -1 || descriptionIndex === -1) {
    throw new Error('Unexpected language CSV header format')
  }

  const items: CsvLanguage[] = []

  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i])
    const code = (cols[codeIndex] || '').trim().toUpperCase()
    const description = (cols[descriptionIndex] || '').trim()

    if (!code || !description) continue
    if (code.length !== 2) continue

    items.push({ code, description })
  }

  return items
}

async function main() {
  const languages = await fetchLanguagesFromCsv()

  if (languages.length === 0) {
    console.log('No languages to import')
    return
  }

  let inserted = 0
  let updated = 0

  for (const lang of languages) {
    const existing = await (prisma as any).dictLanguage.findUnique({
      where: { code: lang.code },
      select: { id: true },
    })

    await (prisma as any).dictLanguage.upsert({
      where: { code: lang.code },
      update: {
        description: lang.description,
        updatedAt: new Date(),
      },
      create: {
        code: lang.code,
        description: lang.description,
        updatedAt: new Date(),
      },
    })

    if (existing) {
      updated++
    } else {
      inserted++
    }
  }

  const total = await (prisma as any).dictLanguage.count()
  console.log(`Language dictionary seeded. inserted=${inserted} updated=${updated} total=${total}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
