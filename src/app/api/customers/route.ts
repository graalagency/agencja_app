import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') || 'asc'

  const where = search ? {
    OR: [
      { name: { contains: search, mode: 'insensitive' as const } },
      { email: { contains: search, mode: 'insensitive' as const } },
      { phone: { contains: search, mode: 'insensitive' as const } },
      { nip: { contains: search, mode: 'insensitive' as const } },
      { regon: { contains: search, mode: 'insensitive' as const } },
      { abbreviation: { contains: search, mode: 'insensitive' as const } },
    ]
  } : {}

  const validSortFields = ['id', 'name', 'email', 'phone', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const columnMap: Record<string, 'id' | 'name' | 'email' | 'phone' | 'createdAt'> = {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt'
  }
  const orderBy = { [columnMap[orderByField]]: sortOrder === 'desc' ? 'desc' : 'asc' } as const

  const total = await prisma.client.count({ where })

  const clients = await prisma.client.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data: clients.map(c => ({
      id: c.id,
      abbreviation: c.abbreviation,
      name: c.name,
      email: c.email,
      phone: c.phone,
      address: c.address,
      city: c.city,
      postalCode: c.postalCode,
      nip: c.nip,
      regon: c.regon,
      notes: c.notes,
      createdAt: c.createdAt,
    })),
    meta: {
      page,
      pageSize,
      total,
      pages: Math.ceil(total / pageSize),
    }
  })
}

export async function POST(req: Request) {
  const body = await req.json()
  const client = await prisma.client.create({
    data: {
      name: body.name || null,
      email: body.email || null,
      phone: body.phone || null,
      address: body.address || null,
      city: body.city || null,
      postalCode: body.postalCode || null,
      nip: body.nip || null,
      regon: body.regon || null,
      notes: body.notes || null,
      updatedAt: new Date(),
    }
  })

  return NextResponse.json({ id: client.id }, { status: 201 })
}
