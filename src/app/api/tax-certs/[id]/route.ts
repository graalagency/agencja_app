import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateTaxCertSchema = z.object({
  validDate: z.string().optional(),
  requestDate: z.string().optional().nullable(),
  receiveDate: z.string().optional().nullable(),
  hasCert: z.boolean().optional(),
  notes: z.string().optional().nullable(),
})

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
  const auth = await requireModuleAccess(req, 'customers')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateTaxCertSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const cert = await prisma.taxResidenceCert.update({
      where: { id },
      data: {
        validDate: validated.validDate ? new Date(validated.validDate) : undefined,
        requestDate: validated.requestDate ? new Date(validated.requestDate) : null,
        receiveDate: validated.receiveDate ? new Date(validated.receiveDate) : null,
        hasCert: validated.hasCert !== undefined ? validated.hasCert : undefined,
        notes: validated.notes !== undefined ? validated.notes : undefined,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ id: cert.id })
  } catch (err: any) {
    console.error('PUT /api/tax-certs/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

// DELETE /api/tax-certs/[id]
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'customers')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    await prisma.taxResidenceCert.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/tax-certs/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
