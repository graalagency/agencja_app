import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { requireModuleAccess } from '../../../../../lib/api-permissions'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'authors')
  if (auth.error) return auth.error

  try {
    const authorId = Number(params.id)

    // Find all titles for this author
    const titles = await prisma.title.findMany({
      where: {
        TitleAuthors: {
          some: { authorId }
        }
      },
      select: {
        id: true,
        title: true,
        isbn: true,
        languageCode: true,
        edition: true,
        copyrightYear: true,
        pages: true,
        TitleAuthors: {
          where: { authorId },
          select: { isMain: true, order: true }
        },
        _count: {
          select: { Agreements: true }
        }
      },
      orderBy: { title: 'asc' }
    })

    const formatted = titles.map(t => ({
      id: t.id,
      title: t.title,
      isbn: t.isbn,
      languageCode: t.languageCode,
      edition: t.edition,
      copyrightYear: t.copyrightYear,
      pages: t.pages,
      isMain: t.TitleAuthors[0]?.isMain ?? false,
      order: t.TitleAuthors[0]?.order ?? 1,
      agreementCount: t._count.Agreements
    }))

    return NextResponse.json(formatted)
  } catch (err: any) {
    console.error('GET /api/authors/[id]/titles error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
