'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, Plus, Trash2, X } from 'lucide-react'

// ─── Typy słowników ────────────────────────────────────────────────────────────

type DictRightForm    = { id: number; abbPL: string; descPL: string }
type DictSimple       = { id: number; descPL?: string; descEn?: string; abb?: string }
type DictEvent        = { code: number; descEn: string }

type Dicts = {
  rightForms:          DictRightForm[]
  priceTypes:          DictSimple[]
  royPriceTypes:       DictSimple[]
  royAccountIntervals: DictSimple[]
  distTypes:           DictSimple[]
  agrEvents:           DictEvent[]
  advTerms:            DictSimple[]
  advTypes:            DictSimple[]
}

// ─── Typy formularza ───────────────────────────────────────────────────────────

type RoyRateRow  = { copiesMax: string; rate: string }
type RightRow    = {
  rightFormId: string; priceTypeId: string; royPriceTypeId: string
  royAccountIntervalId: string; distributionTypeId: string
  royRates: RoyRateRow[]
}
type EventRow    = { eventCode: string; eventDate: string; endDate: string; noOfCopies: string }
type AdvanceRow  = { advTypeId: string; instalment: string; advTermId: string; termDate: string; amount: string }

const emptyRight   = (): RightRow    => ({ rightFormId: '', priceTypeId: '', royPriceTypeId: '', royAccountIntervalId: '', distributionTypeId: '', royRates: [{ copiesMax: '', rate: '' }] })
const emptyEvent   = (): EventRow    => ({ eventCode: '', eventDate: '', endDate: '', noOfCopies: '' })
const emptyAdvance = (): AdvanceRow  => ({ advTypeId: '', instalment: '', advTermId: '', termDate: '', amount: '' })

// ─── EntitySearch (autocomplete dla wydawcy / klienta / tytułu) ───────────────

type SearchResult = { id: number; label: string; sub?: string }

