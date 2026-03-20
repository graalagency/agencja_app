import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

const sendLogSelect = {
  id: true,
  dateSend: true,
  sendOrig: true,
  sendCopy: true,
  clientId: true,
  publisherId: true,
  Client: { select: { id: true, name: true, abbreviation: true } },
  Publisher: { select: { id: true, name: true, abbreviation: true } },
}

function mapCert(c: any, hasFile: boolean) {
  return {
    id: c.id,
    validDate: c.validDate,
    requestDate: c.requestDate,
    receiveDate: c.receiveDate,
    hasCert: c.hasCert,
    notes: c.notes,
    fileName: c.fileName,
    hasFile,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
    sendLog: c.SendLog.map((s: any) => ({
      id: s.id,
      dateSend: s.dateSend,
      sendOrig: s.sendOrig,
      sendCopy: s.sendCopy,
      recipient: s.Client
        ? { id: s.Client.id, name: s.Client.abbreviation || s.Client.name, type: 'client' }
        : s.Publisher
        ? { id: s.Publisher.id, name: s.Publisher.abbreviation || s.Publisher.name, type: 'publisher' }
        : null,
    })),
  }
}

// GET /api/customers/[id]/tax-certs
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const certs = await prisma.taxResidenceCert.findMany({
    where: { clientId },
    select: {
      id: true, validDate: true, requestDate: true, receiveDate: true,
      hasCert: true, notes: true, fileName: true, createdAt: true, updatedAt: true,
      SendLog: { select: sendLogSelect, orderBy: { dateSend: 'asc' } },
    },
    orderBy: { validDate: 'desc' },
  })
  const withFile = await prisma.$queryRaw<{ id: number }[]>`
    SELECT id FROM "TaxResidenceCert" WHERE "clientId" = ${clientId} AND "fileData" IS NOT NULL
  `
  const fileSet = new Set(withFile.map((r) => r.id))
  return NextResponse.json(certs.map((c) => mapCert(c, fileSet.has(c.id))))
}

// POST /api/customers/[id]/tax-certs
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const body = await req.json()
  const cert = await prisma.taxResidenceCert.create({
    data: {
      clientId,
      validDate: new Date(body.validDate),
      requestDate: body.requestDate ? new Date(body.requestDate) : null,
      receiveDate: body.receiveDate ? new Date(body.receiveDate) : null,
      hasCert: Boolean(body.hasCert),
      notes: body.notes || null,
      updatedAt: new Date(),
    },
  })
  return NextResponse.json({ id: cert.id }, { status: 201 })
}
