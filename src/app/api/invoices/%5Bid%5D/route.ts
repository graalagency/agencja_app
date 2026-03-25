import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import { z } from 'zod'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const UpdateInvoiceStatusSchema = z.object({
  status: z.string().optional().default('A'),
})

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const invNum = Number(idStr)
    if (!invNum) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const p = prisma as any
    const invoice = await p.tblInvoice.findUnique({ where: { InvNum: invNum } })
    if (!invoice) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({
      invoice: {
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
    })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const invNum = Number(idStr)
    if (!invNum) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body = await req.json()
    const validationResult = UpdateInvoiceStatusSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const validated = validationResult.data
    const p = prisma as any
    const updated = await p.tblInvoice.update({
      where: { InvNum: invNum },
      data: { Status: validated.status }
    })
    return NextResponse.json({ invNum: updated.InvNum, status: updated.Status })
  } catch (err: any) {
    console.error('Error in PATCH /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
