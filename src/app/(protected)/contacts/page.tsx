'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useSearchMemory } from '../../../hooks/useSearchMemory'
import { useDeleteConfirmation } from '../../../hooks/useDeleteConfirmation'
import { RememberCheckbox } from '../../../components/ui/RememberCheckbox'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { ContactCreateSchema, ContactUpdateSchema } from '../../../validation/contact'

type Contact = { 
  id: number
  phoneNumber?: string | null
  firstName: string
  middleName?: string | null
  lastName: string
  informal: number
  fax?: string | null
  email?: string | null
  contactPosition?: string | null
  accountant?: number | null
  client?: {
    id: number
    name: string
  } | null
  createdAt: string
  updatedAt: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function ContactsPage() {
  const t = useTranslations('contacts')
  const tCommon = useTranslations('common')
  const { openDeleteConfirmation } = useDeleteConfirmation()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const { remember, setRemember, initialCriteria, save } = useSearchMemory('contacts', {
    search: '', sortBy: 'id', sortOrder: 'asc', pageSize: 10,
  })
  const [search, setSearch] = useState(initialCriteria.search as string)
  const [sortBy, setSortBy] = useState<'id'|'firstName'|'lastName'|'createdAt'|'phoneNumber'|'email'>(initialCriteria.sortBy as any)
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(initialCriteria.sortOrder as any)
  const [pageSize, setPageSize] = useState(Number(initialCriteria.pageSize))

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ 
    phoneNumber: '',
    firstName: '', 
    middleName: '', 
    lastName: '', 
    informal: 0,
    fax: '',
    email: '',
    contactPosition: '',
    accountant: null as number | null
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
    const res = await fetch(`/api/contacts?${qs.toString()}`)
    if (!res.ok) {
      setContacts([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }
    const data = await res.json()
    if (Array.isArray(data)) {
      setContacts(data)
      const total = data.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(data?.data) ? data.data : []
      setContacts(arr)
      const metaFromServer = data?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  useEffect(() => { save({ search, sortBy, sortOrder, pageSize }) }, [search, sortBy, sortOrder, pageSize])

  const addContact = async () => {
    const parsed = ContactCreateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    try {
      const res = await fetch('/api/contacts', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(parsed.data) 
      })
      if (!res.ok) {
        const error = await res.json()
        setFormErrors([error.message || t('createContact')])
        return
      }
      setForm({ phoneNumber: '', firstName: '', middleName: '', lastName: '', informal: 0, fax: '', email: '', contactPosition: '', accountant: null })
      setShowAddModal(false)
      await load(1)
    } catch (error) {
      setFormErrors([tCommon('connectionError')])
    }
  }

  const updateContact = async () => {
    if (!editingContact) return
    const parsed = ContactUpdateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    try {
      const res = await fetch(`/api/contacts/${editingContact.id}`, { 
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(parsed.data) 
      })
      if (!res.ok) {
        const error = await res.json()
        setFormErrors([error.message || t('editContact')])
        return
      }
      setEditingContact(null)
      setForm({ phoneNumber: '', firstName: '', middleName: '', lastName: '', informal: 0, fax: '', email: '', contactPosition: '', accountant: null })
      await load(meta.page)
    } catch (error) {
      setFormErrors([tCommon('connectionError')])
    }
  }

  const openEditContact = (c: Contact) => {
    setEditingContact(c)
    setForm({
      phoneNumber: c.phoneNumber || '',
      firstName: c.firstName,
      middleName: c.middleName || '',
      lastName: c.lastName,
      informal: c.informal,
      fax: c.fax || '',
      email: c.email || '',
      contactPosition: c.contactPosition || '',
      accountant: c.accountant ?? null,
    })
    setFormErrors([])
  }

  const removeContact = (id: number) => {
    openDeleteConfirmation({
      title: t('deleteTitle'),
      message: t('deleteMessage'),
      onConfirm: async () => {
        await fetch(`/api/contacts/${id}`, { method: 'DELETE' })
        await load(meta.page)
      },
    })
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t('total')} <strong>{meta.total.toLocaleString('pl-PL')}</strong>
          </span>
          <Button size="sm" onClick={() => {
            setShowAddModal(true);
            setFormErrors([]);
            setForm({ phoneNumber: '', firstName: '', middleName: '', lastName: '', informal: 0, fax: '', email: '', contactPosition: '', accountant: null });
          }}>
            {t('createContact')}
          </Button>
        </div>
      </div>

      {/* Filtry */}
      <Card className="p-4">
        <div className="space-y-3">
          <div>
            <label className="label text-xs">{tCommon('search')}</label>
            <Input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} placeholder="Imię/Nazwisko/Email" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setSearch('')} className="h-8 text-xs">{t('clearFilters')}</Button>
              <RememberCheckbox checked={remember} onChange={setRemember} />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{t('perPage')}</span>
              <select
                value={pageSize}
                onChange={(e)=>setPageSize(Number(e.target.value))}
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
          <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('firstName')} active={sortBy==='firstName'} order={sortOrder}>{t('firstName')}</Th>
                  <Th>{t('middleName')}</Th>
                  <Th onClick={()=>toggleSort('lastName')} active={sortBy==='lastName'} order={sortOrder}>{t('lastName')}</Th>
                  <Th onClick={()=>toggleSort('phoneNumber')} active={sortBy==='phoneNumber'} order={sortOrder}>{t('phone')}</Th>
                  <Th onClick={()=>toggleSort('email')} active={sortBy==='email'} order={sortOrder}>{t('email')}</Th>
                  <Th>{t('position')}</Th>
                  <Th>{t('client')}</Th>
                  <Th>{tCommon('actions')}</Th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(contacts) ? contacts : []).map(c => (
                  <tr key={c.id} className="hover:bg-muted/40 transition-colors">
                    <Td>{c.id}</Td>
                    <Td>
                      <Link className="text-primary-600 hover:underline" href={`/contacts/${c.id}`}>{c.firstName}</Link>
                    </Td>
                    <Td>{c.middleName ?? '-'}</Td>
                    <Td>{c.lastName}</Td>
                    <Td>{c.phoneNumber ?? '-'}</Td>
                    <Td>{c.email ?? '-'}</Td>
                    <Td>{c.contactPosition ?? '-'}</Td>
                    <Td>
                      {c.client ? (
                        <Link className="text-primary-600 hover:underline" href={`/customers/${c.client.id}`}>
                          {c.client.name}
                        </Link>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </Td>
                    <Td>
                      <Button variant="destructive" size="sm" onClick={()=>removeContact(c.id)}>{tCommon('delete')}</Button>
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

      {/* Add contact modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('createContact')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('firstName')} *</label>
                <Input value={form.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('middleName')}</label>
                <Input value={form.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('lastName')} *</label>
                <Input value={form.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('phone')}</label>
                <Input value={form.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, phoneNumber: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('email')}</label>
                <Input type="email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('fax')}</label>
                <Input value={form.fax} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, fax: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('position')}</label>
                <Input value={form.contactPosition} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, contactPosition: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); }}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={addContact}>{t('createContact')}</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit contact modal */}
      {editingContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('editContact')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('firstName')} *</label>
                <Input value={form.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('middleName')}</label>
                <Input value={form.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('lastName')} *</label>
                <Input value={form.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('phone')}</label>
                <Input value={form.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, phoneNumber: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('email')}</label>
                <Input type="email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('fax')}</label>
                <Input value={form.fax} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, fax: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">{t('position')}</label>
                <Input value={form.contactPosition} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, contactPosition: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setEditingContact(null); setFormErrors([]); }}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={updateContact}>{tCommon('save')}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
