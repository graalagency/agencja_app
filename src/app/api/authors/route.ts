import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') || 'asc'

  const mapOrderField = (field: string) => {
    const mapping: Record<string, 'id' | 'firstName' | 'lastName' | 'createdAt' | 'updatedAt'> = {
      id: 'id',
      firstName: 'firstName',
      lastName: 'lastName',
      fullName: 'lastName',
      penName: 'lastName',
      dateMod: 'updatedAt'
    }
    return mapping[field] || 'id'
  }

  const where = search
    ? {
        OR: [
          { firstName: { contains: search, mode: 'insensitive' as const } },
          { middleName: { contains: search, mode: 'insensitive' as const } },
          { lastName: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
          { personalEmail: { contains: search, mode: 'insensitive' as const } },
          { workEmail: { contains: search, mode: 'insensitive' as const } }
        ]
      }
    : {}

  const orderBy = {
    [mapOrderField(sortBy)]: sortOrder === 'desc' ? 'desc' : 'asc'
  } as const

  const total = await prisma.author.count({ where })
  const authors = await prisma.author.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  })

  const mapped = authors.map((a: any) => ({
    id: a.id,
    fullName: [a.firstName, a.middleName, a.lastName].filter(Boolean).join(' '),
    firstName: a.firstName,
    middleName: a.middleName,
    lastName: a.lastName,
    suffix: a.suffix ?? null,
    penName: a.penName ?? null,
    remarks: a.description,
    dateMod: a.updatedAt,
    userMod: null
  }))

  return NextResponse.json({
    data: mapped,
    meta: {
      page,
      pageSize,
      total,
      pages: Math.ceil(total / pageSize)
    }
  })
}

export async function POST(req: Request) {
  const body = await req.json()

  let firstName = body.firstName || null
  let lastName = body.lastName || null
  if ((!firstName || !lastName) && body.fullName) {
    const parts = String(body.fullName).trim().split(/\s+/)
    firstName = firstName || parts[0] || null
    lastName = lastName || (parts.slice(1).join(' ') || null)
  }

  if (!firstName || !lastName) {
    return NextResponse.json({ error: 'firstName and lastName are required' }, { status: 400 })
  }

  const author = await prisma.author.create({
    data: {
      firstName,
      middleName: body.middleName || null,
      lastName,
      description: body.remarks || body.description || null,
      personalEmail: body.personalEmail || null,
      workEmail: body.workEmail || null,
      clientId: body.clientId ? Number(body.clientId) : null,
      updatedAt: new Date()
    }
  })

  const mapped = {
    id: author.id,
    fullName: [author.firstName, author.middleName, author.lastName].filter(Boolean).join(' '),
    firstName: author.firstName,
    middleName: author.middleName,
    lastName: author.lastName,
    suffix: null,
    penName: null,
    remarks: author.description,
    dateMod: author.updatedAt,
    userMod: null
  }

  return NextResponse.json(mapped, { status: 201 })
}
