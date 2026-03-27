'use client'
import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '@/components/ui/Table'
import { ChevronLeft, Pencil, Plus, Trash2, X } from 'lucide-react'
import { AgreementEventBadge } from '@/components/AgreementEventBadge'

// ─── Typy danych ───────────────────────────────────────────────────────────────

type DictEntry  = { id: number; descEn?: string; descPL?: string; abbPL?: string; abb?: string }
type DictSimple = { code: string; desc?: string; descPL?: string }
type RoyRate    = { step: number; copiesMax: number | null; rate: number }

type AgreementRight = {
  id: number; sourceId: number | null
  rightFormId: number | null; rightForm: DictEntry | null
  priceTypeId: number | null; priceType: DictEntry | null
  royPriceTypeId: number | null; royPriceType: DictEntry | null
  royAccountIntervalId: number | null; royAccountInterval: (DictEntry & { abb?: string }) | null
  distributionTypeId: number | null; distributionType: DictEntry | null
  royRates: RoyRate[]
}
type AgreementEvent = {
  id: number; eventCode: number; eventDesc: string | null
  eventDate: string | null; endDate: string | null; noOfCopies: number | null
}
type AgreementAdvance = {
  id: number; instalment: number | null
  advTermId: number | null; advTerm: DictEntry | null
  advTypeId: number | null; advType: DictEntry | null
  amount: number; termDate: string | null
}
type Agreement = {
  id: number; sourceId: number | null
  publisherId: number | null
  publisher: { id: number; name: string; abbreviation?: string | null; email?: string | null; phone?: string | null } | null
  clientId: number | null
  client:   { id: number; name: string; abbreviation?: string | null; email?: string | null; phone?: string | null } | null
  titleId: number | null
  title:    { id: number; title: string; isbn?: string | null } | null
  agrDate: string; validYY: number | null; pubTermMM: number | null
  maxCopies: number | null; minCopies: number | null
  copiesToOwner: number | null; copiesToGraal: number | null
  currencyCode: string | null; languageCode: string | null
  commission: number | null; commissionMaterials: number | null
  estimatedCopyPrice: number | null; graalShare: number | null; graalRepresent: boolean
  clientReference: string | null; localTitle: string | null; localIsbn: string | null; localPubDate: string | null
  agrDoc: string | null; remarks: string | null
  dateMod: string | null; userMod: string | null; lastEventCode: number | null
  rights: AgreementRight[]; events: AgreementEvent[]; advances: AgreementAdvance[]
}

// ─── Typy formularza edycji ────────────────────────────────────────────────────

type EditRoyRate = { copiesMax: string; rate: string }
type EditRight = {
  _key: number
  rightFormId: string; priceTypeId: string; royPriceTypeId: string
  royAccountIntervalId: string; distributionTypeId: string
  royRates: EditRoyRate[]
}
type EditAdvance = {
  _key: number
  advTypeId: string; instalment: string; advTermId: string; termDate: string; amount: string
}
type EditForm = {
  publisherId: number | null; publisherName: string
  clientId:    number | null; clientName:    string
  titleId:     number | null; titleName:     string
  agrDate: string; validYY: string; pubTermMM: string
  maxCopies: string; minCopies: string; copiesToOwner: string; copiesToGraal: string
  currencyCode: string; languageCode: string
  commission: string; commissionMaterials: string; estimatedCopyPrice: string; graalShare: string
  graalRepresent: boolean
  clientReference: string; localTitle: string; localIsbn: string; localPubDate: string
  agrDoc: string; remarks: string
  rights: EditRight[]
  advances: EditAdvance[]
}

type AllDicts = {
  rightForms: DictEntry[]; priceTypes: DictEntry[]; royPriceTypes: DictEntry[]
  royAccountIntervals: (DictEntry & { abb?: string })[]; distTypes: DictEntry[]
  advTerms: DictEntry[]; advTypes: DictEntry[]
  currencies: DictSimple[]; languages: DictSimple[]
}

// ─── EntitySearch ──────────────────────────────────────────────────────────────

