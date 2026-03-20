import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '20')
  const sortBy = searchParams.get('sortBy') || 'title'
  const sortOrder = searchParams.get('sortOrder') || 'asc'
  const clientId = searchParams.get('clientId')
  const publisherId = searchParams.get('publisherId')

  const where: any = {}

  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { isbn: { contains: search, mode: 'insensitive' } },
      { keywords: { contains: search, mode: 'insensitive' } },
      { copyrightOwner: { contains: search, mode: 'insensitive' } },
    ]
  }

  if (clientId) where.clientId = Number(clientId)
  if (publisherId) where.publisherId = Number(publisherId)

  const validSortFields = ['id', 'title', 'isbn', 'languageCode', 'classCode', 'edition', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'title'
  const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' } as const

  const total = await prisma.title.count({ where })

  const titles = await prisma.title.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      Client: { select: { id: true, name: true, abbreviation: true } },
      Publisher: { select: { id: true, name: true, abbreviation: true } },
      TitleAuthors: {
        orderBy: [{ isMain: 'desc' }, { order: 'asc' }],
        take: 3,
        include: { Author: { select: { id: true, firstName: true, middleName: true, lastName: true } } },
      },
    },
  })

  return NextResponse.json({
    data: titles.map(t => ({
      id: t.id,
      sourceId: t.sourceId,
      title: t.title,
      isbn: t.isbn,
      languageCode: t.languageCode,
      classCode: t.classCode,
      edition: t.edition,
      pages: t.pages,
      copyrightYear: t.copyrightYear,
      copyrightOwner: t.copyrightOwner,
      isHit: t.isHit,
      isCollection: t.isCollection,
      isCD: t.isCD,
      authors: t.TitleAuthors.map(ta => ({
        id: ta.Author.id,
        name: [ta.Author.firstName, ta.Author.middleName, ta.Author.lastName].filter(Boolean).join(' '),
        isMain: ta.isMain,
      })),
      owner: t.Client
        ? { id: t.Client.id, name: t.Client.abbreviation || t.Client.name, type: 'client' }
        : t.Publisher
        ? { id: t.Publisher.id, name: t.Publisher.abbreviation || t.Publisher.name, type: 'publisher' }
        : null,
      clientId: t.clientId,
      publisherId: t.publisherId,
      createdAt: t.createdAt,
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
  const title = await prisma.title.create({
    data: {
      title: body.title,
      isbn: body.isbn || null,
      languageCode: body.languageCode || null,
      classCode: body.classCode || null,
      edition: body.edition ? Number(body.edition) : null,
      pages: body.pages ? Number(body.pages) : null,
      copyrightYear: body.copyrightYear || null,
      copyrightOwner: body.copyrightOwner || null,
      keywords: body.keywords || null,
      volume: body.volume ? Number(body.volume) : null,
      totalVolumes: body.totalVolumes ? Number(body.totalVolumes) : null,
      isHit: body.isHit ?? false,
      isCollection: body.isCollection ?? false,
      isCD: body.isCD ?? false,
      notes: body.notes || null,
      dateOfReceipt: body.dateOfReceipt ? new Date(body.dateOfReceipt) : null,
      clientId: body.clientId ? Number(body.clientId) : null,
      publisherId: body.publisherId ? Number(body.publisherId) : null,
      updatedAt: new Date(),
    },
  })
  return NextResponse.json({ id: title.id }, { status: 201 })
}
