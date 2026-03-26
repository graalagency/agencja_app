import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(6),
})

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const result = ChangePasswordSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: result.error.issues.map(i => ({ field: i.path[0], message: i.message })),
        },
        { status: 400 }
      )
    }

    const { currentPassword, newPassword } = result.data

    const user = await prisma.user.findUnique({
      where: { id: Number(session.user.id) },
      select: { passwordHash: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.passwordHash)
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await prisma.user.update({
      where: { id: Number(session.user.id) },
      data: { passwordHash: hashedPassword },
    })

    return NextResponse.json({ message: 'Password changed successfully' })
  } catch (err) {
    console.error('PUT /api/profile/password error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
