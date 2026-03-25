import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateContactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  middleName: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  fax: z.string().optional().nullable(),
  contactPosition: z.string().optional().nullable(),
  informal: z.number().optional(),
  accountant: z.number().optional().nullable(),
})

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
  const auth = await requireModuleAccess(req, 'contacts')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    const body = await req.json()

    const validationResult = UpdateContactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const contact = await prisma.contact.update({
      where: { id },
      data: {
        phoneNumber: validated.phoneNumber ?? undefined,
        firstName: validated.firstName,
        middleName: validated.middleName ?? undefined,
        lastName: validated.lastName,
        informal: validated.informal ?? undefined,
        fax: validated.fax ?? undefined,
        email: validated.email ?? undefined,
        contactPosition: validated.contactPosition ?? undefined,
        accountant: validated.accountant ?? undefined,
      }
    })
    return NextResponse.json(contact)
  } catch (err: any) {
    console.error('PUT /api/contacts/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'contacts')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    await prisma.contact.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/contacts/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
