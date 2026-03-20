import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/tax-certs/[id]/file — pobierz plik PDF certyfikatu
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const cert = await prisma.taxResidenceCert.findUnique({
    where: { id },
    select: { fileData: true, fileName: true },
  })

  if (!cert || !cert.fileData) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  const fileName = cert.fileName ?? `cert_${id}.pdf`
  return new NextResponse(cert.fileData as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    },
  })
}