function EntitySearch({
  label, placeholder, value, displayValue, onSelect, onClear, fetchUrl, mapResult,
}: {
  label: string
  placeholder: string
  value: number | null
  displayValue: string
  onSelect: (id: number, label: string) => void
  onClear: () => void
  fetchUrl: (q: string) => string
  mapResult: (raw: any) => SearchResult
}) {
  const [query, setQuery]       = useState('')
  const [results, setResults]   = useState<SearchResult[]>([])
  const [open, setOpen]         = useState(false)
  const [loading, setLoading]   = useState(false)
  const debounce = useRef<ReturnType<typeof setTimeout>>()
  const wrapRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const search = (q: string) => {
    setQuery(q)
    clearTimeout(debounce.current)
    if (!q.trim()) { setResults([]); setOpen(false); return }
    debounce.current = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(fetchUrl(encodeURIComponent(q)))
        const json = await res.json()
        const raw: any[] = (json.data ?? json.items ?? json).slice(0, 15)
        setResults(raw.map(mapResult))
        setOpen(true)
      } finally { setLoading(false) }
    }, 250)
  }

  if (value) {
    return (
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
        <div className="flex items-center gap-2 rounded-md border border-input bg-muted/40 px-3 py-2 text-sm">
          <span className="flex-1 font-medium">{displayValue}</span>
          <button type="button" onClick={onClear} className="text-muted-foreground hover:text-foreground">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapRef} className="relative">
      <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
      <Input
        value={query}
        onChange={e => search(e.target.value)}
        placeholder={placeholder}
        onFocus={() => query && setOpen(true)}
      />
      {loading && <p className="text-xs text-muted-foreground mt-1">Szukam…</p>}
      {open && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover shadow-lg max-h-60 overflow-auto">
          {results.map(r => (
            <button
              key={r.id}
              type="button"
              className="w-full px-3 py-2 text-left text-sm hover:bg-muted/60 flex flex-col"
              onClick={() => { onSelect(r.id, r.label); setQuery(''); setOpen(false) }}
            >
              <span className="font-medium">{r.label}</span>
              {r.sub && <span className="text-xs text-muted-foreground">{r.sub}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Stałe ────────────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
  { value: '1', label: 'W toku' },
  { value: '2', label: 'Aktywna' },
  { value: '3', label: 'Wygasła' },
  { value: '4', label: 'Zakończona' },
  { value: '5', label: 'Zawieszona' },
  { value: '6', label: 'Archiwum' },
]

const INPUT_CLS = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
const SECTION   = 'text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3'

function Sel({ value, onChange, children, className }: {
  value: string; onChange: (v: string) => void; children: React.ReactNode; className?: string
}) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className={className ?? INPUT_CLS}>
      {children}
    </select>
  )
}

// ─── Główny formularz ─────────────────────────────────────────────────────────

export default function NewAgreementPage() {
  const router = useRouter()
  const [dicts, setDicts]     = useState<Dicts | null>(null)
  const [saving, setSaving]   = useState(false)
  const [error, setError]     = useState<string | null>(null)

  // Strony
  const [publisherId,   setPublisherId]   = useState<number | null>(null)
  const [publisherName, setPublisherName] = useState('')
  const [clientId,      setClientId]      = useState<number | null>(null)
  const [clientName,    setClientName]    = useState('')
  const [titleId,       setTitleId]       = useState<number | null>(null)
  const [titleLabel,    setTitleLabel]    = useState('')

  // Główne pola
  const [agrDate,      setAgrDate]      = useState(new Date().toISOString().slice(0, 10))
  const [status,       setStatus]       = useState('1')
  const [currencyCode, setCurrencyCode] = useState('USD')
  const [languageCode, setLanguageCode] = useState('')
  const [validYY,      setValidYY]      = useState('')
  const [pubTermMM,    setPubTermMM]    = useState('')

  // Nakłady
  const [maxCopies,      setMaxCopies]      = useState('')
  const [minCopies,      setMinCopies]      = useState('')
  const [copiesToOwner,  setCopiesToOwner]  = useState('')
  const [copiesToGraal,  setCopiesToGraal]  = useState('')

  // Finansowe
  const [commission,          setCommission]          = useState('')
  const [commissionMaterials, setCommissionMaterials] = useState('')
  const [graalShare,          setGraalShare]          = useState('')
  const [estimatedCopyPrice,  setEstimatedCopyPrice]  = useState('')
  const [graalRepresent,      setGraalRepresent]      = useState(true)

  // Dodatkowe
  const [localTitle,       setLocalTitle]       = useState('')
  const [localIsbn,        setLocalIsbn]        = useState('')
  const [localPubDate,     setLocalPubDate]     = useState('')
  const [clientReference,  setClientReference]  = useState('')
  const [agrDoc,           setAgrDoc]           = useState('')
  const [remarks,          setRemarks]          = useState('')

  // Powiązane
  const [rights,   setRights]   = useState<RightRow[]>([])
  const [events,   setEvents]   = useState<EventRow[]>([])
  const [advances, setAdvances] = useState<AdvanceRow[]>([])

  useEffect(() => {
    fetch('/api/agreements/dicts')
      .then(r => r.json())
      .then(setDicts)
  }, [])

  // ── Obsługa praw ────────────────────────────────────────────────────────────

  const updateRight = (i: number, patch: Partial<RightRow>) =>
    setRights(prev => prev.map((r, idx) => idx === i ? { ...r, ...patch } : r))

  const addRoyRate = (ri: number) =>
    updateRight(ri, { royRates: [...rights[ri].royRates, { copiesMax: '', rate: '' }] })

  const updateRoyRate = (ri: number, rri: number, patch: Partial<RoyRateRow>) =>
    updateRight(ri, {
      royRates: rights[ri].royRates.map((rr, idx) => idx === rri ? { ...rr, ...patch } : rr),
    })

  const removeRoyRate = (ri: number, rri: number) =>
    updateRight(ri, { royRates: rights[ri].royRates.filter((_, idx) => idx !== rri) })

  // ── Zapis ───────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const body = {
        publisherId, clientId, titleId,
        agrDate, status: status || null,
        currencyCode: currencyCode.trim().toUpperCase() || null,
        languageCode: languageCode.trim().toUpperCase() || null,
        validYY, pubTermMM,
        maxCopies, minCopies, copiesToOwner, copiesToGraal,
        commission, commissionMaterials, graalShare, estimatedCopyPrice, graalRepresent,
        localTitle, localIsbn, localPubDate: localPubDate || null,
        clientReference, agrDoc, remarks,
        rights: rights.map(r => ({
          rightFormId:          r.rightFormId          || null,
          priceTypeId:          r.priceTypeId          || null,
          royPriceTypeId:       r.royPriceTypeId       || null,
          royAccountIntervalId: r.royAccountIntervalId || null,
          distributionTypeId:   r.distributionTypeId   || null,
          royRates: r.royRates
            .filter(rr => rr.rate !== '')
            .map(rr => ({ copiesMax: rr.copiesMax || null, rate: rr.rate })),
        })),
        events: events
          .filter(e => e.eventCode)
          .map(e => ({
            eventCode:  Number(e.eventCode),
            eventDate:  e.eventDate  || null,
            endDate:    e.endDate    || null,
            noOfCopies: e.noOfCopies || null,
          })),
        advances: advances
          .filter(a => a.amount !== '')
          .map(a => ({
            advTypeId:  a.advTypeId  || null,
            instalment: a.instalment || null,
            advTermId:  a.advTermId  || null,
            termDate:   a.termDate   || null,
            amount:     a.amount,
          })),
      }

      const res = await fetch('/api/agreements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Błąd zapisu')
      router.push(`/finances/agreements/${json.id}`)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button type="button" variant="outline" size="sm" onClick={() => router.back()} className="gap-1">
            <ChevronLeft className="h-4 w-4" />Powrót
          </Button>
          <h1 className="text-xl font-bold">Nowa umowa</h1>
        </div>
        <div className="flex items-center gap-2">
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={saving}>{saving ? 'Zapisuję…' : 'Zapisz umowę'}</Button>
        </div>
      </div>

      {/* ── Strony umowy ──────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <h2 className={SECTION}>Strony umowy</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <EntitySearch
            label="Wydawca (kupujący prawa)"
            placeholder="Szukaj wydawcy…"
            value={publisherId}
            displayValue={publisherName}
            onSelect={(id, lbl) => { setPublisherId(id); setPublisherName(lbl) }}
            onClear={() => { setPublisherId(null); setPublisherName('') }}
            fetchUrl={q => `/api/publishers?search=${q}&pageSize=15`}
            mapResult={r => ({ id: r.id, label: r.name, sub: r.abbreviation ?? undefined })}
          />
          <EntitySearch
            label="Klient / właściciel praw"
            placeholder="Szukaj klienta…"
            value={clientId}
            displayValue={clientName}
            onSelect={(id, lbl) => { setClientId(id); setClientName(lbl) }}
            onClear={() => { setClientId(null); setClientName('') }}
            fetchUrl={q => `/api/customers?search=${q}&pageSize=15`}
            mapResult={r => ({ id: r.id, label: r.name, sub: r.abbreviation ?? undefined })}
          />
          <EntitySearch
            label="Tytuł"
            placeholder="Szukaj tytułu…"
            value={titleId}
            displayValue={titleLabel}
            onSelect={(id, lbl) => { setTitleId(id); setTitleLabel(lbl) }}
            onClear={() => { setTitleId(null); setTitleLabel('') }}
            fetchUrl={q => `/api/titles?search=${q}&pageSize=15`}
            mapResult={r => ({ id: r.id, label: r.title, sub: r.isbn ?? undefined })}
          />
        </div>
      </Card>

      {/* ── Warunki umowy ─────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <h2 className={SECTION}>Warunki umowy</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Data umowy *</label>
            <input type="date" required value={agrDate} onChange={e => setAgrDate(e.target.value)} className={INPUT_CLS} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Status</label>
            <Sel value={status} onChange={setStatus}>
              <option value="">— brak —</option>
              {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </Sel>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Waluta</label>
            <Input value={currencyCode} onChange={e => setCurrencyCode(e.target.value.toUpperCase())} maxLength={3} placeholder="USD" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Język</label>
            <Input value={languageCode} onChange={e => setLanguageCode(e.target.value.toUpperCase())} maxLength={3} placeholder="EN" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Ważność (lata)</label>
            <Input type="number" min="0" value={validYY} onChange={e => setValidYY(e.target.value)} placeholder="np. 10" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Termin publikacji (mies.)</label>
            <Input type="number" min="0" value={pubTermMM} onChange={e => setPubTermMM(e.target.value)} placeholder="np. 24" />
          </div>
        </div>
      </Card>

      {/* ── Nakłady ───────────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <h2 className={SECTION}>Nakłady</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Maks. nakład', maxCopies, setMaxCopies],
            ['Min. nakład', minCopies, setMinCopies],
            ['Egz. dla właściciela', copiesToOwner, setCopiesToOwner],
            ['Egz. dla Graala', copiesToGraal, setCopiesToGraal],
          ].map(([lbl, val, set]: any) => (
            <div key={lbl}>
              <label className="text-xs font-medium text-muted-foreground">{lbl}</label>
              <Input type="number" min="0" value={val} onChange={e => set(e.target.value)} />
            </div>
          ))}
        </div>
      </Card>

      {/* ── Finansowe ─────────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <h2 className={SECTION}>Warunki finansowe</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Prowizja (%)</label>
            <Input type="number" step="0.01" min="0" max="100" value={commission} onChange={e => setCommission(e.target.value)} placeholder="np. 20" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Prowizja materiały (%)</label>
            <Input type="number" step="0.01" min="0" max="100" value={commissionMaterials} onChange={e => setCommissionMaterials(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Udział Graala (%)</label>
            <Input type="number" step="0.01" min="0" max="100" value={graalShare} onChange={e => setGraalShare(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Szac. cena egz.</label>
            <Input type="number" step="0.01" min="0" value={estimatedCopyPrice} onChange={e => setEstimatedCopyPrice(e.target.value)} />
          </div>
          <div className="flex items-center gap-2 pt-4">
            <input
              id="graalRepresent"
              type="checkbox"
              checked={graalRepresent}
              onChange={e => setGraalRepresent(e.target.checked)}
              className="h-4 w-4 rounded border-input"
            />
            <label htmlFor="graalRepresent" className="text-sm">Graal reprezentuje</label>
          </div>
        </div>
      </Card>

      {/* ── Lokalne wydanie ───────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <h2 className={SECTION}>Lokalne wydanie</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Lokalny tytuł</label>
            <Input value={localTitle} onChange={e => setLocalTitle(e.target.value)} placeholder="Tytuł w języku docelowym" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Lokalny ISBN</label>
            <Input value={localIsbn} onChange={e => setLocalIsbn(e.target.value)} maxLength={16} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Data publikacji</label>
            <input type="date" value={localPubDate} onChange={e => setLocalPubDate(e.target.value)} className={INPUT_CLS} />
          </div>
        </div>
      </Card>

      {/* ── Dodatkowe ─────────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <h2 className={SECTION}>Dodatkowe informacje</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Referencja klienta</label>
            <Input value={clientReference} onChange={e => setClientReference(e.target.value)} maxLength={50} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Dokument umowy (ścieżka)</label>
            <Input value={agrDoc} onChange={e => setAgrDoc(e.target.value)} maxLength={250} />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Uwagi</label>
          <textarea
            value={remarks}
            onChange={e => setRemarks(e.target.value)}
            rows={3}
            maxLength={1000}
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </Card>

      {/* ── Prawa ─────────────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className={SECTION + ' mb-0'}>Prawa ({rights.length})</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => setRights(prev => [...prev, emptyRight()])} className="gap-1">
            <Plus className="h-3.5 w-3.5" />Dodaj prawo
          </Button>
        </div>

        {rights.length === 0 && (
          <p className="text-sm text-muted-foreground">Brak praw — kliknij „Dodaj prawo".</p>
        )}

        {rights.map((r, ri) => (
          <div key={ri} className="rounded-lg border border-border p-4 space-y-4 relative">
            <button
              type="button"
              onClick={() => setRights(prev => prev.filter((_, i) => i !== ri))}
              className="absolute top-3 right-3 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </button>

            <p className="text-sm font-semibold">Prawo #{ri + 1}</p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Forma prawa</label>
                <Sel value={r.rightFormId} onChange={v => updateRight(ri, { rightFormId: v })}>
                  <option value="">— wybierz —</option>
                  {dicts?.rightForms.map(d => (
                    <option key={d.id} value={String(d.id)}>{d.abbPL} — {d.descPL}</option>
                  ))}
                </Sel>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Dystrybucja</label>
                <Sel value={r.distributionTypeId} onChange={v => updateRight(ri, { distributionTypeId: v })}>
                  <option value="">— wybierz —</option>
                  {dicts?.distTypes.map(d => (
                    <option key={d.id} value={String(d.id)}>{d.descEn}</option>
                  ))}
                </Sel>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Podstawa prowizji</label>
                <Sel value={r.priceTypeId} onChange={v => updateRight(ri, { priceTypeId: v })}>
                  <option value="">— wybierz —</option>
                  {dicts?.priceTypes.map(d => (
                    <option key={d.id} value={String(d.id)}>{d.descPL}</option>
                  ))}
                </Sel>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Royalty liczone od</label>
                <Sel value={r.royPriceTypeId} onChange={v => updateRight(ri, { royPriceTypeId: v })}>
                  <option value="">— wybierz —</option>
                  {dicts?.royPriceTypes.map(d => (
                    <option key={d.id} value={String(d.id)}>{d.descPL}</option>
                  ))}
                </Sel>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Interwał rozliczenia</label>
                <Sel value={r.royAccountIntervalId} onChange={v => updateRight(ri, { royAccountIntervalId: v })}>
                  <option value="">— wybierz —</option>
                  {dicts?.royAccountIntervals.map(d => (
                    <option key={d.id} value={String(d.id)}>{d.abb}</option>
                  ))}
                </Sel>
              </div>
            </div>

            {/* Stawki royalty */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium text-muted-foreground">Stawki royalty</p>
                <Button type="button" variant="ghost" size="sm" onClick={() => addRoyRate(ri)} className="h-6 text-xs gap-1 px-2">
                  <Plus className="h-3 w-3" />Dodaj próg
                </Button>
              </div>
              <div className="space-y-2">
                {r.royRates.map((rr, rri) => (
                  <div key={rri} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-12 shrink-0">Próg {rri + 1}</span>
                    <div className="flex-1">
                      <Input
                        type="number" min="0" placeholder="Max egz. (puste = bez limitu)"
                        value={rr.copiesMax}
                        onChange={e => updateRoyRate(ri, rri, { copiesMax: e.target.value })}
                      />
                    </div>
                    <div className="w-28 shrink-0">
                      <Input
                        type="number" step="0.01" min="0" max="100" placeholder="Stawka %"
                        value={rr.rate}
                        onChange={e => updateRoyRate(ri, rri, { rate: e.target.value })}
                      />
                    </div>
                    {r.royRates.length > 1 && (
                      <button type="button" onClick={() => removeRoyRate(ri, rri)} className="text-muted-foreground hover:text-destructive shrink-0">
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Card>

      {/* ── Zdarzenia ─────────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className={SECTION + ' mb-0'}>Zdarzenia ({events.length})</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => setEvents(prev => [...prev, emptyEvent()])} className="gap-1">
            <Plus className="h-3.5 w-3.5" />Dodaj zdarzenie
          </Button>
        </div>

        {events.length === 0 && (
          <p className="text-sm text-muted-foreground">Brak zdarzeń.</p>
        )}

        {events.map((ev, i) => (
          <div key={i} className="grid gap-3 sm:grid-cols-4 items-end rounded-lg border border-border p-3 relative">
            <button
              type="button"
              onClick={() => setEvents(prev => prev.filter((_, idx) => idx !== i))}
              className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-muted-foreground">Rodzaj zdarzenia</label>
              <Sel value={ev.eventCode} onChange={v => setEvents(prev => prev.map((e, idx) => idx === i ? { ...e, eventCode: v } : e))}>
                <option value="">— wybierz —</option>
                {dicts?.agrEvents.map(d => (
                  <option key={d.code} value={String(d.code)}>{d.code} — {d.descEn}</option>
                ))}
              </Sel>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Data zdarzenia</label>
              <input type="date" value={ev.eventDate} onChange={e => setEvents(prev => prev.map((ev2, idx) => idx === i ? { ...ev2, eventDate: e.target.value } : ev2))} className={INPUT_CLS} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Data końcowa</label>
              <input type="date" value={ev.endDate} onChange={e => setEvents(prev => prev.map((ev2, idx) => idx === i ? { ...ev2, endDate: e.target.value } : ev2))} className={INPUT_CLS} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Liczba egz.</label>
              <Input type="number" min="0" value={ev.noOfCopies} onChange={e => setEvents(prev => prev.map((ev2, idx) => idx === i ? { ...ev2, noOfCopies: e.target.value } : ev2))} />
            </div>
          </div>
        ))}
      </Card>

      {/* ── Zaliczki ──────────────────────────────────────────────────────────── */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className={SECTION + ' mb-0'}>Zaliczki ({advances.length})</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => setAdvances(prev => [...prev, emptyAdvance()])} className="gap-1">
            <Plus className="h-3.5 w-3.5" />Dodaj zaliczkę
          </Button>
        </div>

        {advances.length === 0 && (
          <p className="text-sm text-muted-foreground">Brak zaliczek.</p>
        )}

        {advances.map((adv, i) => (
          <div key={i} className="grid gap-3 sm:grid-cols-5 items-end rounded-lg border border-border p-3 relative">
            <button
              type="button"
              onClick={() => setAdvances(prev => prev.filter((_, idx) => idx !== i))}
              className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Typ</label>
              <Sel value={adv.advTypeId} onChange={v => setAdvances(prev => prev.map((a, idx) => idx === i ? { ...a, advTypeId: v } : a))}>
                <option value="">— wybierz —</option>
                {dicts?.advTypes.map(d => (
                  <option key={d.id} value={String(d.id)}>{d.descPL}</option>
                ))}
              </Sel>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Rata nr</label>
              <Input type="number" min="1" value={adv.instalment} onChange={e => setAdvances(prev => prev.map((a, idx) => idx === i ? { ...a, instalment: e.target.value } : a))} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Termin płatności</label>
              <Sel value={adv.advTermId} onChange={v => setAdvances(prev => prev.map((a, idx) => idx === i ? { ...a, advTermId: v } : a))}>
                <option value="">— wybierz —</option>
                {dicts?.advTerms.map(d => (
                  <option key={d.id} value={String(d.id)}>{d.descPL}</option>
                ))}
              </Sel>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Data płatności</label>
              <input type="date" value={adv.termDate} onChange={e => setAdvances(prev => prev.map((a, idx) => idx === i ? { ...a, termDate: e.target.value } : a))} className={INPUT_CLS} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Kwota</label>
              <Input type="number" step="0.01" min="0" required={false} value={adv.amount} onChange={e => setAdvances(prev => prev.map((a, idx) => idx === i ? { ...a, amount: e.target.value } : a))} placeholder={currencyCode || 'kwota'} />
            </div>
          </div>
        ))}
      </Card>

      {/* ── Dolny przycisk zapisu ────────────────────────────────────────────── */}
      <div className="flex items-center justify-end gap-3">
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="button" variant="outline" onClick={() => router.back()}>Anuluj</Button>
        <Button type="submit" disabled={saving}>{saving ? 'Zapisuję…' : 'Zapisz umowę'}</Button>
      </div>
    </form>
  )
}
