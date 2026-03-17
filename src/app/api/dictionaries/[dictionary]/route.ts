import { NextResponse } from 'next/server'
import { createDictionaryRow, listDictionaryRows } from '@/lib/dictionary-crud'

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
    return NextResponse.json({ error: error?.message || 'Failed to load dictionary rows' }, { status: 400 })
  }
}

export async function POST(req: Request, context: { params: Promise<{ dictionary: string }> }) {
  try {
    const { dictionary } = await context.params
    const payload = await req.json()
    const created = await createDictionaryRow(dictionary, payload)
    return NextResponse.json(created, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to create dictionary row' }, { status: 400 })
  }
}
