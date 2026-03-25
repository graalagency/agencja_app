import { NextResponse } from 'next/server'
import { createDictionaryRow, listDictionaryRows } from '@/lib/dictionary-crud'
import { requireModuleAccess } from '@/lib/api-permissions'

export async function GET(req: Request, context: { params: Promise<{ dictionary: string }> }) {
  try {
    const { dictionary } = await context.params
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page') || 1)
    const pageSize = Number(searchParams.get('pageSize') || 20)
    const search = searchParams.get('search') || ''

    const data = await listDictionaryRows(dictionary, { page, pageSize, search })
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('GET /api/dictionaries/[dictionary] error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to load dictionary rows' }, { status: 500 })
  }
}

export async function POST(req: Request, context: { params: Promise<{ dictionary: string }> }) {
  const auth = await requireModuleAccess(req, 'dictionaries')
  if (auth.error) return auth.error

  try {
    const { dictionary } = await context.params
    const payload = await req.json()
    const created = await createDictionaryRow(dictionary, payload)
    return NextResponse.json(created, { status: 201 })
  } catch (error: any) {
    console.error('POST /api/dictionaries/[dictionary] error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to create dictionary row' }, { status: 500 })
  }
}
