import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { DocStatus } from '@prisma/client'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const page = Number(url.searchParams.get('page') || '1')
    const pageSize = Number(url.searchParams.get('pageSize') || '50')
    const skip = (page - 1) * pageSize

    const customerName = (url.searchParams.get('customerName') || '').trim()
    const search = (url.searchParams.get('search') || '').trim()
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const status = (url.searchParams.get('status') || '').trim()
    const currency = (url.searchParams.get('currency') || '').trim()
    const sort = url.searchParams.get('sort') || 'AgrDate' // AgrDate, AgrID, Commission
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (customerName) where.Client = { name: { contains: customerName, mode: 'insensitive' } }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { Client: { name: { contains: search, mode: 'insensitive' } } },
      ]
    }
    if (status === 'SIGNED' || status === 'DRAFT') where.status = status
    if (dateFrom || dateTo) where.createdAt = {}
    if (dateFrom) where.createdAt.gte = new Date(dateFrom)
    if (dateTo) where.createdAt.lte = new Date(dateTo)

    const sortMap: Record<string, 'id' | 'createdAt' | 'updatedAt'> = {
      AgrDate: 'createdAt',
      AgrID: 'id',
      Commission: 'id'
    }
    const orderBy = { [sortMap[sort] || 'createdAt']: order }

    const [total, data]: [number, any[]] = await Promise.all([
      prisma.document.count({ where }),
      prisma.document.findMany({
        where,
        take: pageSize,
        skip,
        orderBy,
        include: {
          Client: { select: { id: true, name: true } }
        }
      })
    ])

    const items = data.map(d => ({
      id: d.id,
      customerId: d.clientId,
      customerName: d.Client?.name ?? null,
      titleId: d.id,
      titleName: d.title,
      date: d.createdAt.toISOString(),
      currency: null,
      currencyDesc: null,
      language: null,
      languageDesc: null,
      commission: 0,
      commissionMaterials: 0,
      clientReference: null,
      status: d.status,
      validYY: 0,
      pubTermMM: 0,
      estimatedCopyPrice: 0,
      remarks: d.description || null,
      localTitle: d.title || null
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('Error in GET /api/agreements:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const clientId = body.custId ? Number(body.custId) : body.customerId ? Number(body.customerId) : body.clientId ? Number(body.clientId) : null
    if (!clientId) {
      return NextResponse.json({ error: 'clientId (or custId/customerId) is required' }, { status: 400 })
    }

    const title = body.localTitle || body.title || body.titleName || 'Agreement'
    const description = body.remarks || body.description || null
    const status = body.status === 'SIGNED' ? DocStatus.SIGNED : DocStatus.DRAFT
    const createdAt = body.agrDate ? new Date(body.agrDate) : new Date()

    const agreement = await prisma.document.create({
      data: {
        clientId,
        title,
        description,
        status,
        createdAt,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ id: agreement.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/agreements:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
