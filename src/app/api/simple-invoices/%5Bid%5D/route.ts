import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { z } from 'zod'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateSimpleInvoiceSchema = z.object({
  status: z.string().optional(),
  remarks: z.string().optional(),
  descr: z.string().optional(),
  totalInvNET: z.number().optional(),
  vatPerc: z.number().optional(),
  taxValue: z.number().optional(),
  balance: z.number().optional(),
  dateDue: z.string().optional().nullable(),
  currId: z.string().optional(),
  termDD: z.number().optional(),
})

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const invNum = Number(params.id)
    if (isNaN(invNum)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const p = prisma as any
    const invoice = await p.tblInvoice.findUnique({
      where: { InvNum: invNum }
    })

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
    }

    const data = {
      invNum: invoice.InvNum,
      invType: invoice.InvType || '',
      invDate: invoice.InvDate?.toISOString() || null,
      billToId: invoice.BillToId,
      clientId: invoice.ClientId,
      shipToId: invoice.ShipToId,
      currId: invoice.CurrId || null,
      totalInvNET: invoice.TotalInvNET ?? 0,
      vatPerc: invoice.VATPerc ?? 0,
      termDD: invoice.TermDD ?? 0,
      remarks: invoice.Remarks || '',
      status: invoice.Status || '',
      sumInWords: invoice.SumInWords || '',
      balance: invoice.Balance ?? 0,
      cliRef: invoice.CliRef || '',
      descr: invoice.Descr || '',
      dateDue: invoice.DateDue?.toISOString() || null,
      userName: invoice.UserName || '',
      agentID: invoice.AgentID,
      taxCode: invoice.TaxCode || '',
      taxValue: invoice.TaxValue ?? 0,
      taxInfo: invoice.TaxInfo || '',
      propID: invoice.PropID
    }

    return NextResponse.json(data)
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const invNum = Number(params.id)
    if (isNaN(invNum)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const body = await req.json()
    const validationResult = UpdateSimpleInvoiceSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const updateData: any = {}

    if (validated.status !== undefined) updateData.Status = validated.status
    if (validated.remarks !== undefined) updateData.Remarks = validated.remarks
    if (validated.descr !== undefined) updateData.Descr = validated.descr
    if (validated.totalInvNET !== undefined) updateData.TotalInvNET = validated.totalInvNET
    if (validated.vatPerc !== undefined) updateData.VATPerc = validated.vatPerc
    if (validated.taxValue !== undefined) updateData.TaxValue = validated.taxValue
    if (validated.balance !== undefined) updateData.Balance = validated.balance
    if (validated.dateDue !== undefined) updateData.DateDue = validated.dateDue ? new Date(validated.dateDue) : null
    if (validated.currId !== undefined) updateData.CurrId = validated.currId
    if (validated.termDD !== undefined) updateData.TermDD = validated.termDD

    const p = prisma as any
    const invoice = await p.tblInvoice.update({
      where: { InvNum: invNum },
      data: updateData
    })

    return NextResponse.json({ invNum: invoice.InvNum })
  } catch (err: any) {
    console.error('Error in PATCH /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const invNum = Number(params.id)
    if (isNaN(invNum)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const p = prisma as any
    await p.tblInvoice.delete({ where: { InvNum: invNum } })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error in DELETE /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
