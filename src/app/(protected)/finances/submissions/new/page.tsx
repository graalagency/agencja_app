'use client'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, Plus, Trash2, X } from 'lucide-react'

type DictItem = { id: number; desc: string }
type EvItem   = { code: number; desc: string }
type EditEvent = { _key: number; eventCode: string; eventDate: string; noOfCopies: string; endDate: string }
type Form = {
  titleId: number | null; titleName: string
  publisherId: number | null; publisherName: string
  copyTypeId: string; submSentTypeId: string
  submDate: string; sentDate: string; endDate: string; returnDate: string
  noOfCopies: string; trackingNo: string; exclusive: boolean
  submNr: string; status: string; remarks: string
  events: EditEvent[]
}

const INPUT_CLS = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
let _key = 0
const nextKey = () => ++_key

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

export default function NewSubmissionPage() {
  const router = useRouter()
  const [dicts, setDicts] = useState<{ copyTypes: DictItem[]; submSentTypes: DictItem[]; submEvents: EvItem[] } | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveErr, setSaveErr] = useState<string | null>(null)

  const today = new Date().toISOString().slice(0, 10)
  const [form, setForm] = useState<Form>({
    titleId: null, titleName: '',
    publisherId: null, publisherName: '',
    copyTypeId: '', submSentTypeId: '',
    submDate: today, sentDate: '', endDate: '', returnDate: '',
    noOfCopies: '', trackingNo: '', exclusive: false,
    submNr: '', status: '', remarks: '',
    events: [],
  })

  useEffect(() => {
    fetch('/api/submissions/dicts').then(r => r.json()).then(d => setDicts({
      copyTypes:    d.copyTypes    ?? [],
      submSentTypes: d.submSentTypes ?? [],
      submEvents:   d.submEvents   ?? [],
    }))
  }, [])

  const setF = (patch: Partial<Form>) => setForm(f => ({ ...f, ...patch }))
  const setEvField = (_key: number, patch: Partial<EditEvent>) =>
    setForm(f => ({ ...f, events: f.events.map(e => e._key === _key ? { ...e, ...patch } : e) }))
  const addEvent = () =>
    setForm(f => ({ ...f, events: [...f.events, { _key: nextKey(), eventCode: '', eventDate: today, noOfCopies: '', endDate: '' }] }))
  const removeEvent = (_key: number) =>
    setForm(f => ({ ...f, events: f.events.filter(e => e._key !== _key) }))

  const submit = async () => {
    setSaving(true); setSaveErr(null)
    try {
      const body = {
        titleId:        form.titleId,
        publisherId:    form.publisherId,
        copyTypeId:     form.copyTypeId     ? Number(form.copyTypeId)     : null,
        submSentTypeId: form.submSentTypeId ? Number(form.submSentTypeId) : null,
        submDate:       form.submDate  || null,
        sentDate:       form.sentDate  || null,
        endDate:        form.endDate   || null,
        returnDate:     form.returnDate || null,
        noOfCopies:     form.noOfCopies ? Number(form.noOfCopies) : null,
        trackingNo:     form.trackingNo || null,
        exclusive:      form.exclusive,
        submNr:         form.submNr ? Number(form.submNr) : null,
        status:         form.status  || null,
        remarks:        form.remarks || null,
        events: form.events.filter(e => e.eventCode).map(e => ({
          eventCode:  Number(e.eventCode),
          eventDate:  e.eventDate  || null,
          noOfCopies: e.noOfCopies ? Number(e.noOfCopies) : null,
          endDate:    e.endDate    || null,
        })),
      }
      const res = await fetch('/api/submissions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      })
      if (!res.ok) { const j = await res.json(); throw new Error(j.error ?? res.statusText) }
      const j = await res.json()
      router.push(`/finances/submissions/${j.id}`)
    } catch (e: any) {
      setSaveErr(e.message ?? String(e))
    } finally { setSaving(false) }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/finances/submissions" className="text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Nowa wysyłka</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => router.push('/finances/submissions')}>Anuluj</Button>
          <Button size="sm" onClick={submit} disabled={saving}>{saving ? 'Zapisuję…' : 'Utwórz'}</Button>
        </div>
      </div>

      {saveErr && <p className="rounded-md bg-destructive/10 px-4 py-2 text-sm text-destructive">{saveErr}</p>}

      <Card className="p-6 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <EntitySearch
            label="Tytuł" placeholder="Szukaj tytułu…"
            value={form.titleId} displayValue={form.titleName}
            onSelect={(id, label) => setF({ titleId: id, titleName: label })}
            onClear={() => setF({ titleId: null, titleName: '' })}
            fetchUrl={q => `/api/titles?search=${q}&pageSize=15`}
            mapResult={r => ({ id: r.id, label: r.title, sub: r.isbn ?? undefined })}
          />
          <EntitySearch
            label="Wydawca" placeholder="Szukaj wydawcy…"
            value={form.publisherId} displayValue={form.publisherName}
            onSelect={(id, label) => setF({ publisherId: id, publisherName: label })}
            onClear={() => setF({ publisherId: null, publisherName: '' })}
            fetchUrl={q => `/api/publishers?search=${q}&pageSize=15`}
            mapResult={r => ({ id: r.id, label: r.name, sub: r.abbreviation ?? undefined })}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Data wysyłki *</p>
            <input type="date" value={form.submDate} onChange={e => setF({ submDate: e.target.value })} className={INPUT_CLS} />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Data wysłania</p>
            <input type="date" value={form.sentDate} onChange={e => setF({ sentDate: e.target.value })} className={INPUT_CLS} />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Data zakończenia</p>
            <input type="date" value={form.endDate} onChange={e => setF({ endDate: e.target.value })} className={INPUT_CLS} />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Data zwrotu</p>
            <input type="date" value={form.returnDate} onChange={e => setF({ returnDate: e.target.value })} className={INPUT_CLS} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Rodzaj kopii</p>
            <select value={form.copyTypeId} onChange={e => setF({ copyTypeId: e.target.value })} className={INPUT_CLS}>
              <option value="">—</option>
              {dicts?.copyTypes.map(c => <option key={c.id} value={c.id}>{c.desc}</option>)}
            </select>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Sposób wysyłki</p>
            <select value={form.submSentTypeId} onChange={e => setF({ submSentTypeId: e.target.value })} className={INPUT_CLS}>
              <option value="">—</option>
              {dicts?.submSentTypes.map(s => <option key={s.id} value={s.id}>{s.desc}</option>)}
            </select>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Liczba egzemplarzy</p>
            <Input type="number" value={form.noOfCopies} onChange={e => setF({ noOfCopies: e.target.value })} />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Numer listu</p>
            <Input value={form.trackingNo} onChange={e => setF({ trackingNo: e.target.value })} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Numer wysyłki</p>
            <Input type="number" value={form.submNr} onChange={e => setF({ submNr: e.target.value })} />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Status</p>
            <Input value={form.status} onChange={e => setF({ status: e.target.value })} maxLength={1} />
          </div>
          <div className="flex items-center gap-2 pt-5">
            <input type="checkbox" id="exclusive" checked={form.exclusive} onChange={e => setF({ exclusive: e.target.checked })} className="h-4 w-4" />
            <label htmlFor="exclusive" className="text-sm font-medium">Ekskluzywa</label>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Uwagi</p>
          <textarea value={form.remarks} onChange={e => setF({ remarks: e.target.value })}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rows={3} />
        </div>

        {/* Zdarzenia */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold">Zdarzenia</p>
            <Button variant="outline" size="sm" onClick={addEvent}><Plus className="h-3.5 w-3.5 mr-1" />Dodaj zdarzenie</Button>
          </div>
          {form.events.length === 0 && (
            <p className="text-sm text-muted-foreground">Brak zdarzeń.</p>
          )}
          <div className="space-y-3">
            {form.events.map(ev => (
              <div key={ev._key} className="grid gap-3 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] items-end border rounded-md p-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Zdarzenie</p>
                  <select value={ev.eventCode} onChange={e => setEvField(ev._key, { eventCode: e.target.value })} className={INPUT_CLS}>
                    <option value="">— wybierz —</option>
                    {dicts?.submEvents.map(e => <option key={e.code} value={e.code}>{e.desc}</option>)}
                  </select>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Data zdarzenia</p>
                  <input type="date" value={ev.eventDate} onChange={e => setEvField(ev._key, { eventDate: e.target.value })} className={INPUT_CLS} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Egzemplarze</p>
                  <Input type="number" value={ev.noOfCopies} onChange={e => setEvField(ev._key, { noOfCopies: e.target.value })} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Data końcowa</p>
                  <input type="date" value={ev.endDate} onChange={e => setEvField(ev._key, { endDate: e.target.value })} className={INPUT_CLS} />
                </div>
                <button type="button" onClick={() => removeEvent(ev._key)} className="text-muted-foreground hover:text-destructive pb-1">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
