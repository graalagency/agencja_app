import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../../lib/zod-error-handler'

const CreateTaxCertSchema = z.object({
  validDate: z.string().min(1, 'Valid date is required'),
  requestDate: z.string().optional().nullable(),
  receiveDate: z.string().optional().nullable(),
  hasCert: z.boolean().optional().default(false),
  notes: z.string().optional().nullable(),
})

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

// GET /api/publishers/[id]/tax-certs
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  try {
    const publisherId = Number(params.id)
    const certs = await prisma.taxResidenceCert.findMany({
      where: { publisherId },
      select: {
        id: true, validDate: true, requestDate: true, receiveDate: true,
        hasCert: true, notes: true, fileName: true, createdAt: true, updatedAt: true,
        SendLog: { select: sendLogSelect, orderBy: { dateSend: 'asc' } },
      },
      orderBy: { validDate: 'desc' },
    })
    const withFile = await prisma.$queryRaw<{ id: number }[]>`
      SELECT id FROM "TaxResidenceCert" WHERE "publisherId" = ${publisherId} AND "fileData" IS NOT NULL
    `
    const fileSet = new Set(withFile.map((r) => r.id))
    return NextResponse.json(certs.map((c) => mapCert(c, fileSet.has(c.id))))
  } catch (err: any) {
    console.error('GET /api/publishers/[id]/tax-certs error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

// POST /api/publishers/[id]/tax-certs
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  try {
    const publisherId = Number(params.id)
    const body = await req.json()

    const validationResult = CreateTaxCertSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const cert = await prisma.taxResidenceCert.create({
      data: {
        publisherId,
        validDate: new Date(validated.validDate),
        requestDate: validated.requestDate ? new Date(validated.requestDate) : null,
        receiveDate: validated.receiveDate ? new Date(validated.receiveDate) : null,
        hasCert: validated.hasCert,
        notes: validated.notes ?? null,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json({ id: cert.id }, { status: 201 })
  } catch (err: any) {
    console.error('POST /api/publishers/[id]/tax-certs error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
