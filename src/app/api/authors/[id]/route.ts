import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

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
  const id = Number(params.id)
  const body = await req.json()
  
  const author = await prisma.author.update({ 
    where: { id }, 
    data: { 
      firstName: body.firstName || null,
      middleName: body.middleName || null,
      lastName: body.lastName || null,
      description: body.remarks || body.description || null,
      personalEmail: body.personalEmail || null,
      workEmail: body.workEmail || null,
      clientId: body.clientId ? Number(body.clientId) : null,
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
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.author.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
