import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') || ''
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1)
    const pageSize = Math.max(1, parseInt(searchParams.get('pageSize') || '10', 10) || 10)
    const sortBy = searchParams.get('sortBy') || 'id'
    const sortOrder = searchParams.get('sortOrder') || 'asc'

    const mapOrderField = (field: string) => {
      const mapping: Record<string, string> = {
        id: 'id',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phoneNumber: 'phoneNumber',
        dateMod: 'updatedAt',
        createdAt: 'createdAt'
      }
      return mapping[field] || 'id'
    }

    const where: Prisma.ContactWhereInput = search
      ? {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { phoneNumber: { contains: search, mode: 'insensitive' } }
          ]
        }
      : {}

    const orderBy = {
      [mapOrderField(sortBy)]: sortOrder === 'desc' ? 'desc' : 'asc'
    } as Prisma.ContactOrderByWithRelationInput

    const total = await prisma.contact.count({ where })
    const contacts = await prisma.contact.findMany({
      where,
      include: {
        ClientContact: { include: { Client: { select: { id: true, name: true } } } },
        PublisherContact: { include: { Publisher: { select: { id: true, name: true } } } }
      },
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const mapped = contacts.map((c) => ({
      id: c.id,
      phoneNumber: c.phoneNumber,
      firstName: c.firstName,
      middleName: c.middleName,
      lastName: c.lastName,
      informal: c.informal,
      fax: c.fax,
      email: c.email,
      contactPosition: c.contactPosition,
      accountant: c.accountant,
      photos: Array.isArray(c.photos) ? c.photos : [],
      clients: c.ClientContact.map((cc) => ({ id: cc.Client.id, name: cc.Client.name, isDefault: cc.isDefault })),
      publishers: c.PublisherContact.map((pc) => ({ id: pc.Publisher.id, name: pc.Publisher.name, isDefault: pc.isDefault })),
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    }))

    return NextResponse.json({
      data: mapped,
      meta: {
        page,
        pageSize,
        total,
        pages: Math.max(1, Math.ceil(total / pageSize))
      }
    })
  } catch (error) {
    console.error('Error in GET /api/contacts:', error)
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const contact = await prisma.contact.create({
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

  return NextResponse.json({
    id: contact.id,
    phoneNumber: contact.phoneNumber,
    firstName: contact.firstName,
    middleName: contact.middleName,
    lastName: contact.lastName,
    informal: contact.informal,
    fax: contact.fax,
    email: contact.email,
    contactPosition: contact.contactPosition,
    accountant: contact.accountant,
    photos: [],
    clients: [],
    publishers: [],
    createdAt: contact.createdAt,
    updatedAt: contact.updatedAt,
  }, { status: 201 })
}
