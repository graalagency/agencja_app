import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const page = Number(url.searchParams.get('page') || '1')
    const pageSize = Number(url.searchParams.get('pageSize') || '50')
    const skip = (page - 1) * pageSize

    const status = (url.searchParams.get('status') || '').trim()
    const custId = url.searchParams.get('custId')
    const clientName = (url.searchParams.get('clientName') || '').trim()
    const title = (url.searchParams.get('title') || '').trim()
    const search = (url.searchParams.get('search') || '').trim()
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const sort = url.searchParams.get('sort') || 'FVDate'
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (status) where.status = status
    if (custId) where.clientId = Number(custId)
    if (clientName) where.Client = { name: { contains: clientName, mode: 'insensitive' } }
    if (title) where.title = { contains: title, mode: 'insensitive' }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { Client: { name: { contains: search, mode: 'insensitive' } } },
      ]
    }
    if (dateFrom || dateTo) where.issueDate = {}
    if (dateFrom) where.issueDate.gte = new Date(dateFrom)
    if (dateTo) where.issueDate.lte = new Date(dateTo)

    const sortMap: Record<string, 'issueDate' | 'paymentDate' | 'net' | 'gross' | 'createdAt'> = {
      FVDate: 'issueDate',
      PayDate: 'paymentDate',
      NetAmt: 'net',
      GrossAmt: 'gross',
      createdAt: 'createdAt'
    }
    const orderBy = { [sortMap[sort] || 'issueDate']: order }

    const [total, data] = await Promise.all([
      prisma.invoice.count({ where }),
      prisma.invoice.findMany({
        where,
        include: {
          Client: { select: { id: true, name: true } }
        },
        orderBy,
        skip,
        take: pageSize
      })
    ])

    const items = data.map(d => ({
      id: d.id,
      fvNr: d.id,
      fvDate: d.issueDate.toISOString(),
      date: d.issueDate.toISOString(),
      custId: d.clientId,
      clientId: d.clientId,
      clientName: d.Client?.name ?? null,
      title: d.title,
      fvDescription: d.title,
      payDate: d.paymentDate.toISOString(),
      netAmt: d.net,
      vatPerc: d.vatPerc,
      vatAmt: d.vat,
      grossAmt: d.gross,
      status: d.status,
      createdAt: d.createdAt.toISOString(),
      updatedAt: d.updatedAt.toISOString(),
      currency: 'PLN',
      fvCurrency: 'PLN'
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('Error in GET /api/invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const clientId = body.custId ? Number(body.custId) : body.clientId ? Number(body.clientId) : null
    if (!clientId) {
      return NextResponse.json({ error: 'clientId (or custId) is required' }, { status: 400 })
    }

    const issueDate = body.fvDate ? new Date(body.fvDate) : body.date ? new Date(body.date) : body.issueDate ? new Date(body.issueDate) : new Date()
    const paymentDate = body.payDate ? new Date(body.payDate) : body.paymentDate ? new Date(body.paymentDate) : issueDate
    const title = body.title || body.fvDescription || 'Invoice'

    const net = Number(body.netAmt ?? body.net ?? 0)
    const vatPerc = Number(body.vatPerc ?? 0)
    const vat = Number(body.vatAmt ?? body.vat ?? (net * vatPerc) / 100)
    const gross = Number(body.grossAmt ?? body.gross ?? (net + vat))

    const invoice = await prisma.invoice.create({
      data: {
        clientId,
        title,
        issueDate,
        paymentDate,
        net,
        vatPerc,
        vat,
        gross,
        status: body.status || 'issued',
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ id: invoice.id, fvNr: invoice.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
