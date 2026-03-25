import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateClientSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  email: z.string().email().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  nip: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
})

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const client = await prisma.client.findUnique({ where: { id } })
  return NextResponse.json(client)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'customers')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateClientSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const client = await prisma.client.update({
      where: { id },
      data: {
        name: validated.name ?? undefined,
        email: validated.email ?? undefined,
        phone: validated.phone ?? undefined,
        address: validated.address ?? undefined,
        city: validated.city ?? undefined,
        postalCode: validated.postalCode ?? undefined,
        nip: validated.nip ?? undefined,
        regon: validated.regon ?? undefined,
        notes: validated.notes ?? undefined,
        updatedAt: new Date(),
      }
    })
    return NextResponse.json(client)
  } catch (err: any) {
    console.error('PUT /api/customers/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'customers')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    await prisma.client.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/customers/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
