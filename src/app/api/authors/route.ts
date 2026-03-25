import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../lib/api-permissions'
import { translateZodErrors } from '../../../lib/zod-error-handler'

const CreateAuthorSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  middleName: z.string().optional().nullable(),
  suffix: z.string().optional().nullable(),
  penName: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  personalEmail: z.string().email().optional().nullable(),
  workEmail: z.string().email().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
})

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'authors')
  if (auth.error) return auth.error

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
  const auth = await requireModuleAccess(req, 'authors')
  if (auth.error) return auth.error

  try {
    const body = await req.json()

    let firstName = body.firstName || null
    let lastName = body.lastName || null
    if ((!firstName || !lastName) && body.fullName) {
      const parts = String(body.fullName).trim().split(/\s+/)
      firstName = firstName || parts[0] || null
      lastName = lastName || (parts.slice(1).join(' ') || null)
    }

    const validated = CreateAuthorSchema.parse({
      firstName,
      lastName,
      middleName: body.middleName,
      suffix: body.suffix,
      penName: body.penName,
      description: body.remarks || body.description,
      personalEmail: body.personalEmail,
      workEmail: body.workEmail,
      clientId: body.clientId,
    })

    const author = await prisma.author.create({
      data: {
        firstName: validated.firstName,
        middleName: validated.middleName,
        lastName: validated.lastName,
        suffix: validated.suffix,
        penName: validated.penName,
        description: validated.description,
        personalEmail: validated.personalEmail,
        workEmail: validated.workEmail,
        clientId: validated.clientId,
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
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: translateZodErrors(e.issues, 'pl') }, { status: 400 })
    }
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
