 'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../../components/ui/Table'
import { Pagination } from '../../../../components/ui/Pagination'
import { ClientUpdateSchema } from '../../../../validation/client'
import { TitlesTab } from '../../../../components/TitlesTab'
import { DictSelect } from '../../../../components/ui/DictSelect'

type Client = {
  id: number
  name: string
  abbreviation?: string | null
  email?: string | null
  phone?: string | null
  fax?: string | null
  www?: string | null
  address?: string | null
  address2?: string | null
  city?: string | null
  state?: string | null
  postalCode?: string | null
  country?: string | null
  language?: string | null
  nip?: string | null
  vatId?: string | null
  regon?: string | null
  legalForm?: string | null
  status?: string | null
  repModeId?: number | null
  bankAccount?: string | null
  bankName?: string | null
  notes?: string | null
  createdAt: string
  updatedAt: string
}

type Author = {
  id: number
  firstName: string
  middleName?: string | null
  lastName: string
  workEmail?: string | null
  personalEmail?: string | null
  description?: string | null
}

type Meta = { page: number; pageSize: number; total: number; pages: number }
type ListResponse<T> = { data: T[]; meta: Meta }

type Tab = 'info' | 'contacts' | 'taxcerts' | 'titles' | 'invoices'

export default function ClientDetailPage() {
  const t = useTranslations()
  const params = useParams()
  const id = Number(params.id)
  const [client, setClient]       = useState<Client | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('info')
  const [titleCount, setTitleCount] = useState<number | null>(null)

  const [formClientErrors, setFormClientErrors] = useState<string[]>([])
  const [editMode, setEditMode]   = useState(false)

  // invoices
  const [invoicesType, setInvoicesType] = useState<'issued' | 'planned'>('issued')
  const [invoices, setInvoices]         = useState<any[]>([])

  // contacts
  type LinkedContact = {
    linkId: number; isDefault: boolean; id: number
    firstName: string; middleName?: string | null; lastName: string
    email?: string | null; phoneNumber?: string | null
    contactPosition?: string | null; accountant?: number | null
  }
  const [contacts, setContacts]                     = useState<LinkedContact[]>([])
  const [contactSearch, setContactSearch]           = useState('')
  const [contactSearchResults, setContactSearchResults] = useState<LinkedContact[]>([])
  const [contactsLoading, setContactsLoading]       = useState(false)
  const [showContactSearch, setShowContactSearch]   = useState(false)

  // tax certs
  type SendEntry = {
    id: number
    dateSend: string | null
    sendOrig: boolean
    sendCopy: boolean
    recipient: { id: number; name: string; type: 'client' | 'publisher' } | null
  }
  type TaxCert = {
    id: number
    validDate: string
    requestDate: string | null
    receiveDate: string | null
    hasCert: boolean
    notes: string | null
    fileName: string | null
    hasFile: boolean
    sendLog: SendEntry[]
  }
  const [taxCerts, setTaxCerts]               = useState<TaxCert[]>([])
  const [taxCertsLoading, setTaxCertsLoading] = useState(false)
  const [showAddCert, setShowAddCert]         = useState(false)
  const [newCert, setNewCert]                 = useState({ validDate: '', requestDate: '', receiveDate: '', hasCert: false, notes: '' })
  const [expandedCertId, setExpandedCertId]   = useState<number | null>(null)
  const [addSendCertId, setAddSendCertId]     = useState<number | null>(null)
  const [newSend, setNewSend]                 = useState({ dateSend: '', sendOrig: false, sendCopy: false, recipientId: 0, recipientType: '' as 'client' | 'publisher' | '', recipientName: '' })
  const [sendSearch, setSendSearch]           = useState('')
  const [sendSearchResults, setSendSearchResults] = useState<{ id: number; name: string; type: 'client' | 'publisher' }[]>([])

  // authors (assigned to client)
  const [authors, setAuthors]                   = useState<Author[]>([])
  const [availableAuthors, setAvailableAuthors] = useState<Author[]>([])
  const [filteredAuthors, setFilteredAuthors]   = useState<Author[]>([])
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null)
  const [authorSearchQuery, setAuthorSearchQuery] = useState('')
  const [authorsLoading, setAuthorsLoading]     = useState(false)

  const fmtDate = (d: string | null) => d
    ? new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(d))
    : '—'

  // ── loaders ─────────────────────────────────────────────────────────────────

  const loadClient = async () => {
    const res = await fetch(`/api/customers/${id}`)
    setClient(await res.json())
  }

  const loadTaxCerts = async () => {
    setTaxCertsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/tax-certs`)
      if (res.ok) setTaxCerts(await res.json())
    } finally { setTaxCertsLoading(false) }
  }

  const loadContacts = async () => {
    setContactsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/contacts`)
      if (res.ok) setContacts(await res.json())
    } finally { setContactsLoading(false) }
  }

  const loadInvoices = async (type: 'issued' | 'planned' = invoicesType) => {
    const res = await fetch(`/api/customers/${id}/invoices?type=${type}`)
    if (!res.ok) { setInvoices([]); return }
    const json = await res.json()
    setInvoices(Array.isArray(json?.data) ? json.data : [])
  }

  const loadAuthors = async () => {
    setAuthorsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/authors`)
      if (res.ok) {
        const json = await res.json()
        setAuthors(Array.isArray(json?.data) ? json.data : [])
      }
    } finally { setAuthorsLoading(false) }
  }

  const loadAvailableAuthors = async () => {
    try {
      const res = await fetch('/api/contacts?pageSize=1000')
      if (res.ok) {
        const json = await res.json()
        setAvailableAuthors((Array.isArray(json?.data) ? json.data : []).filter((a: any) => !a.client))
      }
    } catch {}
  }

  useEffect(() => {
    if (id) { loadClient(); loadAuthors(); loadAvailableAuthors(); loadContacts(); loadTaxCerts() }
  }, [id])

  useEffect(() => { if (id) loadInvoices(invoicesType) }, [id, invoicesType])

  useEffect(() => {
    if (!authorSearchQuery.trim()) { setFilteredAuthors(availableAuthors); return }
    const q = authorSearchQuery.toLowerCase()
    setFilteredAuthors(availableAuthors.filter(a => {
      const name = `${a.firstName} ${a.middleName ?? ''} ${a.lastName}`.toLowerCase()
      const email = `${a.workEmail ?? ''} ${a.personalEmail ?? ''}`.toLowerCase()
      return name.includes(q) || email.includes(q)
    }))
  }, [authorSearchQuery, availableAuthors])

  // ── contacts ────────────────────────────────────────────────────────────────

  const searchContacts = async (q: string) => {
    if (!q.trim()) { setContactSearchResults([]); return }
    const res = await fetch(`/api/contacts?search=${encodeURIComponent(q)}&pageSize=20`)
    if (!res.ok) return
    const json = await res.json()
    const linked = new Set(contacts.map(c => c.id))
    setContactSearchResults((json.data ?? []).filter((c: any) => !linked.has(c.id)))
  }

  const linkContact = async (contactId: number) => {
    await fetch(`/api/customers/${id}/contacts`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactId }),
    })
    setContactSearch(''); setContactSearchResults([]); setShowContactSearch(false)
    await loadContacts()
  }

  const unlinkContact = async (contactId: number) => {
    if (!confirm('Odpiąć kontakt od kontrahenta?')) return
    await fetch(`/api/customers/${id}/contacts?contactId=${contactId}`, { method: 'DELETE' })
    await loadContacts()
  }

  // ── tax certs ───────────────────────────────────────────────────────────────

  const addTaxCert = async () => {
    if (!newCert.validDate) return
    await fetch(`/api/customers/${id}/tax-certs`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCert),
    })
    setNewCert({ validDate: '', requestDate: '', receiveDate: '', hasCert: false, notes: '' })
    setShowAddCert(false)
    await loadTaxCerts()
  }

  const deleteTaxCert = async (certId: number) => {
    if (!confirm('Usunąć certyfikat?')) return
    await fetch(`/api/tax-certs/${certId}`, { method: 'DELETE' })
    await loadTaxCerts()
  }

  const searchSendRecipients = async (q: string) => {
    if (!q.trim()) { setSendSearchResults([]); return }
    const [cr, pr] = await Promise.all([
      fetch(`/api/customers?search=${encodeURIComponent(q)}&pageSize=8`).then(r => r.json()),
      fetch(`/api/publishers?search=${encodeURIComponent(q)}&pageSize=8`).then(r => r.json()),
    ])
    const clients = (cr.data ?? []).map((c: any) => ({ id: c.id, name: c.abbreviation || c.name, type: 'client' as const }))
    const pubs    = (pr.data ?? []).map((p: any) => ({ id: p.id, name: p.abbreviation || p.name, type: 'publisher' as const }))
    setSendSearchResults([...pubs, ...clients])
  }

  const addSend = async (certId: number) => {
    if (!newSend.recipientId || !newSend.recipientType) return
    await fetch(`/api/tax-certs/${certId}/sends`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId:    newSend.recipientType === 'client'    ? newSend.recipientId : null,
        publisherId: newSend.recipientType === 'publisher' ? newSend.recipientId : null,
        dateSend: newSend.dateSend || null,
        sendOrig: newSend.sendOrig,
        sendCopy: newSend.sendCopy,
      }),
    })
    setAddSendCertId(null)
    setNewSend({ dateSend: '', sendOrig: false, sendCopy: false, recipientId: 0, recipientType: '', recipientName: '' })
    setSendSearch(''); setSendSearchResults([])
    await loadTaxCerts()
  }

  const deleteSend = async (certId: number, sendId: number) => {
    if (!confirm('Usunąć wpis wysyłki?')) return
    await fetch(`/api/tax-certs/${certId}/sends?sendId=${sendId}`, { method: 'DELETE' })
    await loadTaxCerts()
  }

  // ── authors ─────────────────────────────────────────────────────────────────

  const assignAuthor = async () => {
    if (!selectedAuthorId) return
    const res = await fetch(`/api/customers/${id}/authors`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorId: selectedAuthorId }),
    })
    if (res.ok) {
      await loadAuthors(); await loadAvailableAuthors()
      setSelectedAuthorId(null); setAuthorSearchQuery('')
    } else {
      const e = await res.json()
      alert(e.error || 'Nie udało się przypisać kontaktu')
    }
  }

  const unassignAuthor = async (authorId: number) => {
    if (!confirm('Czy na pewno chcesz odpiąć ten kontakt od klienta?')) return
    await fetch(`/api/customers/${id}/authors?authorId=${authorId}`, { method: 'DELETE' })
    await loadAuthors(); await loadAvailableAuthors()
  }

  // ── update client ────────────────────────────────────────────────────────────

  const updateClient = async () => {
    if (!client) return
    const parsed = ClientUpdateSchema.safeParse({
      name: client.name, email: client.email ?? '', phone: client.phone ?? '',
      address: client.address ?? '', city: client.city ?? '',
      postalCode: client.postalCode ?? '', country: client.country ?? '',
      nip: client.nip ?? '', regon: client.regon ?? '',
      legalForm: client.legalForm ?? '', bankAccount: client.bankAccount ?? '',
      notes: client.notes ?? '',
    })
    if (!parsed.success) { setFormClientErrors(parsed.error.errors.map(e => e.message)); return }
    setFormClientErrors([])
    await fetch(`/api/customers/${id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })
    await loadClient()
    setEditMode(false)
  }

  // ── render ───────────────────────────────────────────────────────────────────

  if (!client) return <p className="text-center text-muted-foreground py-8">{t('customerDetail.loading')}</p>

  const tabDef: { key: Tab; label: string; count?: number | null }[] = [
    { key: 'info',      label: 'Dane' },
    { key: 'contacts',  label: 'Kontakty',              count: contacts.length  },
    { key: 'taxcerts',  label: 'Certyfikaty rezydencji', count: taxCerts.length  },
    { key: 'titles',    label: 'Tytuły',                count: titleCount       },
    { key: 'invoices',  label: 'Faktury' },
  ]

  return (
    <div className="space-y-4">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => window.history.back()} className="gap-1">
            ← {t('customerDetail.back')}
          </Button>
          <div>
            <h1 className="text-xl font-bold leading-tight">{client.name}</h1>
            {(client.abbreviation || client.status) && (
              <p className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                {client.abbreviation && <span className="font-mono">{client.abbreviation}</span>}
                {client.status === 'A' && <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">Aktywny</span>}
                {client.status === 'I' && <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">Nieaktywny</span>}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!editMode ? (
            <Button variant="outline" size="sm" onClick={() => { setEditMode(true); setActiveTab('info') }}>{t('customerDetail.edit')}</Button>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={() => { setEditMode(false); loadClient() }}>{t('customerDetail.cancel')}</Button>
              <Button size="sm" onClick={updateClient}>{t('customerDetail.saveChanges')}</Button>
            </>
          )}
        </div>
      </div>

      {/* ── Tabs card ───────────────────────────────────────────────────────── */}
      <Card className="p-0 overflow-hidden">
        {/* Tab nav */}
        <div className="border-b border-border px-4">
          <nav className="flex -mb-px gap-1">
            {tabDef.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === t.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {t.label}
                {t.count != null && (
                  <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-xs ${activeTab === t.key ? 'bg-primary/10' : 'bg-muted'}`}>
                    {t.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">

          {/* ── Dane ────────────────────────────────────────────────────────── */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              {formClientErrors.length > 0 && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
                    {formClientErrors.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Podstawowe */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('customerDetail.basicInfo')}</h3>
                  <div>
                    <label className="label text-xs">{t('customerDetail.name')}</label>
                    {editMode
                      ? <Input value={client.name} onChange={e => setClient({ ...client, name: e.target.value })} />
                      : <p className="text-base font-medium">{client.name}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">{t('customerDetail.email')}</label>
                    {editMode
                      ? <Input value={client.email ?? ''} onChange={e => setClient({ ...client, email: e.target.value })} />
                      : <p className="text-base">{client.email || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">{t('customerDetail.phone')}</label>
                    {editMode
                      ? <Input value={client.phone ?? ''} onChange={e => setClient({ ...client, phone: e.target.value })} />
                      : <p className="text-base">{client.phone || '-'}</p>}
                  </div>
                </div>

                {/* Adres */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('customerDetail.address')}</h3>
                  <div>
                    <label className="label text-xs">Ulica i numer</label>
                    {editMode
                      ? <Input value={client.address ?? ''} onChange={e => setClient({ ...client, address: e.target.value })} />
                      : <p className="text-base">{client.address || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Miasto</label>
                    {editMode
                      ? <Input value={client.city ?? ''} onChange={e => setClient({ ...client, city: e.target.value })} />
                      : <p className="text-base">{client.city || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Kod pocztowy</label>
                    {editMode
                      ? <Input value={client.postalCode ?? ''} onChange={e => setClient({ ...client, postalCode: e.target.value })} />
                      : <p className="text-base">{client.postalCode || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Kraj</label>
                    {editMode
                      ? <DictSelect dictKey="countries" valueField="CountryPL" labelField="CountryPL" format="label-only" value={client.country} onChange={v => setClient({ ...client, country: v || null })} />
                      : <p className="text-base">{client.country || '-'}</p>}
                  </div>
                </div>

                {/* Firmowe */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Dane firmowe</h3>
                  <div>
                    <label className="label text-xs">NIP</label>
                    {editMode
                      ? <Input value={client.nip ?? ''} onChange={e => setClient({ ...client, nip: e.target.value })} />
                      : <p className="text-base">{client.nip || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">REGON</label>
                    {editMode
                      ? <Input value={client.regon ?? ''} onChange={e => setClient({ ...client, regon: e.target.value })} />
                      : <p className="text-base">{client.regon || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Forma prawna</label>
                    {editMode
                      ? <Input value={client.legalForm ?? ''} onChange={e => setClient({ ...client, legalForm: e.target.value })} />
                      : <p className="text-base">{client.legalForm || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Konto bankowe</label>
                    {editMode
                      ? <Input value={client.bankAccount ?? ''} onChange={e => setClient({ ...client, bankAccount: e.target.value })} />
                      : <p className="text-sm font-mono">{client.bankAccount || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Status</label>
                    {editMode
                      ? (
                        <select
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          value={client.status ?? ''}
                          onChange={e => setClient({ ...client, status: e.target.value || null })}
                        >
                          <option value="">— wybierz —</option>
                          <option value="A">A — Aktywny</option>
                          <option value="I">I — Nieaktywny</option>
                        </select>
                      )
                      : <p className="text-base">{client.status === 'A' ? 'Aktywny' : client.status === 'I' ? 'Nieaktywny' : '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Język</label>
                    {editMode
                      ? <DictSelect dictKey="languages" valueField="LangAbb" labelField="LangPL" format="code-label" value={client.language} onChange={v => setClient({ ...client, language: v || null })} />
                      : <p className="text-base">{client.language || '-'}</p>}
                  </div>
                  <div>
                    <label className="label text-xs">Tryb reprezentacji</label>
                    {editMode
                      ? <DictSelect dictKey="report-modes" valueField="RepModeID" labelField="RepModeDesc" format="label-only" value={client.repModeId} onChange={v => setClient({ ...client, repModeId: v ? Number(v) : null })} />
                      : <p className="text-base">{client.repModeId ?? '-'}</p>}
                  </div>
                </div>
              </div>

              {/* Notatki */}
              <div className="pt-4 border-t border-border">
                <label className="label text-xs">Notatki</label>
                {editMode
                  ? <textarea className="input w-full min-h-[80px]" value={client.notes ?? ''} onChange={e => setClient({ ...client, notes: e.target.value })} />
                  : <p className="text-base whitespace-pre-wrap">{client.notes || '-'}</p>}
              </div>

              {/* Meta */}
              <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                Utworzono: {client.createdAt
                  ? new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(client.createdAt))
                  : '—'}
              </div>
            </div>
          )}

          {/* ── Kontakty ────────────────────────────────────────────────────── */}
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Kontakty kontrahenta</h2>
                <Button variant="outline" onClick={() => setShowContactSearch(!showContactSearch)}>
                  {showContactSearch ? 'Anuluj' : '+ Dodaj kontakt'}
                </Button>
              </div>

              {showContactSearch && (
                <div className="p-4 border border-border rounded-lg space-y-2 bg-muted/30">
                  <label className="label text-xs">Szukaj kontaktu po nazwisku lub emailu</label>
                  <Input
                    value={contactSearch}
                    onChange={e => { setContactSearch(e.target.value); searchContacts(e.target.value) }}
                    placeholder="Wpisz nazwisko lub email..."
                    autoFocus
                  />
                  {contactSearchResults.length > 0 && (
                    <div className="border border-border rounded divide-y divide-border bg-card max-h-60 overflow-y-auto">
                      {contactSearchResults.map(c => (
                        <button key={c.id} className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm" onClick={() => linkContact(c.id)}>
                          <span className="font-medium">{c.firstName} {c.middleName} {c.lastName}</span>
                          {c.contactPosition && <span className="text-muted-foreground ml-2">· {c.contactPosition}</span>}
                          {c.email && <span className="text-muted-foreground ml-2">· {c.email}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                  {contactSearch.length > 1 && contactSearchResults.length === 0 && (
                    <p className="text-sm text-muted-foreground">Brak wyników. Kontakt możesz dodać w sekcji Kontakty.</p>
                  )}
                </div>
              )}

              {contactsLoading ? (
                <p className="text-muted-foreground text-sm">Ładowanie...</p>
              ) : contacts.length === 0 ? (
                <p className="text-muted-foreground text-sm py-4 text-center">Brak przypisanych kontaktów</p>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <Th>Imię i nazwisko</Th>
                      <Th>Stanowisko</Th>
                      <Th>Email</Th>
                      <Th>Telefon</Th>
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map(c => (
                      <tr key={c.linkId}>
                        <Td>
                          <Link href={`/contacts/${c.id}`} className="text-primary hover:underline font-medium">
                            {c.isDefault && <span title="Kontakt domyślny" className="mr-1">★</span>}
                            {c.firstName} {c.middleName} {c.lastName}
                          </Link>
                        </Td>
                        <Td>{c.contactPosition || '-'}</Td>
                        <Td>{c.email || '-'}</Td>
                        <Td>{c.phoneNumber || '-'}</Td>
                        <Td>
                          <Button variant="secondary" onClick={() => unlinkContact(c.id)}>Odepnij</Button>
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          )}

          {/* ── Certyfikaty rezydencji ───────────────────────────────────────── */}
          {activeTab === 'taxcerts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Certyfikaty rezydencji podatkowej</h2>
                <Button variant="outline" onClick={() => { setShowAddCert(!showAddCert); setExpandedCertId(null) }}>
                  {showAddCert ? 'Anuluj' : '+ Nowy certyfikat'}
                </Button>
              </div>

              {showAddCert && (
                <div className="p-4 border-2 border-primary/30 rounded-lg space-y-4 bg-muted/20">
                  <h3 className="text-sm font-semibold">Nowy certyfikat rezydencji</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="label text-xs">Data ważności *</label>
                      <Input type="date" value={newCert.validDate} onChange={e => setNewCert(p => ({ ...p, validDate: e.target.value }))} />
                    </div>
                    <div>
                      <label className="label text-xs">Data złożenia wniosku</label>
                      <Input type="date" value={newCert.requestDate} onChange={e => setNewCert(p => ({ ...p, requestDate: e.target.value }))} />
                    </div>
                    <div>
                      <label className="label text-xs">Data otrzymania</label>
                      <Input type="date" value={newCert.receiveDate} onChange={e => setNewCert(p => ({ ...p, receiveDate: e.target.value }))} />
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" checked={newCert.hasCert} onChange={e => setNewCert(p => ({ ...p, hasCert: e.target.checked }))} />
                      <span className="text-sm">Certyfikat fizycznie w posiadaniu</span>
                    </label>
                    <div className="flex-1">
                      <Input value={newCert.notes} onChange={e => setNewCert(p => ({ ...p, notes: e.target.value }))} placeholder="Uwagi (opcjonalne)..." />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={addTaxCert}>Zapisz certyfikat</Button>
                    <Button variant="outline" onClick={() => setShowAddCert(false)}>Anuluj</Button>
                  </div>
                </div>
              )}

              {taxCertsLoading ? (
                <p className="text-muted-foreground text-sm py-4">Ładowanie...</p>
              ) : taxCerts.length === 0 ? (
                <p className="text-muted-foreground text-sm py-8 text-center">Brak certyfikatów rezydencji</p>
              ) : (
                <div className="border border-border rounded-lg overflow-hidden">
                  {taxCerts.map((cert, idx) => {
                    const isExpanded   = expandedCertId === cert.id
                    const isAddingSend = addSendCertId  === cert.id
                    return (
                      <div key={cert.id} className={idx > 0 ? 'border-t border-border' : ''}>
                        <div
                          className={`flex items-center gap-3 px-4 py-3 cursor-pointer select-none transition-colors ${isExpanded ? 'bg-muted/50' : 'hover:bg-muted/30'}`}
                          onClick={() => { setExpandedCertId(isExpanded ? null : cert.id); setAddSendCertId(null); setSendSearch(''); setSendSearchResults([]) }}
                        >
                          <span className={`text-muted-foreground transition-transform shrink-0 ${isExpanded ? 'rotate-90' : ''}`}>▶</span>
                          {(() => {
                            const valid = new Date(cert.validDate) >= new Date(new Date().toDateString())
                            return (
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shrink-0 ${valid ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                                {valid ? '✓ Ważny' : '✗ Wygasły'}
                              </span>
                            )
                          })()}
                          <div className="flex items-center gap-4 text-sm flex-1 min-w-0">
                            <span className="font-medium shrink-0">Ważny do: {fmtDate(cert.validDate)}</span>
                            {cert.requestDate && <span className="text-muted-foreground shrink-0 hidden md:inline">Wniosek: {fmtDate(cert.requestDate)}</span>}
                            {cert.receiveDate && <span className="text-muted-foreground shrink-0 hidden md:inline">Otrzymano: {fmtDate(cert.receiveDate)}</span>}
                            {cert.notes       && <span className="text-muted-foreground truncate text-xs">{cert.notes}</span>}
                          </div>
                          <div className="flex items-center gap-3 shrink-0 ml-auto" onClick={e => e.stopPropagation()}>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">{cert.sendLog.length} wysyłek</span>
                            {cert.hasFile && (
                              <a href={`/api/tax-certs/${cert.id}/file`} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">PDF</a>
                            )}
                            <button className="text-xs text-red-400 hover:text-red-600 px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20" onClick={() => deleteTaxCert(cert.id)}>Usuń</button>
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="bg-muted/20 border-t border-border px-6 py-4 space-y-4">
                            {(cert.requestDate || cert.receiveDate || cert.notes) && (
                              <div className="flex gap-6 text-sm text-muted-foreground md:hidden">
                                {cert.requestDate && <span>Wniosek: {fmtDate(cert.requestDate)}</span>}
                                {cert.receiveDate && <span>Otrzymano: {fmtDate(cert.receiveDate)}</span>}
                                {cert.notes       && <span>{cert.notes}</span>}
                              </div>
                            )}
                            <div>
                              <h4 className="text-sm font-medium mb-2">Historia wysyłek</h4>
                              {cert.sendLog.length === 0 ? (
                                <p className="text-xs text-muted-foreground py-2">Brak zapisanych wysyłek</p>
                              ) : (
                                <table className="w-full text-sm">
                                  <thead>
                                    <tr className="text-xs text-muted-foreground border-b border-border">
                                      <th className="text-left py-1 pr-4 font-medium">Data</th>
                                      <th className="text-left py-1 pr-4 font-medium">Odbiorca</th>
                                      <th className="text-left py-1 pr-4 font-medium">Typ</th>
                                      <th className="w-6"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {cert.sendLog.map(s => (
                                      <tr key={s.id} className="border-b border-border/50 last:border-0">
                                        <td className="py-1.5 pr-4 text-muted-foreground whitespace-nowrap">{fmtDate(s.dateSend)}</td>
                                        <td className="py-1.5 pr-4 font-medium">{s.recipient?.name ?? <span className="text-muted-foreground italic">—</span>}</td>
                                        <td className="py-1.5 pr-4">
                                          <span className="flex gap-2">
                                            {s.sendOrig && <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-1.5 py-0.5 rounded">oryginał</span>}
                                            {s.sendCopy && <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-1.5 py-0.5 rounded">kopia</span>}
                                          </span>
                                        </td>
                                        <td className="py-1.5 text-right">
                                          <button className="text-red-400 hover:text-red-600 text-xs" onClick={() => deleteSend(cert.id, s.id)}>✕</button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              )}
                            </div>

                            {!isAddingSend ? (
                              <Button variant="outline" size="sm" onClick={() => {
                                setAddSendCertId(cert.id)
                                setNewSend({ dateSend: '', sendOrig: false, sendCopy: false, recipientId: 0, recipientType: '', recipientName: '' })
                                setSendSearch(''); setSendSearchResults([])
                              }}>+ Dodaj wysyłkę</Button>
                            ) : (
                              <div className="border border-border rounded-lg p-4 space-y-3 bg-card">
                                <h4 className="text-sm font-medium">Nowa wysyłka</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <label className="label text-xs">Odbiorca *</label>
                                    {newSend.recipientId > 0 ? (
                                      <div className="flex items-center gap-2 p-2 border border-green-300 dark:border-green-700 rounded bg-green-50 dark:bg-green-900/20">
                                        <span className="text-sm font-medium flex-1">{newSend.recipientName}</span>
                                        <span className="text-xs text-muted-foreground">{newSend.recipientType === 'publisher' ? 'wydawca' : 'kontrahent'}</span>
                                        <button className="text-muted-foreground hover:text-foreground ml-1" onClick={() => { setNewSend(p => ({ ...p, recipientId: 0, recipientType: '', recipientName: '' })); setSendSearch('') }}>✕</button>
                                      </div>
                                    ) : (
                                      <div className="relative">
                                        <Input
                                          value={sendSearch}
                                          onChange={e => { setSendSearch(e.target.value); searchSendRecipients(e.target.value) }}
                                          placeholder="Wpisz nazwę lub skrót..."
                                          autoFocus
                                        />
                                        {sendSearchResults.length > 0 && (
                                          <div className="absolute z-10 left-0 right-0 top-full mt-1 border border-border rounded-lg shadow-md bg-card divide-y divide-border max-h-48 overflow-y-auto">
                                            {sendSearchResults.map(r => (
                                              <button
                                                key={`${r.type}-${r.id}`}
                                                className="w-full text-left px-3 py-2 hover:bg-muted transition-colors"
                                                onClick={() => { setNewSend(p => ({ ...p, recipientId: r.id, recipientType: r.type, recipientName: r.name })); setSendSearch(r.name); setSendSearchResults([]) }}
                                              >
                                                <span className="text-sm font-medium">{r.name}</span>
                                                <span className="ml-2 text-xs text-muted-foreground">{r.type === 'publisher' ? 'wydawca' : 'kontrahent'}</span>
                                              </button>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                  <div>
                                    <label className="label text-xs">Data wysyłki</label>
                                    <Input type="date" value={newSend.dateSend} onChange={e => setNewSend(p => ({ ...p, dateSend: e.target.value }))} />
                                  </div>
                                </div>
                                <div className="flex items-center gap-6">
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" checked={newSend.sendOrig} onChange={e => setNewSend(p => ({ ...p, sendOrig: e.target.checked }))} />
                                    <span className="text-sm">Wysłano oryginał</span>
                                  </label>
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" checked={newSend.sendCopy} onChange={e => setNewSend(p => ({ ...p, sendCopy: e.target.checked }))} />
                                    <span className="text-sm">Wysłano kopię</span>
                                  </label>
                                </div>
                                <div className="flex gap-2">
                                  <Button onClick={() => addSend(cert.id)} disabled={!newSend.recipientId}>Zapisz wysyłkę</Button>
                                  <Button variant="outline" onClick={() => { setAddSendCertId(null); setSendSearch(''); setSendSearchResults([]) }}>Anuluj</Button>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* ── Tytuły ──────────────────────────────────────────────────────── */}
          {activeTab === 'titles' && (
            <TitlesTab
              ownerId={id}
              ownerType="client"
              onCountLoaded={n => setTitleCount(n)}
            />
          )}

          {/* ── Faktury ─────────────────────────────────────────────────────── */}
          {activeTab === 'invoices' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                {(['issued', 'planned'] as const).map(type => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded text-sm transition-colors ${invoicesType === type ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                    onClick={() => setInvoicesType(type)}
                  >
                    {type === 'issued' ? 'Wystawione' : 'Planowane'}
                  </button>
                ))}
              </div>
              <Table>
                <thead>
                  <tr>
                    <Th>ID</Th>
                    <Th>Data wystawienia</Th>
                    <Th>Data zapłaty</Th>
                    <Th>Tytuł</Th>
                    <Th>Netto</Th>
                    <Th>VAT</Th>
                    <Th>Brutto</Th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(inv => (
                    <tr key={inv.id}>
                      <Td><Link className="text-primary hover:underline" href={`/invoices/${inv.id}`}>{inv.id}</Link></Td>
                      <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.issueDate))}</Td>
                      <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.paymentDate))}</Td>
                      <Td><Link className="text-primary hover:underline" href={`/invoices/${inv.id}`}>{inv.title}</Link></Td>
                      <Td>{inv.net.toFixed(2)} zł</Td>
                      <Td>{inv.vatPerc}% ({inv.vat.toFixed(2)} zł)</Td>
                      <Td className="font-semibold">{inv.gross.toFixed(2)} zł</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
