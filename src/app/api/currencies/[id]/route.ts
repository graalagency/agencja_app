import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const p = prisma as any
  const id = Number(params.id)
  const data = await p.dictCurrency.findUnique({ where: { id } })
  return NextResponse.json(data)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const p = prisma as any
    const id = Number(params.id)
    const body = await req.json()

    const updated = await p.dictCurrency.update({
      where: { id },
      data: {
        ...(body.description !== undefined ? { description: body.description } : {}),
        ...(body.code !== undefined ? { code: String(body.code).toUpperCase() } : {}),
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(updated)
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to update currency dictionary entry' }, { status: 400 })
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const p = prisma as any
    const id = Number(params.id)
    await p.dictCurrency.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to delete currency dictionary entry' }, { status: 400 })
  }
}
