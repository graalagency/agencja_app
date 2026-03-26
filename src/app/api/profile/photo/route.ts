import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'
import { writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs'
import { extname } from 'path'

const ALLOWED_MIMES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
const UPLOAD_DIR = 'public/uploads/users'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get('photo') as File

    if (!file) {
      return NextResponse.json({ error: 'No photo provided' }, { status: 400 })
    }

    if (!ALLOWED_MIMES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images allowed.' },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const ext = extname(file.name).toLowerCase()
    const timestamp = Date.now()
    const filename = `user-${session.user.id}-${timestamp}${ext}`
    const filepath = `${UPLOAD_DIR}/${filename}`

    // Ensure directory exists
    if (!existsSync(UPLOAD_DIR)) {
      mkdirSync(UPLOAD_DIR, { recursive: true })
    }

    writeFileSync(filepath, buffer)

    const url = `/uploads/users/${filename}`
    await prisma.user.update({
      where: { id: Number(session.user.id) },
      data: { image: url },
    })

    return NextResponse.json({ url })
  } catch (err) {
    console.error('POST /api/profile/photo error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get('url')

    if (!url) {
      return NextResponse.json({ error: 'URL parameter required' }, { status: 400 })
    }

    const filename = url.split('/').pop()
    if (!filename) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
    }

    const filepath = `${UPLOAD_DIR}/${filename}`
    if (existsSync(filepath)) {
      unlinkSync(filepath)
    }

    await prisma.user.update({
      where: { id: Number(session.user.id) },
      data: { image: null },
    })

    return NextResponse.json({ message: 'Photo deleted' })
  } catch (err) {
    console.error('DELETE /api/profile/photo error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
