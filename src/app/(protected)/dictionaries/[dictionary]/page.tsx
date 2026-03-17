'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type ColumnMeta = {
  name: string
  dataType: string
  isNullable: boolean
  defaultValue: string | null
  isAuto: boolean
}

type DictionaryResponse = {
  dictionary: {
    key: string
    table: string
    label: string
  }
  columns: ColumnMeta[]
  primaryKey: string
  rows: Array<Record<string, unknown>>
  meta: {
    page: number
    pageSize: number
    total: number
    pages: number
  }
}

function normalizeValue(value: unknown): string | boolean {
  if (typeof value === 'boolean') return value
  if (value === null || value === undefined) return ''
  return String(value)
}

export default function DictionaryCrudPage() {
  const params = useParams<{ dictionary: string }>()
  const dictionary = params?.dictionary || ''

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [data, setData] = useState<DictionaryResponse | null>(null)
  const [page, setPage] = useState(1)

  const [createMode, setCreateMode] = useState(false)
  const [createForm, setCreateForm] = useState<Record<string, string | boolean>>({})
  const [editingRow, setEditingRow] = useState<Record<string, unknown> | null>(null)
  const [editForm, setEditForm] = useState<Record<string, string | boolean>>({})

  const load = async (nextPage = page) => {
    if (!dictionary) return
    setLoading(true)
    setError(null)

    const qs = new URLSearchParams({
      page: String(nextPage),
      pageSize: '20',
      search,
    })

    const response = await fetch(`/api/dictionaries/${dictionary}?${qs.toString()}`)
    if (!response.ok) {
      const payload = await response.json().catch(() => ({ error: 'Nie udalo sie pobrac danych slownika' }))
      setError(payload.error || 'Nie udalo sie pobrac danych slownika')
      setLoading(false)
      return
    }

    const json: DictionaryResponse = await response.json()
    setData(json)
    setPage(nextPage)
    setLoading(false)
  }

  useEffect(() => {
    load(1)
  }, [dictionary, search])

  const editableColumns = useMemo(() => {
    if (!data) return [] as ColumnMeta[]
    return data.columns.filter((column) => !column.isAuto)
  }, [data])

  const startCreate = () => {
    if (!data) return
    const next: Record<string, string | boolean> = {}
    for (const column of editableColumns) {
      next[column.name] = column.dataType === 'boolean' ? false : ''
    }
    setCreateForm(next)
    setCreateMode(true)
  }

  const startEdit = (row: Record<string, unknown>) => {
    if (!data) return
    const next: Record<string, string | boolean> = {}
    for (const column of editableColumns) {
      next[column.name] = normalizeValue(row[column.name])
    }
    setEditingRow(row)
    setEditForm(next)
  }

  const submitCreate = async () => {
    if (!data) return

    const response = await fetch(`/api/dictionaries/${dictionary}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createForm),
    })

    if (!response.ok) {
      const payload = await response.json().catch(() => ({ error: 'Nie udalo sie dodac rekordu' }))
      alert(payload.error || 'Nie udalo sie dodac rekordu')
      return
    }

    setCreateMode(false)
    await load(1)
  }

  const submitEdit = async () => {
    if (!data || !editingRow) return
    const id = editingRow[data.primaryKey]

    const response = await fetch(`/api/dictionaries/${dictionary}/${encodeURIComponent(String(id))}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm),
    })

    if (!response.ok) {
      const payload = await response.json().catch(() => ({ error: 'Nie udalo sie zapisac zmian' }))
      alert(payload.error || 'Nie udalo sie zapisac zmian')
      return
    }

    setEditingRow(null)
    await load(page)
  }

  const removeRow = async (row: Record<string, unknown>) => {
    if (!data) return
    const id = row[data.primaryKey]
    if (!confirm(`Usunac rekord ${String(id)}?`)) return

    const response = await fetch(`/api/dictionaries/${dictionary}/${encodeURIComponent(String(id))}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      const payload = await response.json().catch(() => ({ error: 'Nie udalo sie usunac rekordu' }))
      alert(payload.error || 'Nie udalo sie usunac rekordu')
      return
    }

    await load(page)
  }

  const renderInput = (
    column: ColumnMeta,
    form: Record<string, string | boolean>,
    setForm: React.Dispatch<React.SetStateAction<Record<string, string | boolean>>>
  ) => {
    if (column.dataType === 'boolean') {
      return (
        <label key={column.name} className="flex items-center gap-2 rounded-md border p-2 text-sm">
          <input
            type="checkbox"
            checked={Boolean(form[column.name])}
            onChange={(event) => setForm((prev) => ({ ...prev, [column.name]: event.target.checked }))}
          />
          <span>{column.name}</span>
        </label>
      )
    }

    return (
      <div key={column.name} className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">{column.name}</label>
        <Input
          value={String(form[column.name] ?? '')}
          onChange={(event) => setForm((prev) => ({ ...prev, [column.name]: event.target.value }))}
          placeholder={column.dataType}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/dictionaries" className="text-sm text-primary hover:underline">Wroc do centrum slownikow</Link>
            <h1 className="text-2xl font-bold mt-1">{data?.dictionary.label || 'Slownik'}</h1>
            {data && <p className="text-xs text-muted-foreground">Tabela: {data.dictionary.table}</p>}
          </div>
          <Button onClick={startCreate}>Dodaj rekord</Button>
        </div>

        <div className="max-w-md">
          <label className="text-sm font-medium text-muted-foreground">Szukaj</label>
          <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Szukaj po kolumnach tekstowych" />
        </div>
      </Card>

      {createMode && data && (
        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Nowy rekord</h2>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {editableColumns.map((column) => renderInput(column, createForm, setCreateForm))}
          </div>
          <div className="flex gap-2">
            <Button onClick={submitCreate}>Zapisz</Button>
            <Button variant="outline" onClick={() => setCreateMode(false)}>Anuluj</Button>
          </div>
        </Card>
      )}

      {editingRow && data && (
        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Edycja rekordu {String(editingRow[data.primaryKey])}</h2>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {editableColumns.map((column) => renderInput(column, editForm, setEditForm))}
          </div>
          <div className="flex gap-2">
            <Button onClick={submitEdit}>Zapisz zmiany</Button>
            <Button variant="outline" onClick={() => setEditingRow(null)}>Anuluj</Button>
          </div>
        </Card>
      )}

      <Card className="p-6">
        {error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : loading ? (
          <p className="text-sm text-muted-foreground">Ladowanie...</p>
        ) : data ? (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-md border">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    {data.columns.map((column) => (
                      <th key={column.name} className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                        {column.name}
                      </th>
                    ))}
                    <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row) => {
                    const rowId = String(row[data.primaryKey])
                    return (
                      <tr key={rowId} className="border-t">
                        {data.columns.map((column) => {
                          const value = row[column.name]
                          return (
                            <td key={`${rowId}-${column.name}`} className="px-3 py-2 whitespace-nowrap align-top">
                              {value === null || value === undefined
                                ? '-'
                                : typeof value === 'object'
                                  ? JSON.stringify(value)
                                  : String(value)}
                            </td>
                          )
                        })}
                        <td className="px-3 py-2 whitespace-nowrap align-top">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => startEdit(row)}>Edytuj</Button>
                            <Button size="sm" variant="destructive" onClick={() => removeRow(row)}>Usun</Button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Strona {data.meta.page} z {data.meta.pages} ({data.meta.total} rekordow)
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  disabled={data.meta.page <= 1}
                  onClick={() => load(data.meta.page - 1)}
                >
                  Poprzednia
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  disabled={data.meta.page >= data.meta.pages}
                  onClick={() => load(data.meta.page + 1)}
                >
                  Nastepna
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  )
}
