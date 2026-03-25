'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useSearchMemory } from '../../../hooks/useSearchMemory'
import { RememberCheckbox } from '../../../components/ui/RememberCheckbox'
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
  return <Suspense><TitlesPageInner /></Suspense>
}

function TitlesPageInner() {
  const router = useRouter()
  const t = useTranslations()
  const params = useSearchParams()

  const { remember, setRemember, initialCriteria, save } = useSearchMemory('titles', {
    search: '', sortBy: 'title', sortOrder: 'asc', pageSize: 20,
  })

  const [titles, setTitles] = useState<Title[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 20, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  // URL params mają priorytet; fallback do localStorage (jeśli remember=true)
  const [search, setSearch] = useState(() => params.get('search') ?? (initialCriteria.search as string))
  const [sortBy, setSortBy] = useState<'id' | 'title' | 'isbn' | 'languageCode' | 'classCode' | 'createdAt'>(
    () => (params.get('sortBy') as any) ?? initialCriteria.sortBy
  )
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(() => (params.get('sortOrder') as any) ?? initialCriteria.sortOrder)
  const [pageSize, setPageSize] = useState(() => Number(params.get('pageSize') ?? initialCriteria.pageSize))
  const [page, setPage] = useState(() => Number(params.get('page') ?? 1))

  const isFirstRender = useRef(true)

  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({
    title: '', isbn: '', languageCode: '', classCode: '', edition: '',
    pages: '', copyrightYear: '', copyrightOwner: '', keywords: '', notes: '',
    isHit: false, isCollection: false, isCD: false,
    clientId: '', publisherId: '',
  })

  // Synchronizuj URL z aktualnym stanem
  const pushParams = (overrides: Record<string, string> = {}) => {
    const qs = new URLSearchParams({
      search, sortBy, sortOrder,
      page: String(page), pageSize: String(pageSize),
      ...overrides,
    })
    router.replace(`?${qs}`, { scroll: false })
  }

  const load = async (p = page) => {
    setLoading(true)
    const qs = new URLSearchParams({ search, page: String(p), pageSize: String(pageSize), sortBy, sortOrder })
    const res = await fetch(`/api/titles?${qs}`)
    if (!res.ok) { setLoading(false); return }
    const data = await res.json()
    setTitles(Array.isArray(data?.data) ? data.data : [])
    setMeta(data?.meta ?? { page: p, pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(() => {
    save({ search, sortBy, sortOrder, pageSize })
    if (isFirstRender.current) { isFirstRender.current = false; load(page); return }
    setPage(1)
    pushParams({ page: '1' })
    load(1)
  }, [search, sortBy, sortOrder, pageSize])

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
    if (!confirm(t('titlesPage.confirmDelete'))) return
    await fetch(`/api/titles/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const badges = (title: Title) => {
    const b = []
    if (title.isHit) b.push('Hit')
    if (title.isCollection) b.push(t('titlesPage.badgeCollection'))
    if (title.isCD) b.push('CD')
    return b
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('common.title')}</h1>
          <Button variant="primary" onClick={() => setShowAdd(true)}>{t('titlesPage.newTitle')}</Button>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-between mb-1">
            <label className="label">{t('titlesPage.search')}</label>
            <RememberCheckbox checked={remember} onChange={setRemember} />
          </div>
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder={t('titlesPage.searchHint')} />
          <p className="mt-1.5 text-xs text-muted-foreground">
            {t('titlesPage.searchHelp')}
            <br />
            <code className="font-mono">"fraza"</code> — {t('titlesPage.searchExact')}{' '}
            <code className="font-mono">"fraza</code> — {t('titlesPage.searchStartsWith')}
          </p>
        </div>
      </Card>

      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">{t('titlesPage.loading')}</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={() => toggleSort('id')} active={sortBy === 'id'} order={sortOrder}>ID</Th>
                  <Th onClick={() => toggleSort('title')} active={sortBy === 'title'} order={sortOrder}>{t('titlesPage.columnTitle')}</Th>
                  <Th onClick={() => toggleSort('isbn')} active={sortBy === 'isbn'} order={sortOrder}>ISBN</Th>
                  <Th>{t('titlesPage.columnAuthors')}</Th>
                  <Th onClick={() => toggleSort('languageCode')} active={sortBy === 'languageCode'} order={sortOrder}>{t('titlesPage.columnLanguage')}</Th>
                  <Th onClick={() => toggleSort('classCode')} active={sortBy === 'classCode'} order={sortOrder}>{t('titlesPage.columnClass')}</Th>
                  <Th>{t('titlesPage.columnOwner')}</Th>
                  <Th>{t('titlesPage.columnFeatures')}</Th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {titles.map(title => (
                  <tr key={title.id}>
                    <Td>{title.id}</Td>
                    <Td>
                      <Link href={`/titles/${title.id}`} className="text-primary-600 hover:underline font-medium">
                        {title.title}
                      </Link>
                      {title.edition ? <span className="ml-2 text-xs text-muted-foreground">{t('titlesPage.editionLabel')} {title.edition}</span> : null}
                    </Td>
                    <Td>{title.isbn ?? '—'}</Td>
                    <Td>
                      <div className="text-sm">
                        {title.authors.length === 0 ? '—' : title.authors.map(a => (
                          <Link key={a.id} href={`/authors/${a.id}`} className="block text-primary-600 hover:underline leading-snug">
                            {a.name}
                          </Link>
                        ))}
                      </div>
                    </Td>
                    <Td>{title.languageCode ?? '—'}</Td>
                    <Td>{title.classCode ?? '—'}</Td>
                    <Td>
                      {title.owner ? (
                        <Link
                          href={title.owner.type === 'client' ? `/customers/${title.owner.id}` : `/publishers/${title.owner.id}`}
                          className="text-primary-600 hover:underline text-sm"
                        >
                          {title.owner.name}
                        </Link>
                      ) : '—'}
                    </Td>
                    <Td>
                      <div className="flex gap-1 flex-wrap">
                        {badges(title).map(b => (
                          <span key={b} className="inline-block px-1.5 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{b}</span>
                        ))}
                      </div>
                    </Td>
                    <Td>
                      <div className="flex gap-2">
                        <Link href={`/titles/${title.id}`}>
                          <Button>{t('titlesPage.details')}</Button>
                        </Link>
                        <Button onClick={() => removeTitle(title.id)}>{t('titlesPage.delete')}</Button>
                      </div>
                    </Td>
                  </tr>
                ))}
                {titles.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-muted-foreground">{t('titlesPage.noTitles')}</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Pagination page={meta.page} pages={meta.pages} onPage={p => { setPage(p); pushParams({ page: String(p) }); load(p) }} />
              <div className="flex items-center gap-2 md:justify-end">
                <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">{t('titlesPage.rowsPerPage')}</label>
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
            <h3 className="text-lg font-semibold mb-4">{t('titlesPage.addTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:col-span-2">
                <label className="label">{t('titlesPage.titleLabel')}</label>
                <Input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.isbnLabel')}</label>
                <Input value={form.isbn} onChange={e => setForm(p => ({ ...p, isbn: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.languageLabel')}</label>
                <Input value={form.languageCode} onChange={e => setForm(p => ({ ...p, languageCode: e.target.value }))} placeholder={t('titlesPage.languageHint')} />
              </div>
              <div>
                <label className="label">{t('titlesPage.classLabel')}</label>
                <Input value={form.classCode} onChange={e => setForm(p => ({ ...p, classCode: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.editionLabel')}</label>
                <Input type="number" value={form.edition} onChange={e => setForm(p => ({ ...p, edition: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.pagesLabel')}</label>
                <Input type="number" value={form.pages} onChange={e => setForm(p => ({ ...p, pages: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.copyrightYearLabel')}</label>
                <Input value={form.copyrightYear} onChange={e => setForm(p => ({ ...p, copyrightYear: e.target.value }))} placeholder={t('titlesPage.copyrightYearHint')} />
              </div>
              <div>
                <label className="label">{t('titlesPage.copyrightOwnerLabel')}</label>
                <Input value={form.copyrightOwner} onChange={e => setForm(p => ({ ...p, copyrightOwner: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('titlesPage.keywordsLabel')}</label>
                <Input value={form.keywords} onChange={e => setForm(p => ({ ...p, keywords: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.clientIdLabel')}</label>
                <Input type="number" value={form.clientId} onChange={e => setForm(p => ({ ...p, clientId: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('titlesPage.publisherIdLabel')}</label>
                <Input type="number" value={form.publisherId} onChange={e => setForm(p => ({ ...p, publisherId: e.target.value }))} />
              </div>
              <div className="md:col-span-2 flex gap-6 pt-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.isHit} onChange={e => setForm(p => ({ ...p, isHit: e.target.checked }))} />
                  {t('titlesPage.isHitLabel')}
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.isCollection} onChange={e => setForm(p => ({ ...p, isCollection: e.target.checked }))} />
                  {t('titlesPage.isCollectionLabel')}
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.isCD} onChange={e => setForm(p => ({ ...p, isCD: e.target.checked }))} />
                  {t('titlesPage.isCDLabel')}
                </label>
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('titlesPage.notesLabel')}</label>
                <Input value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => setShowAdd(false)}>{t('titlesPage.cancel')}</Button>
              <Button variant="primary" onClick={addTitle}>{t('titlesPage.add')}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
