'use client'

import { useEffect, useState } from 'react'
import { useSearchMemory } from '../../../hooks/useSearchMemory'
import { useDeleteConfirmation } from '../../../hooks/useDeleteConfirmation'
import { RememberCheckbox } from '../../../components/ui/RememberCheckbox'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { ClientCreateSchema, ClientUpdateSchema } from '../../../validation/client'
import { useTranslations } from 'next-intl'

type Publisher = {
  id: number
  abbreviation?: string | null
  name?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  postalCode?: string | null
  country?: string | null
  nip?: string | null
  regon?: string | null
  legalForm?: string | null
  bankAccount?: string | null
  notes?: string | null
  createdAt?: string | null
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function PublishersPage() {
  const t = useTranslations()
  const { openDeleteConfirmation } = useDeleteConfirmation()
  const [publishers, setPublishers] = useState<Publisher[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const { remember, setRemember, initialCriteria, save } = useSearchMemory('publishers', {
    search: '', sortBy: 'id', sortOrder: 'asc', pageSize: 10,
  })
  const [search, setSearch]       = useState(initialCriteria.search as string)
  const [sortBy, setSortBy]       = useState<'id'|'name'|'email'|'phone'|'createdAt'>(initialCriteria.sortBy as any)
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(initialCriteria.sortOrder as any)
  const [pageSize, setPageSize]   = useState(Number(initialCriteria.pageSize))

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingPublisher, setEditingPublisher] = useState<Publisher | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [lookupLoading, setLookupLoading] = useState(false)
  const [lookupMessage, setLookupMessage] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    nip: '',
    regon: '',
    legalForm: '',
    bankAccount: '',
    notes: '',
  })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder,
    })

    const res = await fetch(`/api/publishers?${qs.toString()}`)
    if (!res.ok) {
      setPublishers([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }

    const data = await res.json()
    const arr = Array.isArray(data?.data) ? data.data : []
    setPublishers(arr)

    const metaFromServer = data?.meta
    const total = metaFromServer?.total ?? arr.length
    const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
    setMeta(metaFromServer ?? { page, pageSize, total, pages })
    setLoading(false)
  }

  useEffect(() => {
    load(1)
  }, [search, sortBy, sortOrder, pageSize])

  useEffect(() => { save({ search, sortBy, sortOrder, pageSize }) }, [search, sortBy, sortOrder, pageSize])

  const addPublisher = async () => {
    const parsed = ClientCreateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map((e) => e.message))
      return
    }

    setFormErrors([])
    await fetch('/api/publishers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })

    setForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      nip: '',
      regon: '',
      legalForm: '',
      bankAccount: '',
      notes: '',
    })
    setLookupMessage(null)
    setShowAddModal(false)
    await load(1)
  }

  const updatePublisher = async () => {
    if (!editingPublisher) return

    const parsed = ClientUpdateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map((e) => e.message))
      return
    }

    setFormErrors([])
    await fetch(`/api/publishers/${editingPublisher.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })

    setEditingPublisher(null)
    setForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      nip: '',
      regon: '',
      legalForm: '',
      bankAccount: '',
      notes: '',
    })
    setLookupMessage(null)
    await load(meta.page)
  }

  const openEditPublisher = (publisher: Publisher) => {
    setEditingPublisher(publisher)
    setForm({
      name: publisher.name || '',
      email: publisher.email || '',
      phone: publisher.phone || '',
      address: publisher.address || '',
      city: publisher.city || '',
      postalCode: publisher.postalCode || '',
      country: publisher.country || '',
      nip: publisher.nip || '',
      regon: publisher.regon || '',
      legalForm: publisher.legalForm || '',
      bankAccount: publisher.bankAccount || '',
      notes: publisher.notes || '',
    })
    setFormErrors([])
    setLookupMessage(null)
  }

  const fetchCompanyData = async () => {
    if (!form.nip && !form.regon) {
      setLookupMessage('Wprowadź NIP aby pobrać dane')
      return
    }

    setLookupLoading(true)
    setLookupMessage(null)
    setFormErrors([])

    try {
      const param = form.nip ? `nip=${form.nip}` : `krs=${form.regon}`
      const res = await fetch(`/api/company-lookup?${param}`)
      const data = await res.json()

      if (data.success && data.data) {
        setForm((prev) => ({
          ...prev,
          name: data.data.name || prev.name,
          address: data.data.address || prev.address,
          city: data.data.city || prev.city,
          postalCode: data.data.postalCode || prev.postalCode,
          nip: data.data.nip || prev.nip,
          regon: data.data.regon || prev.regon,
        }))
        setLookupMessage('Dane pobrane pomyślnie')
      } else {
        setLookupMessage(data.error || 'Nie znaleziono firmy')
      }
    } catch {
      setLookupMessage('Błąd podczas pobierania danych')
    } finally {
      setLookupLoading(false)
    }
  }

  const removePublisher = (id: number) => {
    openDeleteConfirmation({
      title: t('publishers.deleteTitle'),
      message: t('publishers.deleteMessage'),
      onConfirm: async () => {
        await fetch(`/api/publishers/${id}`, { method: 'DELETE' })
        await load(meta.page)
      },
    })
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) {
      setSortBy(col)
      setSortOrder('asc')
      return
    }
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const resetForm = () => {
    setFormErrors([])
    setLookupMessage(null)
    setForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      nip: '',
      regon: '',
      legalForm: '',
      bankAccount: '',
      notes: '',
    })
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('publishers.title')}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t('publishers.total')} <strong>{meta.total.toLocaleString('pl-PL')}</strong>
          </span>
          <Button size="sm" onClick={() => { resetForm(); setShowAddModal(true) }}>
            {t('publishers.createPublisher')}
          </Button>
        </div>
      </div>

      {/* Filtry */}
      <Card className="p-4">
        <div className="space-y-3">
          <div>
            <label className="label text-xs">{t('common.search')}</label>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Nazwa/Email/Telefon/NIP" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setSearch('')} className="h-8 text-xs">{t('publishers.clearFilters')}</Button>
              <RememberCheckbox checked={remember} onChange={setRemember} />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{t('publishers.perPage')}</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="h-8 rounded border border-input bg-transparent px-2 text-xs"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabela */}
      <Card className="p-0 overflow-hidden">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">{t('common.loading')}</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={() => toggleSort('id')} active={sortBy === 'id'} order={sortOrder}>ID</Th>
                  <Th>Skrót</Th>
                  <Th onClick={() => toggleSort('name')} active={sortBy === 'name'} order={sortOrder}>{t('common.name')}</Th>
                  <Th onClick={() => toggleSort('email')} active={sortBy === 'email'} order={sortOrder}>{t('common.email')}</Th>
                  <Th onClick={() => toggleSort('phone')} active={sortBy === 'phone'} order={sortOrder}>{t('common.phone')}</Th>
                  <Th>{t('publishers.nip')}</Th>
                  <Th>{t('publishers.city')}</Th>
                  <Th onClick={() => toggleSort('createdAt')} active={sortBy === 'createdAt'} order={sortOrder}>{t('publishers.created')}</Th>
                  <Th>{t('common.actions')}</Th>
                </tr>
              </thead>
              <tbody>
                {publishers.map((publisher) => (
                  <tr key={publisher.id} className="hover:bg-muted/40 transition-colors">
                    <Td>{publisher.id}</Td>
                    <Td>{publisher.abbreviation ?? '-'}</Td>
                    <Td>
                      <Link className="text-primary-600 hover:underline" href={`/publishers/${publisher.id}`}>
                        {publisher.name}
                      </Link>
                    </Td>
                    <Td>{publisher.email ?? '-'}</Td>
                    <Td>{publisher.phone ?? '-'}</Td>
                    <Td>{publisher.nip ?? '-'}</Td>
                    <Td>{publisher.city ?? '-'}</Td>
                    <Td>
                      {publisher.createdAt
                        ? new Intl.DateTimeFormat('pl-PL', {
                            timeZone: 'UTC',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                          }).format(new Date(publisher.createdAt))
                        : '-'}
                    </Td>
                    <Td>
                      <Button variant="destructive" size="sm" onClick={() => removePublisher(publisher.id)}>{t('common.delete')}</Button>
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
              {t('publishers.page')} {meta.page} {t('common.of')} {meta.pages} ({meta.total.toLocaleString('pl-PL')} {t('publishers.records')})
            </span>
            <Pagination page={meta.page} pages={meta.pages} onPage={(p) => load(p)} />
          </div>
        )}
      </Card>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('publishers.createPublisher')}</h3>

            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-blue-900 dark:text-blue-100">{t('publishers.autoFill')}</div>
                <Button onClick={fetchCompanyData} disabled={lookupLoading || (!form.nip && !form.regon)} className="text-sm">
                  {lookupLoading ? t('publishers.fetching') : t('publishers.fetchData')}
                </Button>
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300">{t('publishers.autoFillHint')}</div>
              {lookupMessage && (
                <div className={`text-xs mt-2 ${lookupMessage.includes('Błąd') || lookupMessage.includes('Nie') ? 'text-red-600' : 'text-green-600'}`}>
                  {lookupMessage}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('publishers.name')} *</label>
                <Input value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.email')}</label>
                <Input value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.phone')}</label>
                <Input value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.nip')}</label>
                <Input value={form.nip} onChange={(e) => setForm((prev) => ({ ...prev, nip: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.regon')}</label>
                <Input value={form.regon} onChange={(e) => setForm((prev) => ({ ...prev, regon: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('publishers.address')}</label>
                <Input value={form.address} onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.city')}</label>
                <Input value={form.city} onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.postalCode')}</label>
                <Input value={form.postalCode} onChange={(e) => setForm((prev) => ({ ...prev, postalCode: e.target.value }))} placeholder="00-000" />
              </div>
              <div>
                <label className="label">{t('publishers.legalForm')}</label>
                <Input value={form.legalForm} onChange={(e) => setForm((prev) => ({ ...prev, legalForm: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.bankAccount')}</label>
                <Input value={form.bankAccount} onChange={(e) => setForm((prev) => ({ ...prev, bankAccount: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('publishers.notes')}</label>
                <Input value={form.notes} onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))} />
              </div>
            </div>

            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <Button
                onClick={() => {
                  setShowAddModal(false)
                  resetForm()
                }}
              >
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={addPublisher}>
                {t('common.add')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {editingPublisher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('publishers.editPublisher')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('publishers.name')} *</label>
                <Input value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.email')}</label>
                <Input value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.phone')}</label>
                <Input value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.nip')}</label>
                <Input value={form.nip} onChange={(e) => setForm((prev) => ({ ...prev, nip: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.regon')}</label>
                <Input value={form.regon} onChange={(e) => setForm((prev) => ({ ...prev, regon: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('publishers.address')}</label>
                <Input value={form.address} onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.city')}</label>
                <Input value={form.city} onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.postalCode')}</label>
                <Input value={form.postalCode} onChange={(e) => setForm((prev) => ({ ...prev, postalCode: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.legalForm')}</label>
                <Input value={form.legalForm} onChange={(e) => setForm((prev) => ({ ...prev, legalForm: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('publishers.bankAccount')}</label>
                <Input value={form.bankAccount} onChange={(e) => setForm((prev) => ({ ...prev, bankAccount: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('publishers.notes')}</label>
                <Input value={form.notes} onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))} />
              </div>
            </div>

            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <Button
                onClick={() => {
                  setEditingPublisher(null)
                  resetForm()
                }}
              >
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={updatePublisher}>
                {t('common.save')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
