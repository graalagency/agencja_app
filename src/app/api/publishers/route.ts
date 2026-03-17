import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') || 'asc'

  const where = search
    ? {
        OR: [
          { name: { contains: search } },
          { email: { contains: search } },
          { phone: { contains: search } },
          { nip: { contains: search } },
          { regon: { contains: search } },
        ],
      }
    : {}

  const validSortFields = ['id', 'name', 'email', 'phone', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const columnMap: Record<string, 'id' | 'name' | 'email' | 'phone' | 'createdAt'> = {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
  }
  const orderBy = { [columnMap[orderByField]]: sortOrder === 'desc' ? 'desc' : 'asc' } as const

  const total = await prisma.publisher.count({ where })

  const publishers = await prisma.publisher.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data: publishers.map((p) => ({
      id: p.id,
      name: p.name,
      email: p.email,
      phone: p.phone,
      address: p.address,
      city: p.city,
      postalCode: p.postalCode,
      nip: p.nip,
      regon: p.regon,
      notes: p.notes,
      createdAt: p.createdAt,
    })),
    meta: {
      page,
      pageSize,
      total,
      pages: Math.ceil(total / pageSize),
    },
  })
}

export async function POST(req: Request) {
  const body = await req.json()
  const publisher = await prisma.publisher.create({
    data: {
      name: body.name || null,
      email: body.email || null,
      phone: body.phone || null,
      address: body.address || null,
      city: body.city || null,
      postalCode: body.postalCode || null,
      country: body.country || null,
      nip: body.nip || null,
      regon: body.regon || null,
      legalForm: body.legalForm || null,
      bankAccount: body.bankAccount || null,
      notes: body.notes || null,
      updatedAt: new Date(),
    },
  })

  return NextResponse.json({ id: publisher.id }, { status: 201 })
}
