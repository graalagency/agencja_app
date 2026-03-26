'use client'
import { useEffect, useState } from 'react'
import { useSearchMemory } from '../../../hooks/useSearchMemory'
import { RememberCheckbox } from '../../../components/ui/RememberCheckbox'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'

type Author = { 
  id: number
  fullName?: string | null
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  suffix?: string | null
  penName?: string | null
  remarks?: string | null
  userMod?: string
  dateMod?: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function AuthorsPage() {
  const t = useTranslations('authors')
  const tCommon = useTranslations('common')
  const [authors, setAuthors] = useState<Author[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const { remember, setRemember, initialCriteria, save } = useSearchMemory('authors', {
    search: '', sortBy: 'id', sortOrder: 'asc', pageSize: 10,
  })
  const [search, setSearch]       = useState(initialCriteria.search as string)
  const [sortBy, setSortBy]       = useState<'id'|'firstName'|'lastName'|'fullName'|'penName'|'dateMod'>(initialCriteria.sortBy as any)
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(initialCriteria.sortOrder as any)
  const [pageSize, setPageSize]   = useState(Number(initialCriteria.pageSize))

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  const [showAddModal, setShowAddModal] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({
    fullName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    penName: '',
    remarks: '',
  })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const res = await fetch(`/api/authors?${qs.toString()}`)
    if (!res.ok) {
      setAuthors([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }
    const data = await res.json()
    
    if (Array.isArray(data)) {
      setAuthors(data)
      const total = data.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(data?.data) ? data.data : []
      setAuthors(arr)
      const metaFromServer = data?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  useEffect(() => { save({ search, sortBy, sortOrder, pageSize }) }, [search, sortBy, sortOrder, pageSize])

  const addAuthor = async () => {
    if (!form.firstName || !form.lastName) {
      setFormErrors([t('firstLastNameRequired')])
      return
    }
    setFormErrors([])
    await fetch('/api/authors', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(form) 
    })
    setForm({ 
      fullName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: '',
      penName: '',
      remarks: '',
    })
    setShowAddModal(false)
    await load(1)
  }



  const removeAuthor = async (id: number) => {
    if (!confirm(t('confirmDelete'))) return
    await fetch(`/api/authors/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('listTitle')}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t('total')} <strong>{meta.total.toLocaleString('pl-PL')}</strong>
          </span>
          <Button size="sm" onClick={() => {
            setShowAddModal(true);
            setFormErrors([]);
            setForm({
              fullName: '',
              firstName: '',
              middleName: '',
              lastName: '',
              suffix: '',
              penName: '',
              remarks: '',
            });
          }}>
            {t('createAuthor')}
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="space-y-3">
          {/* Search row */}
          <div>
            <label className="label text-xs">{tCommon('search')}</label>
            <Input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t('firstName')} />
          </div>
          {/* Actions row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setSearch('')} className="h-8 text-xs">{t('clearFilters')}</Button>
              <RememberCheckbox checked={remember} onChange={setRemember} />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{tCommon('perPage')}</span>
              <select
                value={pageSize}
                onChange={e => handlePageSizeChange(Number(e.target.value))}
                className="h-8 rounded border border-input bg-transparent px-2 text-xs"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-0 overflow-hidden">
        {loading ? (
          <p className="p-8 text-center text-muted-foreground">{tCommon('loading')}</p>
        ) : authors.length === 0 ? (
          <p className="p-8 text-center text-muted-foreground">{t('noRecords')}</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('fullName')} active={sortBy==='fullName'} order={sortOrder}>{t('fullName')}</Th>
                  <Th onClick={()=>toggleSort('penName')} active={sortBy==='penName'} order={sortOrder}>{t('penName')}</Th>
                  <Th onClick={()=>toggleSort('dateMod')} active={sortBy==='dateMod'} order={sortOrder}>{tCommon('dateModified')}</Th>
                  <Th>{tCommon('actions')}</Th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(authors) ? authors : []).map(a => (
                  <tr key={a.id} className="hover:bg-muted/40 transition-colors">
                    <Td className="font-mono text-xs text-muted-foreground">{a.id}</Td>
                    <Td>
                      <Link className="text-primary hover:underline font-medium" href={`/authors/${a.id}`}>
                        {a.fullName ?? '-'}
                      </Link>
                    </Td>
                    <Td>{a.penName ?? '-'}</Td>
                    <Td>{a.dateMod ? new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(a.dateMod)) : '-'}</Td>
                    <Td>
                      <Button variant="destructive" size="sm" onClick={() => removeAuthor(a.id)}>{tCommon('delete')}</Button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {meta.pages > 1 && (
          <div className="border-t border-border px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {t('page')} {meta.page} {tCommon('of')} {meta.pages} ({meta.total.toLocaleString('pl-PL')} {t('records')})
            </span>
            <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>load(p)} />
          </div>
        )}
      </Card>

      {/* Add author modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('createAuthor')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('firstName')}</label>
                <Input value={form.firstName} onChange={e=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('middleName')}</label>
                <Input value={form.middleName} onChange={e=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('lastName')}</label>
                <Input value={form.lastName} onChange={e=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{tCommon('suffix')}</label>
                <Input value={form.suffix} onChange={e=>setForm(prev=>({ ...prev, suffix: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('fullName')}</label>
                <Input value={form.fullName} onChange={e=>setForm(prev=>({ ...prev, fullName: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('penName')}</label>
                <Input value={form.penName} onChange={e=>setForm(prev=>({ ...prev, penName: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('remarks')}</label>
                <Input value={form.remarks} onChange={e=>setForm(prev=>({ ...prev, remarks: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); }}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={addAuthor}>{t('createAuthor')}</Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
