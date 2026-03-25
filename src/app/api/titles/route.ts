import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../lib/api-permissions'
import { translateZodErrors } from '../../../lib/zod-error-handler'

const CreateTitleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  isbn: z.string().optional().nullable(),
  languageCode: z.string().optional().nullable(),
  classCode: z.string().optional().nullable(),
  edition: z.number().int().optional().nullable(),
  pages: z.number().int().optional().nullable(),
  copyrightYear: z.string().optional().nullable(),
  copyrightOwner: z.string().optional().nullable(),
  keywords: z.string().optional().nullable(),
  volume: z.number().int().optional().nullable(),
  totalVolumes: z.number().int().optional().nullable(),
  isHit: z.boolean().optional(),
  isCollection: z.boolean().optional(),
  isCD: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  dateOfReceipt: z.string().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
})

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '20')
  const sortBy = searchParams.get('sortBy') || 'title'
  const sortOrder = searchParams.get('sortOrder') || 'asc'
  const clientId = searchParams.get('clientId')
  const publisherId = searchParams.get('publisherId')

  const where: any = {}

  const trimmed = search.trim()
  const exactMatch = trimmed.match(/^"(.*)"$/)
  const startsMatch = !exactMatch && trimmed.startsWith('"') ? trimmed.slice(1) : null
  if (exactMatch) {
    // "fraza" — dokładny tytuł (equals, case insensitive)
    const q = exactMatch[1]
    if (q) where.title = { equals: q, mode: 'insensitive' }
  } else if (startsMatch !== null) {
    // "fraza bez zamknięcia — tytuł zaczyna się od
    if (startsMatch) where.title = { startsWith: startsMatch, mode: 'insensitive' }
  } else {
    const words = trimmed.split(/\s+/).filter(Boolean)
    if (words.length > 0) {
      where.AND = words.map(w => ({
        OR: [
          { title:          { contains: w, mode: 'insensitive' } },
          { isbn:           { contains: w, mode: 'insensitive' } },
          { keywords:       { contains: w, mode: 'insensitive' } },
          { copyrightOwner: { contains: w, mode: 'insensitive' } },
          { Client:    { abbreviation: { contains: w, mode: 'insensitive' } } },
          { Publisher: { abbreviation: { contains: w, mode: 'insensitive' } } },
          { TitleAuthors: { some: { Author: { firstName: { contains: w, mode: 'insensitive' } } } } },
          { TitleAuthors: { some: { Author: { lastName:  { contains: w, mode: 'insensitive' } } } } },
        ],
      }))
    }
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
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  try {
    const body = await req.json()
    const validated = CreateTitleSchema.parse(body)

    const title = await prisma.title.create({
      data: {
        title: validated.title,
        isbn: validated.isbn,
        languageCode: validated.languageCode,
        classCode: validated.classCode,
        edition: validated.edition,
        pages: validated.pages,
        copyrightYear: validated.copyrightYear,
        copyrightOwner: validated.copyrightOwner,
        keywords: validated.keywords,
        volume: validated.volume,
        totalVolumes: validated.totalVolumes,
        isHit: validated.isHit ?? false,
        isCollection: validated.isCollection ?? false,
        isCD: validated.isCD ?? false,
        notes: validated.notes,
        dateOfReceipt: validated.dateOfReceipt ? new Date(validated.dateOfReceipt) : null,
        clientId: validated.clientId,
        publisherId: validated.publisherId,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json({ id: title.id }, { status: 201 })
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(e.issues, 'pl') },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
