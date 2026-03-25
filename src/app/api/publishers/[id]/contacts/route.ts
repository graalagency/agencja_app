import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../../lib/zod-error-handler'

const LinkContactSchema = z.object({
  contactId: z.number().int().min(1, 'Contact ID is required'),
  isDefault: z.boolean().optional().default(false),
})

// GET /api/publishers/[id]/contacts — lista kontaktów powiązanych z wydawcą
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  try {
    const publisherId = Number(params.id)
    const links = await prisma.publisherContact.findMany({
      where: { publisherId },
      include: { Contact: true },
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
  } catch (err: any) {
    console.error('GET /api/publishers/[id]/contacts error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

// POST /api/publishers/[id]/contacts — przypisz istniejący kontakt do wydawcy
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  try {
    const publisherId = Number(params.id)
    const body = await req.json()

    const validationResult = LinkContactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const link = await prisma.publisherContact.upsert({
      where: { contactId_publisherId: { contactId: validated.contactId, publisherId } },
      create: { contactId: validated.contactId, publisherId, isDefault: validated.isDefault },
      update: { isDefault: validated.isDefault },
    })

    return NextResponse.json(link, { status: 201 })
  } catch (err: any) {
    console.error('POST /api/publishers/[id]/contacts error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

// DELETE /api/publishers/[id]/contacts?contactId=X — odepnij kontakt od wydawcy
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'publishers')
  if (auth.error) return auth.error

  try {
    const publisherId = Number(params.id)
    const { searchParams } = new URL(req.url)
    const contactId = Number(searchParams.get('contactId'))

    if (!contactId) {
      return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 })
    }

    await prisma.publisherContact.delete({
      where: { contactId_publisherId: { contactId, publisherId } }
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/publishers/[id]/contacts error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