type SearchResult = { id: number; label: string; sub?: string }
function EntitySearch({ label, placeholder, value, displayValue, onSelect, onClear, fetchUrl, mapResult }: {
  label: string; placeholder: string; value: number | null; displayValue: string
  onSelect: (id: number, label: string) => void; onClear: () => void
  fetchUrl: (q: string) => string; mapResult: (raw: any) => SearchResult
}) {
  const [query, setQuery]     = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen]       = useState(false)
  const [loading, setLoading] = useState(false)
  const debounce = useRef<ReturnType<typeof setTimeout>>()
  const wrapRef  = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const h = (e: MouseEvent) => { if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])
  const search = (q: string) => {
    setQuery(q); clearTimeout(debounce.current)
    if (!q.trim()) { setResults([]); setOpen(false); return }
    debounce.current = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(fetchUrl(encodeURIComponent(q)))
        const json = await res.json()
        setResults((json.data ?? json.items ?? json).slice(0, 15).map(mapResult)); setOpen(true)
      } finally { setLoading(false) }
    }, 250)
  }
  if (value) return (
    <div>
      <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
      <div className="flex items-center gap-2 rounded-md border border-input bg-muted/40 px-3 py-2 text-sm">
        <span className="flex-1 font-medium">{displayValue}</span>
        <button type="button" onClick={onClear} className="text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>
      </div>
    </div>
  )
  return (
    <div ref={wrapRef} className="relative">
      <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
      <Input value={query} onChange={e => search(e.target.value)} placeholder={placeholder} onFocus={() => query && setOpen(true)} />
      {loading && <p className="text-xs text-muted-foreground mt-1">Szukam…</p>}
      {open && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover shadow-lg max-h-60 overflow-auto">
          {results.map(r => (
            <button key={r.id} type="button" className="w-full px-3 py-2 text-left text-sm hover:bg-muted/60 flex flex-col"
              onClick={() => { onSelect(r.id, r.label); setQuery(''); setOpen(false) }}>
              <span className="font-medium">{r.label}</span>
              {r.sub && <span className="text-xs text-muted-foreground">{r.sub}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Pomocniki ─────────────────────────────────────────────────────────────────

const INPUT_CLS = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
let _key = 0
const nextKey = () => ++_key

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground mb-0.5">{label}</p>
      <p className="text-sm font-medium">{children ?? <span className="text-muted-foreground">—</span>}</p>
    </div>
  )
}
function fmtDate(iso: string | null | undefined) {
  if (!iso) return null
  return new Intl.DateTimeFormat('pl-PL').format(new Date(iso))
}
function fmtDateTime(iso: string | null | undefined) {
  if (!iso) return null
  return new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(iso))
}
function isoDate(iso: string | null | undefined) { return iso ? iso.slice(0, 10) : '' }

function Sel({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return <select value={value} onChange={e => onChange(e.target.value)} className={INPUT_CLS}>{children}</select>
}

// ─── Główny komponent ──────────────────────────────────────────────────────────

type Tab = 'info' | 'rights' | 'events' | 'advances'

export default function AgreementDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const t = useTranslations()
  const [agr, setAgr]         = useState<Agreement | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const [tab, setTab]         = useState<Tab>('info')
  const [editing, setEditing] = useState(false)
  const [saving, setSaving]   = useState(false)
  const [saveErr, setSaveErr] = useState<string | null>(null)
  const [form, setForm]       = useState<EditForm | null>(null)
  const [dicts, setDicts]     = useState<AllDicts | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetch(`/api/agreements/${id}`)
      .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
      .then(setAgr).catch(e => setError(String(e))).finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    fetch('/api/agreements/dicts').then(r => r.json()).then(d => setDicts({
      rightForms:          d.rightForms         ?? [],
      priceTypes:          d.priceTypes         ?? [],
      royPriceTypes:       d.royPriceTypes      ?? [],
      royAccountIntervals: d.royAccountIntervals ?? [],
      distTypes:           d.distTypes          ?? [],
      advTerms:            d.advTerms           ?? [],
      advTypes:            d.advTypes           ?? [],
      currencies:          d.currencies         ?? [],
      languages:           d.languages          ?? [],
    }))
  }, [])

  const startEdit = () => {
    if (!agr) return
    setForm({
      publisherId: agr.publisherId, publisherName: agr.publisher?.name ?? '',
      clientId:    agr.clientId,    clientName:    agr.client?.name    ?? '',
      titleId:     agr.titleId,     titleName:     agr.title?.title    ?? '',
      agrDate: isoDate(agr.agrDate), validYY: String(agr.validYY ?? ''), pubTermMM: String(agr.pubTermMM ?? ''),
      maxCopies: String(agr.maxCopies ?? ''), minCopies: String(agr.minCopies ?? ''),
      copiesToOwner: String(agr.copiesToOwner ?? ''), copiesToGraal: String(agr.copiesToGraal ?? ''),
      currencyCode: agr.currencyCode ?? '', languageCode: agr.languageCode ?? '',
      commission: String(agr.commission ?? ''), commissionMaterials: String(agr.commissionMaterials ?? ''),
      estimatedCopyPrice: String(agr.estimatedCopyPrice ?? ''), graalShare: String(agr.graalShare ?? ''),
      graalRepresent: agr.graalRepresent,
      clientReference: agr.clientReference ?? '', localTitle: agr.localTitle ?? '',
      localIsbn: agr.localIsbn ?? '', localPubDate: isoDate(agr.localPubDate),
      agrDoc: agr.agrDoc ?? '', remarks: agr.remarks ?? '',
      rights: agr.rights.map(r => ({
        _key: nextKey(),
        rightFormId:          String(r.rightFormId          ?? ''),
        priceTypeId:          String(r.priceTypeId          ?? ''),
        royPriceTypeId:       String(r.royPriceTypeId       ?? ''),
        royAccountIntervalId: String(r.royAccountIntervalId ?? ''),
        distributionTypeId:   String(r.distributionTypeId   ?? ''),
        royRates: r.royRates.length > 0
          ? r.royRates.map(rr => ({ copiesMax: String(rr.copiesMax ?? ''), rate: String(rr.rate) }))
          : [{ copiesMax: '', rate: '' }],
      })),
      advances: agr.advances.map(a => ({
        _key: nextKey(),
        advTypeId:  String(a.advTypeId  ?? ''),
        instalment: String(a.instalment ?? ''),
        advTermId:  String(a.advTermId  ?? ''),
        termDate:   isoDate(a.termDate),
        amount:     String(a.amount),
      })),
    })
    setEditing(true); setSaveErr(null)
  }

  const cancelEdit = () => { setEditing(false); setForm(null); setSaveErr(null) }

  const handleSave = async () => {
    if (!form || !agr) return
    setSaving(true); setSaveErr(null)
    try {
      const body = {
        publisherId: form.publisherId, clientId: form.clientId, titleId: form.titleId,
        agrDate: form.agrDate || undefined,
        validYY:             form.validYY             !== '' ? Number(form.validYY)             : null,
        pubTermMM:           form.pubTermMM           !== '' ? Number(form.pubTermMM)           : null,
        maxCopies:           form.maxCopies           !== '' ? Number(form.maxCopies)           : null,
        minCopies:           form.minCopies           !== '' ? Number(form.minCopies)           : null,
        copiesToOwner:       form.copiesToOwner       !== '' ? Number(form.copiesToOwner)       : null,
        copiesToGraal:       form.copiesToGraal       !== '' ? Number(form.copiesToGraal)       : null,
        currencyCode: form.currencyCode || null, languageCode: form.languageCode || null,
        commission:          form.commission          !== '' ? Number(form.commission)          : null,
        commissionMaterials: form.commissionMaterials !== '' ? Number(form.commissionMaterials) : null,
        estimatedCopyPrice:  form.estimatedCopyPrice  !== '' ? Number(form.estimatedCopyPrice)  : null,
        graalShare:          form.graalShare          !== '' ? Number(form.graalShare)          : null,
        graalRepresent: form.graalRepresent,
        clientReference: form.clientReference || null, localTitle: form.localTitle || null,
        localIsbn: form.localIsbn || null, localPubDate: form.localPubDate || null,
        agrDoc: form.agrDoc || null, remarks: form.remarks || null,
        rights: form.rights.map(r => ({
          rightFormId:          r.rightFormId          || null,
          priceTypeId:          r.priceTypeId          || null,
          royPriceTypeId:       r.royPriceTypeId       || null,
          royAccountIntervalId: r.royAccountIntervalId || null,
          distributionTypeId:   r.distributionTypeId   || null,
          royRates: r.royRates.filter(rr => rr.rate !== '').map(rr => ({
            copiesMax: rr.copiesMax || null, rate: rr.rate,
          })),
        })),
        advances: form.advances.filter(a => a.amount !== '').map(a => ({
          advTypeId:  a.advTypeId  || null,
          instalment: a.instalment || null,
          advTermId:  a.advTermId  || null,
          termDate:   a.termDate   || null,
          amount:     a.amount,
        })),
      }
      const res = await fetch(`/api/agreements/${agr.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      })
      if (!res.ok) { setSaveErr((await res.json()).error ?? 'Błąd zapisu'); return }
      const updated = await fetch(`/api/agreements/${agr.id}`).then(r => r.json())
      setAgr(updated); setEditing(false); setForm(null)
    } finally { setSaving(false) }
  }

  // Helpers do aktualizacji formularza
  const updField = (key: keyof EditForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => f ? { ...f, [key]: e.target.value } : f)

  const updRight = (idx: number, key: keyof EditRight) => (val: string) =>
    setForm(f => { if (!f) return f; const rights = [...f.rights]; (rights[idx] as any)[key] = val; return { ...f, rights } })

  const updRoyRate = (ri: number, rri: number, key: keyof EditRoyRate, val: string) =>
    setForm(f => {
      if (!f) return f
      const rights = [...f.rights]
      const royRates = [...rights[ri].royRates]
      royRates[rri] = { ...royRates[rri], [key]: val }
      rights[ri] = { ...rights[ri], royRates }
      return { ...f, rights }
    })

  const addRight = () => setForm(f => f ? { ...f, rights: [...f.rights, {
    _key: nextKey(), rightFormId: '', priceTypeId: '', royPriceTypeId: '',
    royAccountIntervalId: '', distributionTypeId: '', royRates: [{ copiesMax: '', rate: '' }],
  }]} : f)

  const removeRight = (idx: number) => setForm(f => f ? { ...f, rights: f.rights.filter((_, i) => i !== idx) } : f)

  const addRoyRate = (ri: number) => setForm(f => {
    if (!f) return f
    const rights = [...f.rights]
    rights[ri] = { ...rights[ri], royRates: [...rights[ri].royRates, { copiesMax: '', rate: '' }] }
    return { ...f, rights }
  })

  const removeRoyRate = (ri: number, rri: number) => setForm(f => {
    if (!f) return f
    const rights = [...f.rights]
    rights[ri] = { ...rights[ri], royRates: rights[ri].royRates.filter((_, i) => i !== rri) }
    return { ...f, rights }
  })

  const updAdvance = (idx: number, key: keyof EditAdvance, val: string) =>
    setForm(f => { if (!f) return f; const advances = [...f.advances]; (advances[idx] as any)[key] = val; return { ...f, advances } })

  const addAdvance = () => setForm(f => f ? { ...f, advances: [...f.advances, {
    _key: nextKey(), advTypeId: '', instalment: '', advTermId: '', termDate: '', amount: '',
  }]} : f)

  const removeAdvance = (idx: number) => setForm(f => f ? { ...f, advances: f.advances.filter((_, i) => i !== idx) } : f)

  if (loading) return <div className="p-8 text-center text-muted-foreground">Ładowanie…</div>
  if (error || !agr) return (
    <div className="space-y-4">
      <Button variant="outline" onClick={() => router.back()} className="gap-1"><ChevronLeft className="h-4 w-4" />Powrót</Button>
      <Card className="p-8 text-center text-destructive">{error || 'Nie znaleziono umowy'}</Card>
    </div>
  )

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: 'info',     label: 'Informacje ogólne' },
    { key: 'rights',   label: 'Prawa',    count: editing ? form?.rights.length   : agr.rights.length   },
    { key: 'advances', label: 'Zaliczki', count: editing ? form?.advances.length : agr.advances.length },
    { key: 'events',   label: 'Zdarzenia', count: agr.events.length  },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="gap-1">
            <ChevronLeft className="h-4 w-4" />Powrót
          </Button>
          <div>
            <h1 className="text-xl font-bold leading-tight">Umowa #{agr.sourceId ?? agr.id}</h1>
            <p className="text-xs text-muted-foreground">
              {agr.publisher
                ? <Link href={`/publishers/${agr.publisher.id}`} className="hover:underline font-medium">{agr.publisher.abbreviation ?? agr.publisher.name}</Link>
                : '—'}
              {' → '}
              {agr.title
                ? <Link href={`/titles/${agr.title.id}`} className="hover:underline">{agr.title.title}</Link>
                : agr.localTitle ?? '—'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AgreementEventBadge code={agr.lastEventCode} />
          {agr.currencyCode && <span className="font-mono text-sm bg-muted rounded px-2 py-0.5">{agr.currencyCode}</span>}
          {!editing
            ? <Button size="sm" variant="outline" onClick={startEdit} className="gap-1"><Pencil className="h-3.5 w-3.5" />Edytuj</Button>
            : <div className="flex items-center gap-2">
                <Button size="sm" onClick={handleSave} disabled={saving}>{saving ? 'Zapisywanie…' : 'Zapisz zmiany'}</Button>
                <Button size="sm" variant="outline" onClick={cancelEdit} disabled={saving}>Anuluj</Button>
              </div>
          }
        </div>
      </div>

      {saveErr && <p className="text-sm text-destructive bg-destructive/10 rounded px-3 py-2">{saveErr}</p>}

      {/* Tabs */}
      <Card className="p-0 overflow-hidden">
        <div className="border-b border-border px-4">
          <nav className="flex -mb-px gap-1">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  tab === t.key ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}>
                {t.label}
                {t.count != null && <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-xs ${tab === t.key ? 'bg-primary/10' : 'bg-muted'}`}>{t.count}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">

          {/* ── Info — widok ────────────────────────────────────────────── */}
          {tab === 'info' && !editing && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Strony umowy</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-border p-3 space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Wydawca</p>
                    {agr.publisher ? <>
                      <Link href={`/publishers/${agr.publisher.id}`} className="font-semibold hover:underline text-sm">{agr.publisher.name}</Link>
                      {agr.publisher.email && <p className="text-xs text-muted-foreground">{agr.publisher.email}</p>}
                    </> : <p className="text-sm text-muted-foreground">—</p>}
                  </div>
                  <div className="rounded-lg border border-border p-3 space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Klient / właściciel praw</p>
                    {agr.client ? <>
                      <Link href={`/customers/${agr.client.id}`} className="font-semibold hover:underline text-sm">{agr.client.name}</Link>
                      {agr.client.email && <p className="text-xs text-muted-foreground">{agr.client.email}</p>}
                    </> : <p className="text-sm text-muted-foreground">—</p>}
                  </div>
                  <div className="rounded-lg border border-border p-3 space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Tytuł</p>
                    {agr.title ? <>
                      <Link href={`/titles/${agr.title.id}`} className="font-semibold hover:underline text-sm">{agr.title.title}</Link>
                      {agr.title.isbn && <p className="text-xs text-muted-foreground">ISBN: {agr.title.isbn}</p>}
                    </> : agr.localTitle ? <p className="font-medium text-sm">{agr.localTitle}</p>
                      : <p className="text-sm text-muted-foreground">—</p>}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Warunki umowy</h3>
                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Field label="Data umowy">{fmtDate(agr.agrDate)}</Field>
                  <Field label="Waluta">{agr.currencyCode}</Field>
                  <Field label="Język">{agr.languageCode}</Field>
                  <Field label="Status"><AgreementEventBadge code={agr.lastEventCode} /></Field>
                  <Field label="Ważność (lata)">{agr.validYY}</Field>
                  <Field label="Termin publikacji (mies.)">{agr.pubTermMM}</Field>
                  <Field label="Referencja klienta">{agr.clientReference}</Field>
                  <Field label="Graal reprezentuje">{agr.graalRepresent ? 'Tak' : 'Nie'}</Field>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Warunki finansowe</h3>
                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Field label="Prowizja">{agr.commission != null ? `${Number(agr.commission).toFixed(2)} %` : null}</Field>
                  <Field label="Prowizja materiały">{agr.commissionMaterials != null ? `${Number(agr.commissionMaterials).toFixed(2)} %` : null}</Field>
                  <Field label="Udział Graala">{agr.graalShare != null ? `${Number(agr.graalShare).toFixed(2)} %` : null}</Field>
                  <Field label="Szac. cena egz.">{agr.estimatedCopyPrice != null ? Number(agr.estimatedCopyPrice).toLocaleString('pl-PL', { minimumFractionDigits: 2 }) : null}</Field>
                  <Field label="Maks. nakład">{agr.maxCopies?.toLocaleString('pl-PL')}</Field>
                  <Field label="Min. nakład">{agr.minCopies?.toLocaleString('pl-PL')}</Field>
                  <Field label="Egz. dla właściciela">{agr.copiesToOwner}</Field>
                  <Field label="Egz. dla Graala">{agr.copiesToGraal}</Field>
                </div>
              </div>
              {(agr.localTitle || agr.localIsbn || agr.localPubDate) && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Lokalne wydanie</h3>
                  <div className="grid gap-x-6 gap-y-4 sm:grid-cols-3">
                    <Field label="Lokalny tytuł">{agr.localTitle}</Field>
                    <Field label="Lokalny ISBN">{agr.localIsbn}</Field>
                    <Field label="Data publikacji">{fmtDate(agr.localPubDate)}</Field>
                  </div>
                </div>
              )}
              {agr.remarks && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Uwagi</h3>
                  <p className="text-sm whitespace-pre-wrap rounded-lg bg-muted/40 p-3">{agr.remarks}</p>
                </div>
              )}
              <div className="text-xs text-muted-foreground border-t border-border pt-3 flex gap-6">
                {agr.dateMod && <span>Zmodyfikowano: {fmtDateTime(agr.dateMod)}</span>}
                {agr.userMod && <span>Przez: {agr.userMod}</span>}
                {agr.agrDoc  && <span>Dok.: {agr.agrDoc}</span>}
              </div>
            </div>
          )}

          {/* ── Info — edycja ───────────────────────────────────────────── */}
          {tab === 'info' && editing && form && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Strony umowy</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <EntitySearch label="Wydawca" placeholder="Szukaj wydawcy…"
                    value={form.publisherId} displayValue={form.publisherName}
                    onSelect={(id, lbl) => setForm(f => f ? { ...f, publisherId: id, publisherName: lbl } : f)}
                    onClear={() => setForm(f => f ? { ...f, publisherId: null, publisherName: '' } : f)}
                    fetchUrl={q => `/api/publishers?search=${q}&pageSize=15`}
                    mapResult={r => ({ id: r.id, label: r.name, sub: r.abbreviation ?? undefined })} />
                  <EntitySearch label="Klient / właściciel praw" placeholder="Szukaj klienta…"
                    value={form.clientId} displayValue={form.clientName}
                    onSelect={(id, lbl) => setForm(f => f ? { ...f, clientId: id, clientName: lbl } : f)}
                    onClear={() => setForm(f => f ? { ...f, clientId: null, clientName: '' } : f)}
                    fetchUrl={q => `/api/customers?search=${q}&pageSize=15`}
                    mapResult={r => ({ id: r.id, label: r.name })} />
                  <EntitySearch label="Tytuł" placeholder="Szukaj tytułu…"
                    value={form.titleId} displayValue={form.titleName}
                    onSelect={(id, lbl) => setForm(f => f ? { ...f, titleId: id, titleName: lbl } : f)}
                    onClear={() => setForm(f => f ? { ...f, titleId: null, titleName: '' } : f)}
                    fetchUrl={q => `/api/titles?search=${q}&pageSize=15`}
                    mapResult={r => ({ id: r.id, label: r.title, sub: r.author ?? undefined })} />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Warunki umowy</h3>
                <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div><label className="text-xs font-medium text-muted-foreground">Data umowy</label>
                    <input type="date" value={form.agrDate} onChange={updField('agrDate')} className={INPUT_CLS} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Waluta</label>
                    <Sel value={form.currencyCode} onChange={v => setForm(f => f ? { ...f, currencyCode: v } : f)}>
                      <option value="">— brak —</option>
                      {dicts?.currencies.map(c => <option key={c.code} value={c.code}>{c.code} — {c.desc}</option>)}
                    </Sel></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Język</label>
                    <Sel value={form.languageCode} onChange={v => setForm(f => f ? { ...f, languageCode: v } : f)}>
                      <option value="">— brak —</option>
                      {dicts?.languages.map(l => <option key={l.code} value={l.code}>{l.code} — {l.descPL}</option>)}
                    </Sel></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Ważność (lata)</label>
                    <Input type="number" value={form.validYY} onChange={updField('validYY')} min={0} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Termin publikacji (mies.)</label>
                    <Input type="number" value={form.pubTermMM} onChange={updField('pubTermMM')} min={0} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Referencja klienta</label>
                    <Input value={form.clientReference} onChange={updField('clientReference')} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Dokument</label>
                    <Input value={form.agrDoc} onChange={updField('agrDoc')} /></div>
                  <div className="flex items-center gap-2 pt-5">
                    <input type="checkbox" id="graalRepresent" checked={form.graalRepresent}
                      onChange={e => setForm(f => f ? { ...f, graalRepresent: e.target.checked } : f)} className="rounded border-input" />
                    <label htmlFor="graalRepresent" className="text-sm">Graal reprezentuje</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Warunki finansowe</h3>
                <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div><label className="text-xs font-medium text-muted-foreground">Prowizja %</label>
                    <Input type="number" value={form.commission} onChange={updField('commission')} step="0.01" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Prowizja materiały %</label>
                    <Input type="number" value={form.commissionMaterials} onChange={updField('commissionMaterials')} step="0.01" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Udział Graala %</label>
                    <Input type="number" value={form.graalShare} onChange={updField('graalShare')} step="0.01" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Szac. cena egz.</label>
                    <Input type="number" value={form.estimatedCopyPrice} onChange={updField('estimatedCopyPrice')} step="0.01" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Maks. nakład</label>
                    <Input type="number" value={form.maxCopies} onChange={updField('maxCopies')} min={0} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Min. nakład</label>
                    <Input type="number" value={form.minCopies} onChange={updField('minCopies')} min={0} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Egz. dla właściciela</label>
                    <Input type="number" value={form.copiesToOwner} onChange={updField('copiesToOwner')} min={0} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Egz. dla Graala</label>
                    <Input type="number" value={form.copiesToGraal} onChange={updField('copiesToGraal')} min={0} /></div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Lokalne wydanie</h3>
                <div className="grid gap-x-4 gap-y-3 sm:grid-cols-3">
                  <div><label className="text-xs font-medium text-muted-foreground">Lokalny tytuł</label>
                    <Input value={form.localTitle} onChange={updField('localTitle')} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Lokalny ISBN</label>
                    <Input value={form.localIsbn} onChange={updField('localIsbn')} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">Data publikacji</label>
                    <input type="date" value={form.localPubDate} onChange={updField('localPubDate')} className={INPUT_CLS} /></div>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Uwagi</label>
                <textarea value={form.remarks} onChange={updField('remarks')} rows={3}
                  className="mt-1 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none" />
              </div>
            </div>
          )}

          {/* ── Prawa — widok ───────────────────────────────────────────── */}
          {tab === 'rights' && !editing && (
            <div className="space-y-3">
              {agr.rights.length === 0
                ? <p className="text-sm text-muted-foreground">Brak zdefiniowanych praw.</p>
                : agr.rights.map((r, ri) => (
                  <div key={r.id} className="rounded-lg border border-border overflow-hidden">
                    {/* Nagłówek prawa */}
                    <div className="flex items-center gap-3 bg-muted/30 px-4 py-2.5 border-b border-border">
                      <span className="text-xs font-bold text-muted-foreground tabular-nums w-4">{ri + 1}.</span>
                      <span className="font-semibold text-sm flex-1">
                        {r.rightForm
                          ? <span title={r.rightForm.descEn ?? ''}>{r.rightForm.abbPL ?? r.rightForm.descPL ?? r.rightForm.descEn}</span>
                          : <span className="text-muted-foreground italic">Nieznana forma prawa</span>}
                      </span>
                      {r.royAccountInterval && (
                        <span className="text-xs bg-muted rounded-full px-2.5 py-0.5 font-mono">
                          {((r.royAccountInterval.abb ?? '').trim() || (r.royAccountInterval.descEn ?? '').trim())}
                        </span>
                      )}
                      {r.distributionType && (
                        <span className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full px-2.5 py-0.5">
                          {(r.distributionType.descEn ?? '').trim()}
                        </span>
                      )}
                    </div>
                    {/* Treść */}
                    <div className="px-4 py-3 flex flex-col lg:flex-row gap-4">
                      {/* Atrybuty */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs min-w-0 flex-1">
                        <div>
                          <p className="text-muted-foreground mb-0.5">Podstawa prowizji</p>
                          <p className="font-medium">{r.priceType?.descPL ?? r.priceType?.descEn ?? <span className="text-muted-foreground">—</span>}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-0.5">Royalty liczone od</p>
                          <p className="font-medium">{r.royPriceType?.descPL ?? r.royPriceType?.descEn ?? <span className="text-muted-foreground">—</span>}</p>
                        </div>
                      </div>
                      {/* Stawki royalty — tabela progów */}
                      {r.royRates.length > 0 && (
                        <div className="shrink-0 min-w-[200px]">
                          <p className="text-xs text-muted-foreground mb-1.5">Stawki royalty</p>
                          <div className="rounded-md border border-border overflow-hidden text-xs">
                            <div className="grid grid-cols-[1fr_auto] bg-muted/40 border-b border-border px-2.5 py-1 font-medium text-muted-foreground">
                              <span>Do egz.</span>
                              <span className="text-right pl-6">Stawka</span>
                            </div>
                            {r.royRates.map((rr, i) => (
                              <div key={i} className="grid grid-cols-[1fr_auto] px-2.5 py-1.5 border-b border-border/40 last:border-0 hover:bg-muted/20">
                                <span className="text-muted-foreground">
                                  {rr.copiesMax
                                    ? rr.copiesMax.toLocaleString('pl-PL')
                                    : <span className="italic">bez limitu</span>}
                                </span>
                                <span className="font-semibold tabular-nums text-right pl-6">
                                  {Number(rr.rate).toFixed(2)} %
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* ── Prawa — edycja ──────────────────────────────────────────── */}
          {tab === 'rights' && editing && form && (
            <div className="space-y-3">
              {form.rights.length === 0 && (
                <p className="text-sm text-muted-foreground py-1">Brak praw — dodaj poniżej.</p>
              )}
              {form.rights.map((r, ri) => (
                <div key={r._key} className="rounded-lg border border-border overflow-hidden">
                  {/* Nagłówek */}
                  <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 border-b border-border">
                    <span className="text-xs font-bold text-muted-foreground w-4">{ri + 1}.</span>
                    <span className="text-sm font-medium flex-1">
                      {r.rightFormId && dicts
                        ? (() => { const d = dicts.rightForms.find(x => String(x.id) === r.rightFormId); return d ? `${d.abbPL} — ${d.descPL}` : 'Prawo' })()
                        : <span className="text-muted-foreground">Nowe prawo</span>}
                    </span>
                    <button type="button" onClick={() => removeRight(ri)}
                      className="p-1 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="p-4 space-y-4">
                    {/* Forma prawa — pełna szerokość */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Forma prawa</label>
                      <Sel value={r.rightFormId} onChange={updRight(ri, 'rightFormId')}>
                        <option value="">— wybierz —</option>
                        {dicts?.rightForms.map(d => <option key={d.id} value={String(d.id)}>{d.abbPL} — {d.descPL}</option>)}
                      </Sel>
                    </div>

                    {/* 2 × 2 grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Podstawa prowizji</label>
                        <Sel value={r.priceTypeId} onChange={updRight(ri, 'priceTypeId')}>
                          <option value="">— wybierz —</option>
                          {dicts?.priceTypes.map(d => <option key={d.id} value={String(d.id)}>{d.descPL ?? d.descEn}</option>)}
                        </Sel>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Royalty liczone od</label>
                        <Sel value={r.royPriceTypeId} onChange={updRight(ri, 'royPriceTypeId')}>
                          <option value="">— wybierz —</option>
                          {dicts?.royPriceTypes.map(d => <option key={d.id} value={String(d.id)}>{d.descPL ?? d.descEn}</option>)}
                        </Sel>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Interwał rozliczenia</label>
                        <Sel value={r.royAccountIntervalId} onChange={updRight(ri, 'royAccountIntervalId')}>
                          <option value="">— wybierz —</option>
                          {dicts?.royAccountIntervals.map(d => <option key={d.id} value={String(d.id)}>{(d.abb ?? '').trim() || d.descEn}</option>)}
                        </Sel>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Dystrybucja</label>
                        <Sel value={r.distributionTypeId} onChange={updRight(ri, 'distributionTypeId')}>
                          <option value="">— wybierz —</option>
                          {dicts?.distTypes.map(d => <option key={d.id} value={String(d.id)}>{d.descEn}</option>)}
                        </Sel>
                      </div>
                    </div>

                    {/* Stawki royalty */}
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1.5">Stawki royalty</p>
                      <div className="rounded-md border border-border overflow-hidden text-xs">
                        <div className="grid grid-cols-[1.5rem_1fr_8rem_1.5rem] bg-muted/40 border-b border-border px-2.5 py-1.5 font-medium text-muted-foreground gap-2">
                          <span />
                          <span>Do egz.</span>
                          <span className="text-right">Stawka %</span>
                          <span />
                        </div>
                        {r.royRates.map((rr, rri) => (
                          <div key={rri} className="grid grid-cols-[1.5rem_1fr_8rem_1.5rem] items-center gap-2 px-2.5 py-1.5 border-b border-border/40 last:border-0">
                            <span className="text-muted-foreground font-medium tabular-nums">{rri + 1}.</span>
                            <Input type="number" value={rr.copiesMax} placeholder="bez limitu"
                              onChange={e => updRoyRate(ri, rri, 'copiesMax', e.target.value)} min={0}
                              className="h-7 text-xs" />
                            <Input type="number" value={rr.rate} placeholder="0.00"
                              onChange={e => updRoyRate(ri, rri, 'rate', e.target.value)} step="0.01"
                              className="h-7 text-xs text-right" />
                            <button type="button" onClick={() => removeRoyRate(ri, rri)}
                              className="text-muted-foreground hover:text-destructive disabled:opacity-30 transition-colors"
                              disabled={r.royRates.length === 1}>
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <button type="button" onClick={() => addRoyRate(ri)}
                        className="mt-1.5 text-xs text-primary hover:underline flex items-center gap-1">
                        <Plus className="h-3 w-3" />Dodaj próg
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={addRight} className="gap-1.5">
                <Plus className="h-4 w-4" />Dodaj prawo
              </Button>
            </div>
          )}

          {/* ── Zdarzenia — zawsze widok ─────────────────────────────────── */}
          {tab === 'events' && (
            <div>
              {agr.events.length === 0
                ? <p className="text-sm text-muted-foreground">Brak zdarzeń.</p>
                : <Table>
                    <thead><tr>
                      <Th>Zdarzenie</Th><Th>Data</Th><Th>Data końcowa</Th><Th className="text-right">Egz.</Th>
                    </tr></thead>
                    <tbody>
                      {agr.events.map(e => (
                        <tr key={e.id} className="hover:bg-muted/40">
                          <Td><AgreementEventBadge code={e.eventCode} /><span className="ml-2 text-xs text-muted-foreground font-mono">{e.eventCode}</span></Td>
                          <Td className="whitespace-nowrap text-sm">{fmtDate(e.eventDate) ?? '—'}</Td>
                          <Td className="whitespace-nowrap text-sm">{fmtDate(e.endDate) ?? '—'}</Td>
                          <Td className="text-right tabular-nums">{e.noOfCopies?.toLocaleString('pl-PL') ?? '—'}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>}
            </div>
          )}

          {/* ── Zaliczki — widok ─────────────────────────────────────────── */}
          {tab === 'advances' && !editing && (
            <div>
              {agr.advances.length === 0
                ? <p className="text-sm text-muted-foreground">Brak zaliczek.</p>
                : <>
                  <Table>
                    <thead><tr><Th>Typ</Th><Th>Rata</Th><Th>Termin płatności</Th><Th>Data</Th><Th className="text-right">Kwota</Th></tr></thead>
                    <tbody>
                      {agr.advances.map(a => (
                        <tr key={a.id} className="hover:bg-muted/40">
                          <Td className="text-sm">{a.advType?.descPL ?? a.advType?.descEn ?? '—'}</Td>
                          <Td className="text-sm text-center">{a.instalment ?? '—'}</Td>
                          <Td className="text-sm">{a.advTerm?.descPL ?? a.advTerm?.descEn ?? '—'}</Td>
                          <Td className="whitespace-nowrap text-sm">{fmtDate(a.termDate) ?? '—'}</Td>
                          <Td className="text-right tabular-nums font-medium">
                            {Number(a.amount).toLocaleString('pl-PL', { minimumFractionDigits: 2 })}
                            {' '}<span className="text-xs text-muted-foreground">{agr.currencyCode ?? ''}</span>
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="mt-3 text-right text-sm font-medium">
                    Suma: {agr.advances.reduce((s, a) => s + Number(a.amount), 0).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} {agr.currencyCode ?? ''}
                  </div>
                </>}
            </div>
          )}

          {/* ── Zaliczki — edycja ────────────────────────────────────────── */}
          {tab === 'advances' && editing && form && (
            <div className="space-y-3">
              {form.advances.length === 0 && <p className="text-sm text-muted-foreground">Brak zaliczek — dodaj poniżej.</p>}
              {form.advances.map((a, ai) => (
                <div key={a._key} className="rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-muted-foreground">Zaliczka {ai + 1}</span>
                    <button type="button" onClick={() => removeAdvance(ai)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <div><label className="text-xs font-medium text-muted-foreground">Typ</label>
                      <Sel value={a.advTypeId} onChange={v => updAdvance(ai, 'advTypeId', v)}>
                        <option value="">— wybierz —</option>
                        {dicts?.advTypes.map(d => <option key={d.id} value={String(d.id)}>{d.descPL ?? d.descEn}</option>)}
                      </Sel></div>
                    <div><label className="text-xs font-medium text-muted-foreground">Rata nr</label>
                      <Input type="number" value={a.instalment} onChange={e => updAdvance(ai, 'instalment', e.target.value)} min={1} /></div>
                    <div><label className="text-xs font-medium text-muted-foreground">Termin płatności</label>
                      <Sel value={a.advTermId} onChange={v => updAdvance(ai, 'advTermId', v)}>
                        <option value="">— wybierz —</option>
                        {dicts?.advTerms.map(d => <option key={d.id} value={String(d.id)}>{d.descPL ?? d.descEn}</option>)}
                      </Sel></div>
                    <div><label className="text-xs font-medium text-muted-foreground">Data płatności</label>
                      <input type="date" value={a.termDate} onChange={e => updAdvance(ai, 'termDate', e.target.value)} className={INPUT_CLS} /></div>
                    <div><label className="text-xs font-medium text-muted-foreground">Kwota ({agr.currencyCode ?? '—'})</label>
                      <Input type="number" value={a.amount} onChange={e => updAdvance(ai, 'amount', e.target.value)} step="0.01" min={0} /></div>
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={addAdvance} className="gap-1">
                <Plus className="h-4 w-4" />Dodaj zaliczkę
              </Button>
            </div>
          )}

        </div>
      </Card>
    </div>
  )
}
