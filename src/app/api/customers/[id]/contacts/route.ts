import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/customers/[id]/contacts — lista kontaktów powiązanych z kontrahentem
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const links = await prisma.clientContact.findMany({
    where: { clientId },
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

// POST /api/customers/[id]/contacts — przypisz istniejący kontakt do kontrahenta
// body: { contactId: number, isDefault?: boolean }
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const body = await req.json()
  const contactId = Number(body.contactId)
  const isDefault = Boolean(body.isDefault ?? false)

  if (!contactId) {
    return NextResponse.json({ error: 'contactId is required' }, { status: 400 })
  }

  const link = await prisma.clientContact.upsert({
    where: { contactId_clientId: { contactId, clientId } },
    create: { contactId, clientId, isDefault },
    update: { isDefault },
  })

  return NextResponse.json(link, { status: 201 })
}

// DELETE /api/customers/[id]/contacts?contactId=X — odepnij kontakt od kontrahenta
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const { searchParams } = new URL(req.url)
  const contactId = Number(searchParams.get('contactId'))

  if (!contactId) {
    return NextResponse.json({ error: 'contactId is required' }, { status: 400 })
  }

  await prisma.clientContact.delete({
    where: { contactId_clientId: { contactId, clientId } }
  })

  return NextResponse.json({ ok: true })
}
