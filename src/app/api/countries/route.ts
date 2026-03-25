import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { requireModuleAccess } from '../../../lib/api-permissions'

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'countries')
  if (auth.error) return auth.error

  const p = prisma as any
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = Number(searchParams.get('page') || 1)
  const pageSize = Number(searchParams.get('pageSize') || 10)
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') === 'desc' ? 'desc' : 'asc'

  const where = search
    ? {
        OR: [
          { description: { contains: search, mode: 'insensitive' } },
          { code: { contains: search, mode: 'insensitive' } },
        ],
      }
    : {}

  const validSortFields = ['id', 'description', 'code', 'tax', 'eu', 'createdAt'] as const
  const orderField = validSortFields.includes(sortBy as (typeof validSortFields)[number])
    ? sortBy
    : 'id'

  const total = await p.dictCountry.count({ where })
  const data = await p.dictCountry.findMany({
    where,
    orderBy: { [orderField]: sortOrder },
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data,
    meta: {
      page,
      pageSize,
      total,
      pages: Math.max(1, Math.ceil(total / pageSize)),
    },
  })
}

export async function POST(req: Request) {
  const auth = await requireModuleAccess(req, 'countries')
  if (auth.error) return auth.error

  try {
    const p = prisma as any
    const body = await req.json()
    const created = await p.dictCountry.create({
      data: {
        description: body.description,
        code: String(body.code || '').toUpperCase(),
        tax: Number(body.tax),
        eu: Boolean(body.eu),
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to create country dictionary entry' }, { status: 400 })
  }
}
