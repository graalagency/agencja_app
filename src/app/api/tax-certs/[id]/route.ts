import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/tax-certs/[id]
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const cert = await prisma.taxResidenceCert.findUnique({
    where: { id },
    include: { SendLog: true },
  })
  if (!cert) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json({
    id: cert.id,
    clientId: cert.clientId,
    publisherId: cert.publisherId,
    validDate: cert.validDate,
    requestDate: cert.requestDate,
    receiveDate: cert.receiveDate,
    hasCert: cert.hasCert,
    notes: cert.notes,
    fileName: cert.fileName,
    hasFile: cert.fileData !== null,
    createdAt: cert.createdAt,
    updatedAt: cert.updatedAt,
    sendLog: cert.SendLog.map((s) => ({
      id: s.id,
      dateSend: s.dateSend,
      sendOrig: s.sendOrig,
      sendCopy: s.sendCopy,
    })),
  })
}

// PUT /api/tax-certs/[id]
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()

  const cert = await prisma.taxResidenceCert.update({
    where: { id },
    data: {
      validDate: body.validDate ? new Date(body.validDate) : undefined,
      requestDate: body.requestDate ? new Date(body.requestDate) : null,
      receiveDate: body.receiveDate ? new Date(body.receiveDate) : null,
      hasCert: body.hasCert !== undefined ? Boolean(body.hasCert) : undefined,
      notes: body.notes !== undefined ? (body.notes || null) : undefined,
      updatedAt: new Date(),
    },
  })

  return NextResponse.json({ id: cert.id })
}

// DELETE /api/tax-certs/[id]
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.taxResidenceCert.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
