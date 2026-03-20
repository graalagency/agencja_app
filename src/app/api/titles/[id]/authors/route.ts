import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

// PUT /api/titles/[id]/authors — zastąp listę autorów tytułu
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const titleId = Number(params.id)
  // body: [{ authorId: number, isMain: boolean, order: number }]
  const body: { authorId: number; isMain?: boolean; order?: number }[] = await req.json()

  await prisma.$transaction([
    prisma.titleAuthor.deleteMany({ where: { titleId } }),
    ...body.map((a, i) =>
      prisma.titleAuthor.create({
        data: { titleId, authorId: a.authorId, isMain: a.isMain ?? false, order: a.order ?? i + 1 },
      })
    ),
  ])
  return NextResponse.json({ ok: true })
}

// DELETE /api/titles/[id]/authors?authorId=X
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const titleId = Number(params.id)
  const { searchParams } = new URL(req.url)
  const authorId = Number(searchParams.get('authorId'))
  await prisma.titleAuthor.delete({ where: { titleId_authorId: { titleId, authorId } } })
  return NextResponse.json({ ok: true })
}

// POST /api/titles/[id]/authors — dodaj jednego autora
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const titleId = Number(params.id)
  const { authorId, isMain, order } = await req.json()
  const existing = await prisma.titleAuthor.findFirst({ where: { titleId }, orderBy: { order: 'desc' } })
  const nextOrder = order ?? (existing ? existing.order + 1 : 1)
  await prisma.titleAuthor.upsert({
    where: { titleId_authorId: { titleId, authorId } },
    create: { titleId, authorId, isMain: isMain ?? false, order: nextOrder },
    update: { isMain: isMain ?? false, order: nextOrder },
  })
  return NextResponse.json({ ok: true }, { status: 201 })
}
