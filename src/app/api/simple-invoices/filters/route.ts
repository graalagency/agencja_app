import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const currencySearch = (searchParams.get('currencySearch') || '').toUpperCase()

    const statusResults = await prisma.invoice.findMany({
      where: { status: { not: '' } },
      select: { status: true },
      distinct: ['status']
    })
    const statuses = statusResults.map(r => r.status).filter(Boolean)

    const baseCurrencies = ['PLN']
    const currencies = baseCurrencies.filter(c => !currencySearch || c.includes(currencySearch))

    const invTypes = ['FV']

    return NextResponse.json({
      statuses,
      currencies,
      invTypes
    })
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices/filters:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
