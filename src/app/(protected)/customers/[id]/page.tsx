 'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../../components/ui/Table'
import { Pagination } from '../../../../components/ui/Pagination'
import { ClientUpdateSchema } from '../../../../validation/client'
import { DocumentCreateSchema } from '../../../../validation/document'
import { TitlesTab } from '../../../../components/TitlesTab'

type Client = { 
  id: number
  name: string
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

type CustomerDocument = {
  id: number
  title: string
  description?: string | null
  status: 'DRAFT' | 'SIGNED'
  createdAt: string
  updatedAt: string
}

export default function ClientDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const [client, setClient] = useState<Client | null>(null)
  const [activeTab, setActiveTab] = useState<'invoices' | 'documents' | 'authors' | 'contacts' | 'taxcerts' | 'titles'>('contacts')

  const [docs, setDocs] = useState<CustomerDocument[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<''|'DRAFT'|'SIGNED'>('')
  const [sortBy, setSortBy] = useState<'id'|'title'|'status'|'createdAt'>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('desc')
  const [pageSize, setPageSize] = useState(10)

  const [formClientErrors, setFormClientErrors] = useState<string[]>([])
  const [formDocErrors, setFormDocErrors] = useState<string[]>([])
  const [formDoc, setFormDoc] = useState({ title: '', description: '', status: 'DRAFT' as 'DRAFT'|'SIGNED' })
  const [editMode, setEditMode] = useState(false)
  
  // invoices
  const [invoicesType, setInvoicesType] = useState<'issued'|'planned'>('issued')
  const [invoices, setInvoices] = useState<any[]>([])
  
  // contacts
  type LinkedContact = {
    linkId: number; isDefault: boolean; id: number
    firstName: string; middleName?: string | null; lastName: string
    email?: string | null; phoneNumber?: string | null
    contactPosition?: string | null; accountant?: number | null
  }
  const [contacts, setContacts] = useState<LinkedContact[]>([])
  const [contactSearch, setContactSearch] = useState('')
  const [contactSearchResults, setContactSearchResults] = useState<LinkedContact[]>([])
  const [contactsLoading, setContactsLoading] = useState(false)
  const [showContactSearch, setShowContactSearch] = useState(false)

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
  const [taxCerts, setTaxCerts] = useState<TaxCert[]>([])
  const [taxCertsLoading, setTaxCertsLoading] = useState(false)
  const [showAddCert, setShowAddCert] = useState(false)
  const [newCert, setNewCert] = useState({ validDate: '', requestDate: '', receiveDate: '', hasCert: false, notes: '' })
  // add send
  const [expandedCertId, setExpandedCertId] = useState<number | null>(null)
  const [addSendCertId, setAddSendCertId] = useState<number | null>(null)
  const [newSend, setNewSend] = useState({ dateSend: '', sendOrig: false, sendCopy: false, recipientId: 0, recipientType: '' as 'client' | 'publisher' | '', recipientName: '' })
  const [sendSearch, setSendSearch] = useState('')
  const [sendSearchResults, setSendSearchResults] = useState<{ id: number; name: string; type: 'client' | 'publisher' }[]>([])

  const fmtDate = (d: string | null) => d
    ? new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(d))
    : '—'

  const loadTaxCerts = async () => {
    setTaxCertsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/tax-certs`)
      if (res.ok) setTaxCerts(await res.json())
    } finally {
      setTaxCertsLoading(false)
    }
  }

  const addTaxCert = async () => {
    if (!newCert.validDate) return
    await fetch(`/api/customers/${id}/tax-certs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    const pubs = (pr.data ?? []).map((p: any) => ({ id: p.id, name: p.abbreviation || p.name, type: 'publisher' as const }))
    setSendSearchResults([...pubs, ...clients])
  }

  const addSend = async (certId: number) => {
    if (!newSend.recipientId || !newSend.recipientType) return
    await fetch(`/api/tax-certs/${certId}/sends`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId: newSend.recipientType === 'client' ? newSend.recipientId : null,
        publisherId: newSend.recipientType === 'publisher' ? newSend.recipientId : null,
        dateSend: newSend.dateSend || null,
        sendOrig: newSend.sendOrig,
        sendCopy: newSend.sendCopy,
      }),
    })
    setAddSendCertId(null)
    setNewSend({ dateSend: '', sendOrig: false, sendCopy: false, recipientId: 0, recipientType: '', recipientName: '' })
    setSendSearch('')
    setSendSearchResults([])
    await loadTaxCerts()
  }

  const deleteSend = async (certId: number, sendId: number) => {
    if (!confirm('Usunąć wpis wysyłki?')) return
    await fetch(`/api/tax-certs/${certId}/sends?sendId=${sendId}`, { method: 'DELETE' })
    await loadTaxCerts()
  }

  const loadContacts = async () => {
    setContactsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/contacts`)
      if (res.ok) setContacts(await res.json())
    } finally {
      setContactsLoading(false)
    }
  }

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
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactId })
    })
    setContactSearch('')
    setContactSearchResults([])
    setShowContactSearch(false)
    await loadContacts()
  }

  const unlinkContact = async (contactId: number) => {
    if (!confirm('Odpiąć kontakt od kontrahenta?')) return
    await fetch(`/api/customers/${id}/contacts?contactId=${contactId}`, { method: 'DELETE' })
    await loadContacts()
  }

  // authors
  const [authors, setAuthors] = useState<Author[]>([])
  const [availableAuthors, setAvailableAuthors] = useState<Author[]>([])
  const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([])
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null)
  const [authorSearchQuery, setAuthorSearchQuery] = useState('')
  const [authorsLoading, setAuthorsLoading] = useState(false)
  
  const loadInvoices = async (type: 'issued'|'planned' = invoicesType) => {
    const res = await fetch(`/api/customers/${id}/invoices?type=${type}`)
    if (!res.ok) { setInvoices([]); return }
    const json = await res.json()
    setInvoices(Array.isArray(json?.data) ? json.data : (json?.data ?? []))
  }
  
  const loadAuthors = async () => {
    setAuthorsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/authors`)
      if (res.ok) {
        const json = await res.json()
        setAuthors(Array.isArray(json?.data) ? json.data : [])
      }
    } finally {
      setAuthorsLoading(false)
    }
  }
  
  const loadAvailableAuthors = async () => {
    try {
      const res = await fetch('/api/contacts?pageSize=1000')
      if (res.ok) {
        const json = await res.json()
        const allAuthors = Array.isArray(json?.data) ? json.data : []
        // Pokaż tylko kontakty, które nie są przypisane do żadnego klienta
        setAvailableAuthors(allAuthors.filter((a: any) => !a.client))
      }
    } catch (error) {
      console.error('Error loading available authors:', error)
    }
  }
  
  const assignAuthor = async () => {
    if (!selectedAuthorId) return
    
    try {
      const res = await fetch(`/api/customers/${id}/authors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorId: selectedAuthorId })
      })
      
      if (res.ok) {
        await loadAuthors()
        await loadAvailableAuthors()
        setSelectedAuthorId(null)
        setAuthorSearchQuery('')
      } else {
        const error = await res.json()
        alert(error.error || 'Nie udało się przypisać kontaktu')
      }
    } catch (error) {
      console.error('Error assigning author:', error)
      alert('Wystąpił błąd podczas przypisywania kontaktu')
    }
  }
  
  const unassignAuthor = async (authorId: number) => {
    if (!confirm('Czy na pewno chcesz odpiąć ten kontakt od klienta?')) return
    
    try {
      const res = await fetch(`/api/customers/${id}/authors?authorId=${authorId}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        await loadAuthors()
        await loadAvailableAuthors()
      }
    } catch (error) {
      console.error('Error unassigning author:', error)
    }
  }


  const loadClient = async () => {
    const resClient = await fetch(`/api/customers/${id}`)
    const c = await resClient.json()
    setClient(c)
  }

  const loadDocs = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      status,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const resDocs = await fetch(`/api/customers/${id}/documents?${qs.toString()}`)
    const d = await resDocs.json()
    console.debug('[ClientDocs] fetch response:', { type: Array.isArray(d) ? 'array' : typeof d, d })
    if (Array.isArray(d)) {
      setDocs(d)
      const total = d.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(d?.data) ? d.data : []
      setDocs(arr)
      const metaFromServer = d?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { if (id) { loadClient(); loadDocs(1); loadAuthors(); loadAvailableAuthors(); loadContacts(); loadTaxCerts() } }, [id])
  useEffect(()=>{ if (id) loadInvoices(invoicesType) }, [id, invoicesType])
  useEffect(() => { loadDocs(1) }, [search, status, sortBy, sortOrder, pageSize])
  
  // Filtruj dostępne kontakty na podstawie wyszukiwania
  useEffect(() => {
    if (!authorSearchQuery.trim()) {
      setFilteredAuthors(availableAuthors)
    } else {
      const query = authorSearchQuery.toLowerCase()
      const filtered = availableAuthors.filter(author => {
        const fullName = `${author.firstName} ${author.middleName || ''} ${author.lastName}`.toLowerCase()
        const email = `${author.workEmail || ''} ${author.personalEmail || ''}`.toLowerCase()
        return fullName.includes(query) || email.includes(query)
      })
      setFilteredAuthors(filtered)
    }
  }, [authorSearchQuery, availableAuthors])

  const addDoc = async () => {
    const parsed = DocumentCreateSchema.safeParse(formDoc)
    if (!parsed.success) {
      setFormDocErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormDocErrors([])
    await fetch(`/api/customers/${id}/documents`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    setFormDoc({ title: '', description: '', status: 'DRAFT' })
    await loadDocs(1)
  }

  const removeDoc = async (docId: number) => {
    await fetch(`/api/documents/${docId}`, { method: 'DELETE' })
    await loadDocs(meta.page)
  }

  const updateClient = async () => {
    if (!client) return
    const parsed = ClientUpdateSchema.safeParse({ 
      name: client.name, 
      email: client.email ?? '', 
      phone: client.phone ?? '',
      address: client.address ?? '',
      city: client.city ?? '',
      postalCode: client.postalCode ?? '',
      country: client.country ?? '',
      nip: client.nip ?? '',
      regon: client.regon ?? '',
      legalForm: client.legalForm ?? '',
      bankAccount: client.bankAccount ?? '',
      notes: client.notes ?? ''
    })
    if (!parsed.success) {
      setFormClientErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormClientErrors([])
    await fetch(`/api/customers/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    await loadClient()
    setEditMode(false)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  if (!client) return <p className="text-center text-muted-foreground py-8">Ładowanie...</p>

  return (
    <div className="space-y-6">
      {/* Client Details Card - Read Only */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Szczegóły klienta</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.history.back()}>
              Powrót
            </Button>
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>
                Edytuj
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={() => { setEditMode(false); loadClient() }}>
                  Anuluj
                </Button>
                <Button variant="primary" onClick={updateClient}>
                  Zapisz
                </Button>
              </>
            )}
          </div>
        </div>

        {formClientErrors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
              {formClientErrors.map((e, i) => (<li key={i}>{e}</li>))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Podstawowe dane */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Podstawowe dane
            </h3>
            <div>
              <label className="label text-xs">Nazwa</label>
              {editMode ? (
                <Input value={client.name} onChange={e => setClient({ ...client, name: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{client.name}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Email</label>
              {editMode ? (
                <Input value={client.email ?? ''} onChange={e => setClient({ ...client, email: e.target.value })} />
              ) : (
                <p className="text-base">{client.email || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Telefon</label>
              {editMode ? (
                <Input value={client.phone ?? ''} onChange={e => setClient({ ...client, phone: e.target.value })} />
              ) : (
                <p className="text-base">{client.phone || '-'}</p>
              )}
            </div>
          </div>

          {/* Adres */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Adres
            </h3>
            <div>
              <label className="label text-xs">Ulica i numer</label>
              {editMode ? (
                <Input value={client.address ?? ''} onChange={e => setClient({ ...client, address: e.target.value })} />
              ) : (
                <p className="text-base">{client.address || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Miasto</label>
              {editMode ? (
                <Input value={client.city ?? ''} onChange={e => setClient({ ...client, city: e.target.value })} />
              ) : (
                <p className="text-base">{client.city || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Kod pocztowy</label>
              {editMode ? (
                <Input value={client.postalCode ?? ''} onChange={e => setClient({ ...client, postalCode: e.target.value })} />
              ) : (
                <p className="text-base">{client.postalCode || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Kraj</label>
              {editMode ? (
                <Input value={client.country ?? ''} onChange={e => setClient({ ...client, country: e.target.value })} />
              ) : (
                <p className="text-base">{client.country || '-'}</p>
              )}
            </div>
          </div>

          {/* Dane firmowe */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Dane firmowe
            </h3>
            <div>
              <label className="label text-xs">NIP</label>
              {editMode ? (
                <Input value={client.nip ?? ''} onChange={e => setClient({ ...client, nip: e.target.value })} />
              ) : (
                <p className="text-base">{client.nip || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">REGON</label>
              {editMode ? (
                <Input value={client.regon ?? ''} onChange={e => setClient({ ...client, regon: e.target.value })} />
              ) : (
                <p className="text-base">{client.regon || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Forma prawna</label>
              {editMode ? (
                <Input value={client.legalForm ?? ''} onChange={e => setClient({ ...client, legalForm: e.target.value })} />
              ) : (
                <p className="text-base">{client.legalForm || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Konto bankowe</label>
              {editMode ? (
                <Input value={client.bankAccount ?? ''} onChange={e => setClient({ ...client, bankAccount: e.target.value })} />
              ) : (
                <p className="text-sm font-mono">{client.bankAccount || '-'}</p>
              )}
            </div>
          </div>
        </div>

        {/* Notatki - full width */}
        <div className="mt-6 pt-6 border-t border-border">
          <div>
            <label className="label text-xs">Notatki</label>
            {editMode ? (
              <textarea 
                className="input w-full min-h-[80px]" 
                value={client.notes ?? ''} 
                onChange={e => setClient({ ...client, notes: e.target.value })}
              />
            ) : (
              <p className="text-base whitespace-pre-wrap">{client.notes || '-'}</p>
            )}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Utworzono:</span> {client.createdAt ? new Intl.DateTimeFormat('pl-PL', { 
              year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' 
            }).format(new Date(client.createdAt)) : '-'}
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Card className="p-6">
        <div className="border-b border-gray-200 dark:border-gray-700 -mx-6 px-6">
          <nav className="flex -mb-px">
            {([
              { key: 'contacts', label: `Kontakty (${contacts.length})` },
              { key: 'taxcerts', label: `Certyfikaty rezydencji (${taxCerts.length})` },
              { key: 'titles', label: 'Tytuły' },
              { key: 'documents', label: 'Dokumenty' },
              { key: 'invoices', label: 'Faktury' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === key
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-muted-foreground hover:text-card-foreground hover:border-border'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Kontakty kontrahenta</h2>
                <Button variant="primary" onClick={() => setShowContactSearch(!showContactSearch)}>
                  {showContactSearch ? 'Anuluj' : '+ Dodaj kontakt'}
                </Button>
              </div>

              {showContactSearch && (
                <div className="p-4 border border-border rounded-lg space-y-2 bg-muted/30">
                  <label className="label text-xs">Szukaj kontaktu po nazwisku lub emailu</label>
                  <Input
                    value={contactSearch}
                    onChange={(e) => {
                      setContactSearch(e.target.value)
                      searchContacts(e.target.value)
                    }}
                    placeholder="Wpisz nazwisko lub email..."
                    autoFocus
                  />
                  {contactSearchResults.length > 0 && (
                    <div className="border border-border rounded divide-y divide-border bg-card max-h-60 overflow-y-auto">
                      {contactSearchResults.map((c) => (
                        <button
                          key={c.id}
                          className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm"
                          onClick={() => linkContact(c.id)}
                        >
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
                    {contacts.map((c) => (
                      <tr key={c.linkId}>
                        <Td>
                          <Link href={`/contacts/${c.id}`} className="text-primary-600 hover:underline font-medium">
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

          {activeTab === 'taxcerts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Certyfikaty rezydencji podatkowej</h2>
                <Button variant="primary" onClick={() => { setShowAddCert(!showAddCert); setExpandedCertId(null) }}>
                  {showAddCert ? 'Anuluj' : '+ Nowy certyfikat'}
                </Button>
              </div>

              {/* Formularz nowego certyfikatu */}
              {showAddCert && (
                <div className="p-4 border-2 border-primary-200 dark:border-primary-800 rounded-lg space-y-4 bg-primary-50/30 dark:bg-primary-900/10">
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
                    <Button variant="primary" onClick={addTaxCert}>Zapisz certyfikat</Button>
                    <Button variant="secondary" onClick={() => setShowAddCert(false)}>Anuluj</Button>
                  </div>
                </div>
              )}

              {/* Lista certyfikatów */}
              {taxCertsLoading ? (
                <p className="text-muted-foreground text-sm py-4">Ładowanie...</p>
              ) : taxCerts.length === 0 ? (
                <p className="text-muted-foreground text-sm py-8 text-center">Brak certyfikatów rezydencji</p>
              ) : (
                <div className="border border-border rounded-lg overflow-hidden">
                  {taxCerts.map((cert, idx) => {
                    const isExpanded = expandedCertId === cert.id
                    const isAddingSend = addSendCertId === cert.id
                    return (
                      <div key={cert.id} className={idx > 0 ? 'border-t border-border' : ''}>
                        {/* Wiersz certyfikatu */}
                        <div
                          className={`flex items-center gap-3 px-4 py-3 cursor-pointer select-none transition-colors ${isExpanded ? 'bg-muted/50' : 'hover:bg-muted/30'}`}
                          onClick={() => { setExpandedCertId(isExpanded ? null : cert.id); setAddSendCertId(null); setSendSearch(''); setSendSearchResults([]) }}
                        >
                          {/* Chevron */}
                          <span className={`text-muted-foreground transition-transform shrink-0 ${isExpanded ? 'rotate-90' : ''}`}>▶</span>

                          {/* Status */}
                          {(() => {
                            const valid = new Date(cert.validDate) >= new Date(new Date().toDateString())
                            return (
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shrink-0 ${valid ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                                {valid ? '✓ Ważny' : '✗ Wygasły'}
                              </span>
                            )
                          })()}

                          {/* Daty */}
                          <div className="flex items-center gap-4 text-sm flex-1 min-w-0">
                            <span className="font-medium shrink-0">Ważny do: {fmtDate(cert.validDate)}</span>
                            {cert.requestDate && <span className="text-muted-foreground shrink-0 hidden md:inline">Wniosek: {fmtDate(cert.requestDate)}</span>}
                            {cert.receiveDate && <span className="text-muted-foreground shrink-0 hidden md:inline">Otrzymano: {fmtDate(cert.receiveDate)}</span>}
                            {cert.notes && <span className="text-muted-foreground truncate text-xs">{cert.notes}</span>}
                          </div>

                          {/* Akcje */}
                          <div className="flex items-center gap-3 shrink-0 ml-auto" onClick={e => e.stopPropagation()}>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
                              {cert.sendLog.length} wysyłek
                            </span>
                            {cert.hasFile && (
                              <a href={`/api/tax-certs/${cert.id}/file`} target="_blank" rel="noreferrer"
                                className="text-xs text-primary-600 hover:underline">PDF</a>
                            )}
                            <button
                              className="text-xs text-red-400 hover:text-red-600 px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
                              onClick={() => deleteTaxCert(cert.id)}
                            >Usuń</button>
                          </div>
                        </div>

                        {/* Panel rozwinięty — historia wysyłek */}
                        {isExpanded && (
                          <div className="bg-muted/20 border-t border-border px-6 py-4 space-y-4">
                            {/* Dodatkowe szczegóły */}
                            {(cert.requestDate || cert.receiveDate || cert.notes) && (
                              <div className="flex gap-6 text-sm text-muted-foreground md:hidden">
                                {cert.requestDate && <span>Wniosek: {fmtDate(cert.requestDate)}</span>}
                                {cert.receiveDate && <span>Otrzymano: {fmtDate(cert.receiveDate)}</span>}
                                {cert.notes && <span>{cert.notes}</span>}
                              </div>
                            )}

                            {/* Tabela wysyłek */}
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
                                    {cert.sendLog.map((s) => (
                                      <tr key={s.id} className="border-b border-border/50 last:border-0">
                                        <td className="py-1.5 pr-4 text-muted-foreground whitespace-nowrap">{fmtDate(s.dateSend)}</td>
                                        <td className="py-1.5 pr-4 font-medium">
                                          {s.recipient?.name ?? <span className="text-muted-foreground italic">—</span>}
                                        </td>
                                        <td className="py-1.5 pr-4">
                                          <span className="flex gap-2">
                                            {s.sendOrig && <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-1.5 py-0.5 rounded">oryginał</span>}
                                            {s.sendCopy && <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-1.5 py-0.5 rounded">kopia</span>}
                                          </span>
                                        </td>
                                        <td className="py-1.5 text-right">
                                          <button className="text-red-400 hover:text-red-600 text-xs" onClick={() => deleteSend(cert.id, s.id)} title="Usuń">✕</button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              )}
                            </div>

                            {/* Formularz dodawania wysyłki */}
                            {!isAddingSend ? (
                              <Button variant="secondary" onClick={() => {
                                setAddSendCertId(cert.id)
                                setNewSend({ dateSend: '', sendOrig: false, sendCopy: false, recipientId: 0, recipientType: '', recipientName: '' })
                                setSendSearch('')
                                setSendSearchResults([])
                              }}>
                                + Dodaj wysyłkę
                              </Button>
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
                                          onChange={(e) => { setSendSearch(e.target.value); searchSendRecipients(e.target.value) }}
                                          placeholder="Wpisz nazwę lub skrót..."
                                          autoFocus
                                        />
                                        {sendSearchResults.length > 0 && (
                                          <div className="absolute z-10 left-0 right-0 top-full mt-1 border border-border rounded-lg shadow-md bg-card divide-y divide-border max-h-48 overflow-y-auto">
                                            {sendSearchResults.map((r) => (
                                              <button key={`${r.type}-${r.id}`}
                                                className="w-full text-left px-3 py-2 hover:bg-muted transition-colors"
                                                onClick={() => { setNewSend(p => ({ ...p, recipientId: r.id, recipientType: r.type, recipientName: r.name })); setSendSearch(r.name); setSendSearchResults([]) }}>
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
                                  <Button variant="primary" onClick={() => addSend(cert.id)} disabled={!newSend.recipientId}>Zapisz wysyłkę</Button>
                                  <Button variant="secondary" onClick={() => { setAddSendCertId(null); setSendSearch(''); setSendSearchResults([]) }}>Anuluj</Button>
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

          {activeTab === 'titles' && (
            <TitlesTab ownerId={id} ownerType="client" />
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Dokumenty klienta</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="label">Szukaj</label>
                  <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tytuł/Opis" />
                </div>
                <div>
                  <label className="label">Status</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={status} onChange={e => setStatus(e.target.value as any)}>
                    <option value="">Wszystkie</option>
                    <option value="DRAFT">DRAFT</option>
                    <option value="SIGNED">SIGNED</option>
                  </select>
                </div>
                <div>
                  <label className="label">Sortuj wg</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortBy} onChange={e => setSortBy(e.target.value as any)}>
                    <option value="createdAt">Utworzono</option>
                    <option value="title">Tytuł</option>
                    <option value="status">Status</option>
                    <option value="id">ID</option>
                  </select>
                </div>
                <div>
                  <label className="label">Kierunek</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortOrder} onChange={e => setSortOrder(e.target.value as any)}>
                    <option value="asc">Rosnąco</option>
                    <option value="desc">Malejąco</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="label">Tytuł</label>
                  <Input value={formDoc.title} onChange={e => setFormDoc(prev => ({ ...prev, title: e.target.value }))} />
                </div>
                <div>
                  <label className="label">Opis</label>
                  <Input value={formDoc.description} onChange={e => setFormDoc(prev => ({ ...prev, description: e.target.value }))} />
                </div>
                <div>
                  <label className="label">Status</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={formDoc.status} onChange={e => setFormDoc(prev => ({ ...prev, status: e.target.value as any }))}>
                    <option value="DRAFT">DRAFT</option>
                    <option value="SIGNED">SIGNED</option>
                  </select>
                </div>
              </div>
              {formDocErrors.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                  {formDocErrors.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
              )}
              <Button variant="primary" onClick={addDoc}>Dodaj dokument</Button>

              <div className="mt-4 space-y-3">
                {loading ? (
                  <p>Ładowanie...</p>
                ) : (
                  <>
                    <Table>
                      <thead>
                        <tr>
                          <Th onClick={() => toggleSort('id')} active={sortBy === 'id'} order={sortOrder}>ID</Th>
                          <Th onClick={() => toggleSort('title')} active={sortBy === 'title'} order={sortOrder}>Tytuł</Th>
                          <Th onClick={() => toggleSort('status')} active={sortBy === 'status'} order={sortOrder}>Status</Th>
                          <Th onClick={() => toggleSort('createdAt')} active={sortBy === 'createdAt'} order={sortOrder}>Data</Th>
                          <th className="px-4 py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(Array.isArray(docs) ? docs : []).map(doc => (
                          <tr key={doc.id}>
                            <Td>{doc.id}</Td>
                            <Td>{doc.title}</Td>
                            <Td>{doc.status}</Td>
                            <Td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(doc.createdAt))}</Td>
                            <Td>
                              <Button onClick={() => removeDoc(doc.id)}>Usuń</Button>
                            </Td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Pagination page={meta.page} pages={meta.pages} onPage={(p) => loadDocs(p)} />
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Faktury</h2>
              <div className="flex gap-2">
                <button 
                  className={`px-4 py-2 rounded transition-colors ${
                    invoicesType === 'issued' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`} 
                  onClick={() => setInvoicesType('issued')}
                >
                  Wystawione
                </button>
                <button 
                  className={`px-4 py-2 rounded transition-colors ${
                    invoicesType === 'planned' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`} 
                  onClick={() => setInvoicesType('planned')}
                >
                  Planowane
                </button>
              </div>
              <div className="mt-3">
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
                        <Td><Link className="text-primary-600 hover:underline" href={`/invoices/${inv.id}`}>{inv.id}</Link></Td>
                        <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.issueDate))}</Td>
                        <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.paymentDate))}</Td>
                        <Td><Link className="text-primary-600 hover:underline" href={`/invoices/${inv.id}`}>{inv.title}</Link></Td>
                        <Td>{inv.net.toFixed(2)} zł</Td>
                        <Td>{inv.vatPerc}% ({inv.vat.toFixed(2)} zł)</Td>
                        <Td className="font-semibold">{inv.gross.toFixed(2)} zł</Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
