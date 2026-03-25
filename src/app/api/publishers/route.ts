import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../lib/api-permissions'
import { translateZodErrors } from '../../../lib/zod-error-handler'

const CreatePublisherSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  nip: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  legalForm: z.string().optional().nullable(),
  bankAccount: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
})

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') || 'asc'

  const where = search
    ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' as const } },
          { email: { contains: search, mode: 'insensitive' as const } },
          { phone: { contains: search, mode: 'insensitive' as const } },
          { nip: { contains: search, mode: 'insensitive' as const } },
          { regon: { contains: search, mode: 'insensitive' as const } },
          { abbreviation: { contains: search, mode: 'insensitive' as const } },
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
      abbreviation: p.abbreviation,
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
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  try {
    const body = await req.json()
    const validated = CreatePublisherSchema.parse(body)

    const publisher = await prisma.publisher.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        address: validated.address,
        city: validated.city,
        postalCode: validated.postalCode,
        country: validated.country,
        nip: validated.nip,
        regon: validated.regon,
        legalForm: validated.legalForm,
        bankAccount: validated.bankAccount,
        notes: validated.notes,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ id: publisher.id }, { status: 201 })
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: translateZodErrors(e.issues, 'pl') }, { status: 400 })
    }
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
