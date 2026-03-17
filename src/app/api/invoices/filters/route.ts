import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const currencySearch = (url.searchParams.get('currencySearch') || '').trim().toUpperCase()

    const statusRows = await prisma.invoice.findMany({
      where: { status: { not: '' } },
      select: { status: true },
      distinct: ['status']
    })

    const statuses = Array.from(
      new Set(
        statusRows
          .map(s => (s.status || '').trim())
          .filter(Boolean)
      )
    ).sort()

    const currenciesSource = ['PLN']
    const currencies = currenciesSource
      .filter(c => !currencySearch || c.includes(currencySearch))
      .map(c => ({ id: c, desc: c }))

    return NextResponse.json({ statuses, currencies })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/filters:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
