import { NextResponse } from 'next/server'
import { deleteDictionaryRow, updateDictionaryRow } from '@/lib/dictionary-crud'
import { requireModuleAccess } from '@/lib/api-permissions'

export async function PUT(req: Request, context: { params: Promise<{ dictionary: string; id: string }> }) {
  const auth = await requireModuleAccess(req, 'dictionaries')
  if (auth.error) return auth.error

  try {
    const { dictionary, id } = await context.params
    const payload = await req.json()
    const updated = await updateDictionaryRow(dictionary, id, payload)
    return NextResponse.json(updated)
  } catch (error: any) {
    console.error('PUT /api/dictionaries/[dictionary]/[id] error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to update dictionary row' }, { status: 500 })
  }
}

export async function DELETE(req: Request, context: { params: Promise<{ dictionary: string; id: string }> }) {
  const auth = await requireModuleAccess(req, 'dictionaries')
  if (auth.error) return auth.error

  try {
    const { dictionary, id } = await context.params
    await deleteDictionaryRow(dictionary, id)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('DELETE /api/dictionaries/[dictionary]/[id] error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to delete dictionary row' }, { status: 500 })
  }
}
