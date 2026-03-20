'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'

type Title = {
  id: number
  title: string
  isbn: string | null
  languageCode: string | null
  classCode: string | null
  edition: number | null
  pages: number | null
  copyrightYear: string | null
  isHit: boolean
  isCollection: boolean
  isCD: boolean
  authors: { id: number; name: string; isMain: boolean }[]
  owner: { id: number; name: string; type: 'client' | 'publisher' } | null
  clientId: number | null
  publisherId: number | null
  createdAt: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function TitlesPage() {
  const [titles, setTitles] = useState<Title[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 20, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id' | 'title' | 'isbn' | 'languageCode' | 'classCode' | 'createdAt'>('title')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [pageSize, setPageSize] = useState(20)

  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({
    title: '', isbn: '', languageCode: '', classCode: '', edition: '',
    pages: '', copyrightYear: '', copyrightOwner: '', keywords: '', notes: '',
    isHit: false, isCollection: false, isCD: false,
    clientId: '', publisherId: '',
  })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({ search, page: String(page), pageSize: String(pageSize), sortBy, sortOrder })
    const res = await fetch(`/api/titles?${qs}`)
    if (!res.ok) { setLoading(false); return }
    const data = await res.json()
    setTitles(Array.isArray(data?.data) ? data.data : [])
    setMeta(data?.meta ?? { page, pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc') }
  }

  const addTitle = async () => {
    if (!form.title.trim()) return
    await fetch('/api/titles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        edition: form.edition ? Number(form.edition) : null,
        pages: form.pages ? Number(form.pages) : null,
        clientId: form.clientId ? Number(form.clientId) : null,
        publisherId: form.publisherId ? Number(form.publisherId) : null,
      }),
    })
    setShowAdd(false)
    setForm({ title: '', isbn: '', languageCode: '', classCode: '', edition: '', pages: '', copyrightYear: '', copyrightOwner: '', keywords: '', notes: '', isHit: false, isCollection: false, isCD: false, clientId: '', publisherId: '' })
    await load(1)
  }

  const removeTitle = async (id: number) => {
    if (!confirm('Usunąć tytuł?')) return
    await fetch(`/api/titles/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const badges = (t: Title) => {
    const b = []
    if (t.isHit) b.push('Hit')
    if (t.isCollection) b.push('Kolekcja')
    if (t.isCD) b.push('CD')
    return b
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Tytuły</h1>
          <Button variant="primary" onClick={() => setShowAdd(true)}>+ Dodaj tytuł</Button>
        </div>
        <div className="max-w-md">
          <label className="label">Szukaj</label>
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tytuł / ISBN / słowa kluczowe" />
        </div>
      </Card>

      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">Ładowanie...</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={() => toggleSort('id')} active={sortBy === 'id'} order={sortOrder}>ID</Th>
                  <Th onClick={() => toggleSort('title')} active={sortBy === 'title'} order={sortOrder}>Tytuł</Th>
                  <Th onClick={() => toggleSort('isbn')} active={sortBy === 'isbn'} order={sortOrder}>ISBN</Th>
                  <Th>Autorzy</Th>
                  <Th onClick={() => toggleSort('languageCode')} active={sortBy === 'languageCode'} order={sortOrder}>Język</Th>
                  <Th onClick={() => toggleSort('classCode')} active={sortBy === 'classCode'} order={sortOrder}>Klasa</Th>
                  <Th>Właściciel praw</Th>
                  <Th>Cechy</Th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {titles.map(t => (
                  <tr key={t.id}>
                    <Td>{t.id}</Td>
                    <Td>
                      <Link href={`/titles/${t.id}`} className="text-primary-600 hover:underline font-medium">
                        {t.title}
                      </Link>
                      {t.edition ? <span className="ml-2 text-xs text-muted-foreground">wyd. {t.edition}</span> : null}
                    </Td>
                    <Td>{t.isbn ?? '—'}</Td>
                    <Td>
                      <div className="text-sm">
                        {t.authors.length === 0 ? '—' : t.authors.map(a => (
                          <Link key={a.id} href={`/authors/${a.id}`} className="block text-primary-600 hover:underline leading-snug">
                            {a.name}
                          </Link>
                        ))}
                      </div>
                    </Td>
                    <Td>{t.languageCode ?? '—'}</Td>
                    <Td>{t.classCode ?? '—'}</Td>
                    <Td>
                      {t.owner ? (
                        <Link
                          href={t.owner.type === 'client' ? `/customers/${t.owner.id}` : `/publishers/${t.owner.id}`}
                          className="text-primary-600 hover:underline text-sm"
                        >
                          {t.owner.name}
                        </Link>
                      ) : '—'}
                    </Td>
                    <Td>
                      <div className="flex gap-1 flex-wrap">
                        {badges(t).map(b => (
                          <span key={b} className="inline-block px-1.5 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{b}</span>
                        ))}
                      </div>
                    </Td>
                    <Td>
                      <div className="flex gap-2">
                        <Link href={`/titles/${t.id}`}>
                          <Button>Szczegóły</Button>
                        </Link>
                        <Button onClick={() => removeTitle(t.id)}>Usuń</Button>
                      </div>
                    </Td>
                  </tr>
                ))}
                {titles.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-muted-foreground">Brak tytułów</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Pagination page={meta.page} pages={meta.pages} onPage={p => load(p)} />
              <div className="flex items-center gap-2 md:justify-end">
                <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">Wierszy na stronę:</label>
                <select
                  className="flex h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={String(pageSize)}
                  onChange={e => setPageSize(Number(e.target.value))}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </Card>

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Dodaj tytuł</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:col-span-2">
                <label className="label">Tytuł *</label>
                <Input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
              </div>
              <div>
                <label className="label">ISBN</label>
                <Input value={form.isbn} onChange={e => setForm(p => ({ ...p, isbn: e.target.value }))} />
              </div>
              <div>
                <label className="label">Język (kod)</label>
                <Input value={form.languageCode} onChange={e => setForm(p => ({ ...p, languageCode: e.target.value }))} placeholder="np. PL, EN" />
              </div>
              <div>
                <label className="label">Klasa tematyczna</label>
                <Input value={form.classCode} onChange={e => setForm(p => ({ ...p, classCode: e.target.value }))} />
              </div>
              <div>
                <label className="label">Wydanie</label>
                <Input type="number" value={form.edition} onChange={e => setForm(p => ({ ...p, edition: e.target.value }))} />
              </div>
              <div>
                <label className="label">Liczba stron</label>
                <Input type="number" value={form.pages} onChange={e => setForm(p => ({ ...p, pages: e.target.value }))} />
              </div>
              <div>
                <label className="label">Rok prawa autorskiego</label>
                <Input value={form.copyrightYear} onChange={e => setForm(p => ({ ...p, copyrightYear: e.target.value }))} placeholder="np. 2023" />
              </div>
              <div>
                <label className="label">Właściciel praw (opis)</label>
                <Input value={form.copyrightOwner} onChange={e => setForm(p => ({ ...p, copyrightOwner: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Słowa kluczowe</label>
                <Input value={form.keywords} onChange={e => setForm(p => ({ ...p, keywords: e.target.value }))} />
              </div>
              <div>
                <label className="label">ID kontrahenta (clientId)</label>
                <Input type="number" value={form.clientId} onChange={e => setForm(p => ({ ...p, clientId: e.target.value }))} />
              </div>
              <div>
                <label className="label">ID wydawcy (publisherId)</label>
                <Input type="number" value={form.publisherId} onChange={e => setForm(p => ({ ...p, publisherId: e.target.value }))} />
              </div>
              <div className="md:col-span-2 flex gap-6 pt-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.isHit} onChange={e => setForm(p => ({ ...p, isHit: e.target.checked }))} />
                  Hit
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.isCollection} onChange={e => setForm(p => ({ ...p, isCollection: e.target.checked }))} />
                  Kolekcja
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.isCD} onChange={e => setForm(p => ({ ...p, isCD: e.target.checked }))} />
                  CD
                </label>
              </div>
              <div className="md:col-span-2">
                <label className="label">Notatki</label>
                <Input value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => setShowAdd(false)}>Anuluj</Button>
              <Button variant="primary" onClick={addTitle}>Dodaj</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
