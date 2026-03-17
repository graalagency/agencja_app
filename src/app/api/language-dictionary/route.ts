import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
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

  const validSortFields = ['id', 'description', 'code', 'createdAt'] as const
  const orderField = validSortFields.includes(sortBy as (typeof validSortFields)[number])
    ? sortBy
    : 'id'

  const total = await p.dictLanguage.count({ where })
  const data = await p.dictLanguage.findMany({
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
  try {
    const p = prisma as any
    const body = await req.json()
    const created = await p.dictLanguage.create({
      data: {
        description: body.description,
        code: String(body.code || '').toUpperCase(),
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to create language dictionary entry' }, { status: 400 })
  }
}
