import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/publishers/[id]/contacts — lista kontaktów powiązanych z wydawcą
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const publisherId = Number(params.id)
  const links = await prisma.publisherContact.findMany({
    where: { publisherId },
    include: {
      Contact: true
    },
    orderBy: [{ isDefault: 'desc' }, { createdAt: 'asc' }]
  })

  return NextResponse.json(
    links.map((l) => ({
      linkId: l.id,
      isDefault: l.isDefault,
      id: l.Contact.id,
      firstName: l.Contact.firstName,
      middleName: l.Contact.middleName,
      lastName: l.Contact.lastName,
      email: l.Contact.email,
      phoneNumber: l.Contact.phoneNumber,
      fax: l.Contact.fax,
      contactPosition: l.Contact.contactPosition,
      accountant: l.Contact.accountant,
      informal: l.Contact.informal,
    }))
  )
}

// POST /api/publishers/[id]/contacts — przypisz istniejący kontakt do wydawcy
// body: { contactId: number, isDefault?: boolean }
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const publisherId = Number(params.id)
  const body = await req.json()
  const contactId = Number(body.contactId)
  const isDefault = Boolean(body.isDefault ?? false)

  if (!contactId) {
    return NextResponse.json({ error: 'contactId is required' }, { status: 400 })
  }

  const link = await prisma.publisherContact.upsert({
    where: { contactId_publisherId: { contactId, publisherId } },
    create: { contactId, publisherId, isDefault },
    update: { isDefault },
  })

  return NextResponse.json(link, { status: 201 })
}

// DELETE /api/publishers/[id]/contacts?contactId=X — odepnij kontakt od wydawcy
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const publisherId = Number(params.id)
  const { searchParams } = new URL(req.url)
  const contactId = Number(searchParams.get('contactId'))

  if (!contactId) {
    return NextResponse.json({ error: 'contactId is required' }, { status: 400 })
  }

  await prisma.publisherContact.delete({
    where: { contactId_publisherId: { contactId, publisherId } }
  })

  return NextResponse.json({ ok: true })
}
