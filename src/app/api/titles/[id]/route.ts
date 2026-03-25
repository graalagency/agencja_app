import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateTitleSchema = z.object({
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
  isHit: z.boolean().optional().default(false),
  isCollection: z.boolean().optional().default(false),
  isCD: z.boolean().optional().default(false),
  notes: z.string().optional().nullable(),
  dateOfReceipt: z.string().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
})

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const title = await prisma.title.findUnique({
    where: { id },
    include: {
      Client: { select: { id: true, name: true, abbreviation: true } },
      Publisher: { select: { id: true, name: true, abbreviation: true } },
      TitleAuthors: {
        orderBy: [{ isMain: 'desc' }, { order: 'asc' }],
        include: {
          Author: { select: { id: true, firstName: true, middleName: true, lastName: true, penName: true } },
        },
      },
    },
  })
  if (!title) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(title)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateTitleSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const title = await prisma.title.update({
      where: { id },
      data: {
        title: validated.title,
        isbn: validated.isbn ?? undefined,
        languageCode: validated.languageCode ?? undefined,
        classCode: validated.classCode ?? undefined,
        edition: validated.edition ?? undefined,
        pages: validated.pages ?? undefined,
        copyrightYear: validated.copyrightYear ?? undefined,
        copyrightOwner: validated.copyrightOwner ?? undefined,
        keywords: validated.keywords ?? undefined,
        volume: validated.volume ?? undefined,
        totalVolumes: validated.totalVolumes ?? undefined,
        isHit: validated.isHit,
        isCollection: validated.isCollection,
        isCD: validated.isCD,
        notes: validated.notes ?? undefined,
        dateOfReceipt: validated.dateOfReceipt ? new Date(validated.dateOfReceipt) : undefined,
        clientId: validated.clientId ?? undefined,
        publisherId: validated.publisherId ?? undefined,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json(title)
  } catch (err: any) {
    console.error('PUT /api/titles/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    await prisma.title.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/titles/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
