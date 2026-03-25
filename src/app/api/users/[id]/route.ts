import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../lib/zod-error-handler'
import { z } from 'zod'

const UpdateUserSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  role: z.enum(['USER', 'ADVANCED', 'ADMIN']).optional().default('USER'),
  permissions: z.record(z.any()).optional(),
  password: z.string().min(6, 'Password must be at least 6 characters').optional(),
})

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) return NextResponse.json(null)
  const { passwordHash, ...rest } = user as any
  return NextResponse.json(rest)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'users')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateUserSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const data: any = {
      name: validated.name ?? undefined,
      role: validated.role ?? undefined,
    }

    // Handle permissions as JSON string
    if (validated.permissions !== undefined) {
      data.permissions = validated.permissions ? JSON.stringify(validated.permissions) : '{}'
    }

    if (validated.password) {
      data.passwordHash = await bcrypt.hash(validated.password, 10)
    }

    const user = await prisma.user.update({ where: { id }, data })
    const { passwordHash, ...rest } = user as any
    return NextResponse.json(rest)
  } catch (err: any) {
    console.error('PUT /api/users/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'users')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    await prisma.user.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/users/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
