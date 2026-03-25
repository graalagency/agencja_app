import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { z } from 'zod'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateCountrySchema = z.object({
  description: z.string().optional(),
  code: z.string().optional(),
  tax: z.number().optional(),
  eu: z.boolean().optional(),
})

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const p = prisma as any
  const id = Number(params.id)
  const data = await p.dictCountry.findUnique({ where: { id } })
  return NextResponse.json(data)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'dictionaries')
  if (auth.error) return auth.error

  try {
    const p = prisma as any
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateCountrySchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const updated = await p.dictCountry.update({
      where: { id },
      data: {
        ...(validated.description !== undefined ? { description: validated.description } : {}),
        ...(validated.code !== undefined ? { code: String(validated.code).toUpperCase() } : {}),
        ...(validated.tax !== undefined ? { tax: validated.tax } : {}),
        ...(validated.eu !== undefined ? { eu: validated.eu } : {}),
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(updated)
  } catch (error: any) {
    console.error('PUT /api/countries/[id] error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to update country dictionary entry' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'dictionaries')
  if (auth.error) return auth.error

  try {
    const p = prisma as any
    const id = Number(params.id)
    await p.dictCountry.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error('DELETE /api/countries/[id] error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to delete country dictionary entry' }, { status: 500 })
  }
}
