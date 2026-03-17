import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)

    const agreement = await prisma.document.findUnique({
      where: { id },
      include: {
        Client: true
      }
    })

    if (!agreement) {
      return NextResponse.json({ error: 'Agreement not found' }, { status: 404 })
    }

    return NextResponse.json({
      id: agreement.id,
      customerId: agreement.clientId,
      customerName: agreement.Client?.name ?? null,
      customerDetails: agreement.Client || null,
      titleId: agreement.id,
      titleName: agreement.title,
      titleDetails: { title: agreement.title },
      date: agreement.createdAt.toISOString(),
      currency: null,
      currencyDesc: null,
      language: null,
      languageDesc: null,
      commission: 0,
      commissionMaterials: 0,
      clientReference: null,
      status: agreement.status,
      validYY: 0,
      pubTermMM: 0,
      maxNoOfCopies: 0,
      minNoOfCopies: 0,
      estimatedCopyPrice: 0,
      graalShare: 0,
      copiesToOwner: 0,
      copiesToGraal: 0,
      graalRepresent: false,
      remarks: agreement.description || null,
      localTitle: agreement.title || null,
      localISBN: null,
      localPubDate: null,
      agrDoc: null,
      dateMod: agreement.updatedAt?.toISOString() || null,
      userMod: null,
      events: [],
      rights: [],
      royalties: []
    })
  } catch (err: any) {
    console.error('Error in GET /api/agreements/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
