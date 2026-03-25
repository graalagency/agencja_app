import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateAuthorSchema = z.object({
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  middleName: z.string().optional().nullable(),
  suffix: z.string().optional().nullable(),
  penName: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  personalEmail: z.string().email().optional().nullable(),
  workEmail: z.string().email().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
})

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const author = await prisma.author.findUnique({
    where: { id }
  })
  if (!author) return NextResponse.json({ error: 'Author not found' }, { status: 404 })

  return NextResponse.json({
    id: author.id,
    fullName: [author.firstName, author.middleName, author.lastName].filter(Boolean).join(' '),
    firstName: author.firstName,
    middleName: author.middleName,
    lastName: author.lastName,
    suffix: null,
    penName: null,
    remarks: author.description,
    dateMod: author.updatedAt,
    userMod: null,
    personalEmail: author.personalEmail,
    workEmail: author.workEmail,
    clientId: author.clientId
  })
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'authors')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateAuthorSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const author = await prisma.author.update({
      where: { id },
      data: {
        firstName: validated.firstName ?? undefined,
        middleName: validated.middleName ?? undefined,
        lastName: validated.lastName ?? undefined,
        description: validated.description ?? undefined,
        personalEmail: validated.personalEmail ?? undefined,
        workEmail: validated.workEmail ?? undefined,
        clientId: validated.clientId ?? undefined,
        updatedAt: new Date(),
      }
    })

    return NextResponse.json({
      id: author.id,
      fullName: [author.firstName, author.middleName, author.lastName].filter(Boolean).join(' '),
      firstName: author.firstName,
      middleName: author.middleName,
      lastName: author.lastName,
      remarks: author.description,
      dateMod: author.updatedAt,
      personalEmail: author.personalEmail,
      workEmail: author.workEmail,
      clientId: author.clientId
    })
  } catch (err: any) {
    console.error('PUT /api/authors/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'authors')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    await prisma.author.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/authors/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
