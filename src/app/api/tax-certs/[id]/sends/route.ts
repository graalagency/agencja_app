import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

// POST /api/tax-certs/[id]/sends — dodaj wysyłkę do certyfikatu
// body: { clientId?, publisherId?, dateSend?, sendOrig?, sendCopy? }
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const certId = Number(params.id)
  const body = await req.json()

  if (!body.clientId && !body.publisherId) {
    return NextResponse.json({ error: 'clientId or publisherId required' }, { status: 400 })
  }

  const send = await prisma.taxResidenceSend.create({
    data: {
      certId,
      clientId: body.clientId ? Number(body.clientId) : null,
      publisherId: body.publisherId ? Number(body.publisherId) : null,
      dateSend: body.dateSend ? new Date(body.dateSend) : null,
      sendOrig: Boolean(body.sendOrig),
      sendCopy: Boolean(body.sendCopy),
    },
  })

  return NextResponse.json({ id: send.id }, { status: 201 })
}

// DELETE /api/tax-certs/[id]/sends?sendId=X
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(req.url)
  const sendId = Number(searchParams.get('sendId'))
  if (!sendId) return NextResponse.json({ error: 'sendId required' }, { status: 400 })

  await prisma.taxResidenceSend.delete({ where: { id: sendId } })
  return NextResponse.json({ ok: true })
}
