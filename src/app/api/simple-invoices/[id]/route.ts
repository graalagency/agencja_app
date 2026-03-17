import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: { Client: { select: { id: true, name: true, email: true, phone: true } } }
    })

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
    }

    return NextResponse.json({
      id: invoice.id,
      invNum: invoice.id,
      invType: 'FV',
      invDate: invoice.issueDate.toISOString(),
      billToId: invoice.clientId,
      clientId: invoice.clientId,
      clientName: invoice.Client?.name ?? null,
      clientEmail: invoice.Client?.email ?? null,
      clientPhone: invoice.Client?.phone ?? null,
      shipToId: null,
      currId: 'PLN',
      totalInvNET: invoice.net,
      vatPerc: invoice.vatPerc,
      termDD: 0,
      remarks: '',
      status: invoice.status,
      sumInWords: '',
      balance: invoice.gross,
      cliRef: '',
      descr: invoice.title,
      dateDue: invoice.paymentDate.toISOString(),
      userName: '',
      agentID: null,
      taxCode: '',
      taxValue: invoice.vat,
      taxInfo: '',
      propID: null
    })
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const body = await req.json()
    const data: any = { updatedAt: new Date() }

    if (body.status !== undefined) data.status = body.status
    if (body.descr !== undefined) data.title = body.descr
    if (body.title !== undefined) data.title = body.title
    if (body.totalInvNET !== undefined) data.net = Number(body.totalInvNET)
    if (body.vatPerc !== undefined) data.vatPerc = Number(body.vatPerc)
    if (body.taxValue !== undefined) data.vat = Number(body.taxValue)
    if (body.balance !== undefined) data.gross = Number(body.balance)
    if (body.dateDue !== undefined) data.paymentDate = body.dateDue ? new Date(body.dateDue) : undefined

    if (data.net !== undefined && data.vat !== undefined && data.gross === undefined) {
      data.gross = data.net + data.vat
    }

    const invoice = await prisma.invoice.update({
      where: { id },
      data
    })

    return NextResponse.json({ id: invoice.id, invNum: invoice.id })
  } catch (err: any) {
    console.error('Error in PATCH /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    await prisma.invoice.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error in DELETE /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
