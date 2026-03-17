import { NextResponse } from 'next/server'
import { deleteDictionaryRow, updateDictionaryRow } from '@/lib/dictionary-crud'

export async function PUT(req: Request, context: { params: Promise<{ dictionary: string; id: string }> }) {
  try {
    const { dictionary, id } = await context.params
    const payload = await req.json()
    const updated = await updateDictionaryRow(dictionary, id, payload)
    return NextResponse.json(updated)
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to update dictionary row' }, { status: 400 })
  }
}

export async function DELETE(_req: Request, context: { params: Promise<{ dictionary: string; id: string }> }) {
  try {
    const { dictionary, id } = await context.params
    await deleteDictionaryRow(dictionary, id)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to delete dictionary row' }, { status: 400 })
  }
}
