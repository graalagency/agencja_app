import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: {
        Client: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            city: true,
            postalCode: true,
            nip: true,
            regon: true
          }
        }
      }
    })

    if (!invoice) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({
      invoice: {
        id: invoice.id,
        fvNr: invoice.id,
        date: invoice.issueDate.toISOString(),
        fvDate: invoice.issueDate.toISOString(),
        payDate: invoice.paymentDate.toISOString(),
        paymentDate: invoice.paymentDate.toISOString(),
        custId: invoice.clientId,
        clientId: invoice.clientId,
        title: invoice.title,
        fvDescription: invoice.title,
        netAmt: invoice.net,
        net: invoice.net,
        vatPerc: invoice.vatPerc,
        vatAmt: invoice.vat,
        vat: invoice.vat,
        grossAmt: invoice.gross,
        gross: invoice.gross,
        status: invoice.status,
        client: invoice.Client
          ? {
              id: invoice.Client.id,
              name: invoice.Client.name,
              email: invoice.Client.email || null,
              phone: invoice.Client.phone || null,
              address: invoice.Client.address || null,
              city: invoice.Client.city || null,
              postalCode: invoice.Client.postalCode || null,
              nip: invoice.Client.nip || null,
              regon: invoice.Client.regon || null
            }
          : null,
        currency: 'PLN',
        fvCurrency: 'PLN',
        createdAt: invoice.createdAt.toISOString(),
        updatedAt: invoice.updatedAt.toISOString(),
        originalInvoice: null
      }
    })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body = await req.json()
    const data: any = { updatedAt: new Date() }

    if (body.status !== undefined) data.status = body.status
    if (body.title !== undefined) data.title = body.title
    if (body.fvDescription !== undefined) data.title = body.fvDescription
    if (body.payDate !== undefined) data.paymentDate = body.payDate ? new Date(body.payDate) : undefined

    const net = body.netAmt ?? body.net
    const vat = body.vatAmt ?? body.vat
    const gross = body.grossAmt ?? body.gross
    const vatPerc = body.vatPerc

    if (net !== undefined) data.net = Number(net)
    if (vat !== undefined) data.vat = Number(vat)
    if (vatPerc !== undefined) data.vatPerc = Number(vatPerc)
    if (gross !== undefined) data.gross = Number(gross)

    if (gross === undefined && (net !== undefined || vat !== undefined)) {
      const netValue = net !== undefined ? Number(net) : undefined
      const vatValue = vat !== undefined ? Number(vat) : undefined
      if (netValue !== undefined && vatValue !== undefined) {
        data.gross = netValue + vatValue
      }
    }

    const updated = await prisma.invoice.update({ where: { id }, data })
    return NextResponse.json({ fvNr: updated.id, status: updated.status })
  } catch (err: any) {
    console.error('Error in PATCH /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
