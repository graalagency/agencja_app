import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../../lib/zod-error-handler'

const TitleAuthorSchema = z.object({
  authorId: z.number().int().min(1, 'Author ID is required'),
  isMain: z.boolean().optional().default(false),
  order: z.number().int().optional(),
})

const TitleAuthorsListSchema = z.array(TitleAuthorSchema)

// PUT /api/titles/[id]/authors — zastąp listę autorów tytułu
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  try {
    const titleId = Number(params.id)
    const body = await req.json()

    const validationResult = TitleAuthorsListSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    await prisma.$transaction([
      prisma.titleAuthor.deleteMany({ where: { titleId } }),
      ...validated.map((a, i) =>
        prisma.titleAuthor.create({
          data: { titleId, authorId: a.authorId, isMain: a.isMain, order: a.order ?? i + 1 },
        })
      ),
    ])
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('PUT /api/titles/[id]/authors error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

// DELETE /api/titles/[id]/authors?authorId=X
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  try {
    const titleId = Number(params.id)
    const { searchParams } = new URL(req.url)
    const authorId = Number(searchParams.get('authorId'))

    if (!authorId) {
      return NextResponse.json({ error: 'Author ID is required' }, { status: 400 })
    }

    await prisma.titleAuthor.delete({ where: { titleId_authorId: { titleId, authorId } } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/titles/[id]/authors error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

// POST /api/titles/[id]/authors — dodaj jednego autora
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'titles')
  if (auth.error) return auth.error

  try {
    const titleId = Number(params.id)
    const body = await req.json()

    const validationResult = TitleAuthorSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const existing = await prisma.titleAuthor.findFirst({ where: { titleId }, orderBy: { order: 'desc' } })
    const nextOrder = validated.order ?? (existing ? existing.order + 1 : 1)
    await prisma.titleAuthor.upsert({
      where: { titleId_authorId: { titleId, authorId: validated.authorId } },
      create: { titleId, authorId: validated.authorId, isMain: validated.isMain, order: nextOrder },
      update: { isMain: validated.isMain, order: nextOrder },
    })
    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err: any) {
    console.error('POST /api/titles/[id]/authors error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
