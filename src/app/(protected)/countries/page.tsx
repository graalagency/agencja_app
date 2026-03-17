'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { DictCountryCreateSchema, DictCountryUpdateSchema } from '../../../validation/country-dictionary'

type DictCountry = {
  id: number
  description: string
  code: string
  tax: number
  eu: boolean
  createdAt: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function CountriesPage() {
  const t = useTranslations('countryDictionary')
  const tCommon = useTranslations('common')

  const [items, setItems] = useState<DictCountry[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id' | 'description' | 'code' | 'tax' | 'eu' | 'createdAt'>('id')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [pageSize, setPageSize] = useState(10)

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingItem, setEditingItem] = useState<DictCountry | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ description: '', code: '', tax: '0', eu: false })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder,
    })

    const res = await fetch(`/api/countries?${qs.toString()}`)
    if (!res.ok) {
      setItems([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }

    const json = await res.json()
    setItems(Array.isArray(json?.data) ? json.data : [])
    setMeta(json?.meta ?? { page, pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(() => {
    load(1)
  }, [search, sortBy, sortOrder, pageSize])

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) {
      setSortBy(col)
      setSortOrder('asc')
    } else {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }
  }

  const addItem = async () => {
    const payload = {
      description: form.description,
      code: form.code.toUpperCase(),
      tax: Number(form.tax),
      eu: form.eu,
    }
    const parsed = DictCountryCreateSchema.safeParse(payload)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map((e) => e.message))
      return
    }

    setFormErrors([])
    const res = await fetch('/api/countries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })

    if (res.ok) {
      setShowAddModal(false)
      setForm({ description: '', code: '', tax: '0', eu: false })
      await load(1)
    }
  }

  const updateItem = async () => {
    if (!editingItem) return

    const payload = {
      description: form.description,
      code: form.code.toUpperCase(),
      tax: Number(form.tax),
      eu: form.eu,
    }
    const parsed = DictCountryUpdateSchema.safeParse(payload)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map((e) => e.message))
      return
    }

    setFormErrors([])
    const res = await fetch(`/api/countries/${editingItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })

    if (res.ok) {
      setEditingItem(null)
      setForm({ description: '', code: '', tax: '0', eu: false })
      await load(meta.page)
    }
  }

  const openEdit = (item: DictCountry) => {
    setEditingItem(item)
    setForm({
      description: item.description,
      code: item.code,
      tax: String(item.tax),
      eu: item.eu,
    })
    setFormErrors([])
  }

  const removeItem = async (id: number) => {
    if (!confirm(t('confirmDelete'))) return
    await fetch(`/api/countries/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <Button
            variant="primary"
            onClick={() => {
              setShowAddModal(true)
              setFormErrors([])
              setForm({ description: '', code: '', tax: '0', eu: false })
            }}
          >
            {t('create')}
          </Button>
        </div>

        <div className="max-w-md">
          <label className="label">{tCommon('search')}</label>
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`${t('description')}/${t('code')}`} />
        </div>
      </Card>

      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={() => toggleSort('id')} active={sortBy === 'id'} order={sortOrder}>ID</Th>
                  <Th onClick={() => toggleSort('description')} active={sortBy === 'description'} order={sortOrder}>{t('description')}</Th>
                  <Th onClick={() => toggleSort('code')} active={sortBy === 'code'} order={sortOrder}>{t('code')}</Th>
                  <Th onClick={() => toggleSort('tax')} active={sortBy === 'tax'} order={sortOrder}>{t('tax')}</Th>
                  <Th onClick={() => toggleSort('eu')} active={sortBy === 'eu'} order={sortOrder}>{t('eu')}</Th>
                  <Th onClick={() => toggleSort('createdAt')} active={sortBy === 'createdAt'} order={sortOrder}>{t('created')}</Th>
                  <th className="px-4 py-2" />
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.description}</Td>
                    <Td>{item.code}</Td>
                    <Td>{item.tax.toFixed(2)}%</Td>
                    <Td>{item.eu ? t('euYes') : t('euNo')}</Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(item.createdAt))}</Td>
                    <Td>
                      <div className="flex gap-2">
                        <Button onClick={() => openEdit(item)}>{tCommon('edit')}</Button>
                        <Button onClick={() => removeItem(item.id)}>{tCommon('delete')}</Button>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Pagination page={meta.page} pages={meta.pages} onPage={(p) => load(p)} />
              <div className="flex items-center gap-2 md:justify-end">
                <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tCommon('pageSize')}:</label>
                <select
                  className="flex h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={String(pageSize)}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </Card>

      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{editingItem ? t('edit') : t('create')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:col-span-2">
                <label className="label">{t('description')} *</label>
                <Input value={form.description} onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('code')} *</label>
                <Input value={form.code} onChange={(e) => setForm((prev) => ({ ...prev, code: e.target.value.toUpperCase() }))} />
              </div>
              <div>
                <label className="label">{t('tax')} *</label>
                <Input type="number" step="0.01" min="0" max="100" value={form.tax} onChange={(e) => setForm((prev) => ({ ...prev, tax: e.target.value }))} />
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input
                  id="eu"
                  type="checkbox"
                  checked={form.eu}
                  onChange={(e) => setForm((prev) => ({ ...prev, eu: e.target.checked }))}
                  className="h-4 w-4"
                />
                <label htmlFor="eu" className="text-sm">{t('euYes')}</label>
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
                  setEditingItem(null)
                  setFormErrors([])
                }}
              >
                {tCommon('cancel')}
              </Button>
              <Button variant="primary" onClick={editingItem ? updateItem : addItem}>
                {editingItem ? tCommon('save') : tCommon('add')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
