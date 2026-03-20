import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const contact = await prisma.contact.findUnique({
    where: { id },
    include: {
      ClientContact: { include: { Client: { select: { id: true, name: true } } } },
      PublisherContact: { include: { Publisher: { select: { id: true, name: true } } } }
    }
  })
  if (!contact) {
    return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
  }

  return NextResponse.json({
    ...contact,
    photos: Array.isArray(contact.photos) ? contact.photos : [],
    clients: contact.ClientContact.map((cc) => ({ id: cc.Client.id, name: cc.Client.name, isDefault: cc.isDefault })),
    publishers: contact.PublisherContact.map((pc) => ({ id: pc.Publisher.id, name: pc.Publisher.name, isDefault: pc.isDefault })),
  })
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()

  const contact = await prisma.contact.update({
    where: { id },
    data: {
      phoneNumber: body.phoneNumber || null,
      firstName: body.firstName,
      middleName: body.middleName || null,
      lastName: body.lastName,
      informal: body.informal ?? 0,
      fax: body.fax || null,
      email: body.email || null,
      contactPosition: body.contactPosition || null,
      accountant: body.accountant || null,
    }
  })
  return NextResponse.json(contact)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.contact.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
