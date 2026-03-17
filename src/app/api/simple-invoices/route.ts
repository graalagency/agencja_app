import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const page = Number(url.searchParams.get('page') || '1')
    const pageSize = Number(url.searchParams.get('pageSize') || '50')
    const skip = (page - 1) * pageSize

    const status = (url.searchParams.get('status') || '').trim()
    const clientIdParam = url.searchParams.get('clientId') || url.searchParams.get('billToId')
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const descr = (url.searchParams.get('descr') || '').trim()
    const search = (url.searchParams.get('search') || '').trim()
    const sort = url.searchParams.get('sort') || 'InvDate'
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (status) where.status = status
    if (clientIdParam) where.clientId = Number(clientIdParam)
    if (descr) where.title = { contains: descr, mode: 'insensitive' }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { Client: { name: { contains: search, mode: 'insensitive' } } },
      ]
    }
    if (dateFrom || dateTo) where.issueDate = {}
    if (dateFrom) where.issueDate.gte = new Date(dateFrom)
    if (dateTo) where.issueDate.lte = new Date(dateTo)

    const sortMap: Record<string, 'issueDate' | 'paymentDate' | 'net' | 'gross'> = {
      InvDate: 'issueDate',
      DateDue: 'paymentDate',
      TotalInvNET: 'net',
      Balance: 'gross'
    }

    const [total, data] = await Promise.all([
      prisma.invoice.count({ where }),
      prisma.invoice.findMany({
        where,
        include: { Client: { select: { id: true, name: true, email: true, phone: true } } },
        orderBy: { [sortMap[sort] || 'issueDate']: order },
        skip,
        take: pageSize
      })
    ])

    const items = data.map(d => ({
      id: d.id,
      invNum: d.id,
      invType: 'FV',
      invDate: d.issueDate.toISOString(),
      billToId: d.clientId,
      billToName: d.Client?.name ?? null,
      clientId: d.clientId,
      clientName: d.Client?.name ?? null,
      clientEmail: d.Client?.email ?? null,
      clientPhone: d.Client?.phone ?? null,
      shipToId: null,
      currId: 'PLN',
      totalInvNET: d.net,
      vatPerc: d.vatPerc,
      termDD: 0,
      remarks: '',
      status: d.status,
      sumInWords: '',
      balance: d.gross,
      cliRef: '',
      descr: d.title,
      dateDue: d.paymentDate.toISOString(),
      userName: '',
      agentID: null,
      taxCode: '',
      taxValue: d.vat,
      taxInfo: '',
      propID: null
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const clientId = body.billToId ? Number(body.billToId) : body.clientId ? Number(body.clientId) : null
    if (!clientId) {
      return NextResponse.json({ error: 'clientId (or billToId) is required' }, { status: 400 })
    }

    const issueDate = body.invDate ? new Date(body.invDate) : new Date()
    const paymentDate = body.dateDue ? new Date(body.dateDue) : issueDate
    const net = Number(body.totalInvNET ?? 0)
    const vatPerc = Number(body.vatPerc ?? 0)
    const vat = Number(body.taxValue ?? (net * vatPerc) / 100)
    const gross = Number(body.balance ?? net + vat)

    const invoice = await prisma.invoice.create({
      data: {
        clientId,
        title: body.descr || body.title || 'Invoice',
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

    return NextResponse.json({ invNum: invoice.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/simple-invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
