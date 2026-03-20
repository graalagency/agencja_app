import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

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
  const id = Number(params.id)
  const body = await req.json()
  const title = await prisma.title.update({
    where: { id },
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
  return NextResponse.json(title)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.title.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
