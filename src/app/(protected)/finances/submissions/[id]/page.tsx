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
import { SubmissionEventBadge } from '@/components/SubmissionEventBadge'

// ─── Typy ──────────────────────────────────────────────────────────────────────

type DictItem = { id: number; desc: string }
type EvItem   = { code: number; desc: string }

type SubmissionEvent = {
  id: number; sourceId: number | null
  eventCode: number; eventDesc: string | null
  eventDate: string | null; noOfCopies: number | null; endDate: string | null
}
type Submission = {
  id: number; sourceId: number | null
  titleId: number | null
  title:   { id: number; title: string; isbn?: string | null } | null
  publisherId: number | null
  publisher: { id: number; name: string; abbreviation?: string | null; email?: string | null; phone?: string | null } | null
  contactId: number | null
  copyTypeId: number | null; copyTypeDesc: string | null
  submSentTypeId: number | null; submSentTypeDesc: string | null
  submDate: string; sentDate: string | null; endDate: string | null; returnDate: string | null
  noOfCopies: number | null; trackingNo: string | null; exclusive: boolean
  submNr: number | null; status: string | null; remarks: string | null
  userMod: string | null; dateMod: string | null
  lastEventCode: number | null; lastEventDesc: string | null
  events: SubmissionEvent[]
}

type EditEvent = { _key: number; eventCode: string; eventDate: string; noOfCopies: string; endDate: string }
type EditForm = {
  titleId: number | null; titleName: string
  publisherId: number | null; publisherName: string
  copyTypeId: string; submSentTypeId: string
  submDate: string; sentDate: string; endDate: string; returnDate: string
  noOfCopies: string; trackingNo: string; exclusive: boolean
  submNr: string; status: string; remarks: string
  events: EditEvent[]
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

function Field({ label, children }: { label: string; children?: React.ReactNode }) {
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

// ─── Główny komponent ──────────────────────────────────────────────────────────

type Tab = 'info' | 'events'

export default function SubmissionDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const t = useTranslations()
  const [sub, setSub]         = useState<Submission | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const [tab, setTab]         = useState<Tab>('info')
  const [editing, setEditing] = useState(false)
  const [saving, setSaving]   = useState(false)
  const [saveErr, setSaveErr] = useState<string | null>(null)
  const [form, setForm]       = useState<EditForm | null>(null)
  const [dicts, setDicts]     = useState<{ copyTypes: DictItem[]; submSentTypes: DictItem[]; submEvents: EvItem[] } | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetch(`/api/submissions/${id}`)
      .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
      .then(setSub).catch(e => setError(String(e))).finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    fetch('/api/submissions/dicts').then(r => r.json()).then(d => setDicts({
      copyTypes:     d.copyTypes     ?? [],
      submSentTypes: d.submSentTypes ?? [],
      submEvents:    d.submEvents    ?? [],
    }))
  }, [])

  const startEdit = () => {
    if (!sub) return
    setForm({
      titleId: sub.titleId,         titleName: sub.title?.title ?? '',
      publisherId: sub.publisherId, publisherName: sub.publisher?.name ?? '',
      copyTypeId:     String(sub.copyTypeId     ?? ''),
      submSentTypeId: String(sub.submSentTypeId ?? ''),
      submDate:   isoDate(sub.submDate),
      sentDate:   isoDate(sub.sentDate),
      endDate:    isoDate(sub.endDate),
      returnDate: isoDate(sub.returnDate),
      noOfCopies: String(sub.noOfCopies ?? ''),
      trackingNo: sub.trackingNo ?? '',
      exclusive:  sub.exclusive,
      submNr:     String(sub.submNr ?? ''),
      status:     sub.status ?? '',
      remarks:    sub.remarks ?? '',
      events: sub.events.map(e => ({
        _key: nextKey(),
        eventCode:  String(e.eventCode),
        eventDate:  isoDate(e.eventDate),
        noOfCopies: String(e.noOfCopies ?? ''),
        endDate:    isoDate(e.endDate),
      })),
    })
    setEditing(true); setSaveErr(null)
  }

  const cancelEdit = () => { setEditing(false); setForm(null); setSaveErr(null) }

  const setF = (patch: Partial<EditForm>) => setForm(f => f ? { ...f, ...patch } : f)

  const setEvField = (_key: number, patch: Partial<EditEvent>) =>
    setForm(f => f ? { ...f, events: f.events.map(e => e._key === _key ? { ...e, ...patch } : e) } : f)

  const addEvent = () =>
    setForm(f => f ? { ...f, events: [...f.events, { _key: nextKey(), eventCode: '', eventDate: isoDate(new Date().toISOString()), noOfCopies: '', endDate: '' }] } : f)

  const removeEvent = (_key: number) =>
    setForm(f => f ? { ...f, events: f.events.filter(e => e._key !== _key) } : f)

  const handleSave = async () => {
    if (!form || !sub) return
    setSaving(true); setSaveErr(null)
    try {
      const body = {
        titleId:        form.titleId,
        publisherId:    form.publisherId,
        copyTypeId:     form.copyTypeId     ? Number(form.copyTypeId)     : null,
        submSentTypeId: form.submSentTypeId ? Number(form.submSentTypeId) : null,
        submDate:       form.submDate   || undefined,
        sentDate:       form.sentDate   || null,
        endDate:        form.endDate    || null,
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
      const res = await fetch(`/api/submissions/${sub.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      })
      if (!res.ok) { setSaveErr((await res.json()).error ?? 'Błąd zapisu'); return }
      const updated = await fetch(`/api/submissions/${sub.id}`).then(r => r.json())
      setSub(updated); setEditing(false); setForm(null)
    } finally { setSaving(false) }
  }

  if (loading) return <div className="p-8 text-center text-muted-foreground">{t('submissionDetail.loading')}</div>
  if (error || !sub) return (
    <div className="space-y-4">
      <Button variant="outline" onClick={() => router.back()} className="gap-1"><ChevronLeft className="h-4 w-4" />{t('submissionDetail.back')}</Button>
      <Card className="p-8 text-center text-destructive">{error || t('submissionDetail.notFound')}</Card>
    </div>
  )

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: 'info',   label: t('submissionDetail.infoTab') },
    { key: 'events', label: t('submissionDetail.eventsTab'), count: editing ? form?.events.length : sub.events.length },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="gap-1">
            <ChevronLeft className="h-4 w-4" />{t('submissionDetail.back')}
          </Button>
          <div>
            <h1 className="text-xl font-bold leading-tight">{t('submissionDetail.title')} #{sub.sourceId ?? sub.id}</h1>
            <p className="text-xs text-muted-foreground">
              {sub.publisher
                ? <Link href={`/publishers/${sub.publisher.id}`} className="hover:underline font-medium">{sub.publisher.abbreviation ?? sub.publisher.name}</Link>
                : '—'}
              {' → '}
              {sub.title
                ? <Link href={`/titles/${sub.title.id}`} className="hover:underline">{sub.title.title}</Link>
                : '—'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SubmissionEventBadge code={sub.lastEventCode} desc={sub.lastEventDesc} />
          {!editing
            ? <Button size="sm" variant="outline" onClick={startEdit} className="gap-1"><Pencil className="h-3.5 w-3.5" />{t('submissionDetail.edit')}</Button>
            : <div className="flex items-center gap-2">
                <Button size="sm" onClick={handleSave} disabled={saving}>{saving ? t('submissionDetail.saving') : t('submissionDetail.saveChanges')}</Button>
                <Button size="sm" variant="outline" onClick={cancelEdit} disabled={saving}>{t('submissionDetail.cancel')}</Button>
              </div>
          }
        </div>
      </div>

      {saveErr && <p className="text-sm text-destructive bg-destructive/10 rounded px-3 py-2">{t('submissionDetail.saveError')}: {saveErr}</p>}

      {/* Tabs + content */}
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

          {/* ── Info — widok ─────────────────────────────────────────────── */}
          {tab === 'info' && !editing && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{t('submissionDetail.sectionSubmissionParties')}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-border p-3 space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">{t('submissionDetail.publisher')}</p>
                    {sub.publisher ? <>
                      <Link href={`/publishers/${sub.publisher.id}`} className="font-semibold hover:underline text-sm">{sub.publisher.name}</Link>
                      {sub.publisher.email && <p className="text-xs text-muted-foreground">{sub.publisher.email}</p>}
                    </> : <p className="text-sm text-muted-foreground">—</p>}
                  </div>
                  <div className="rounded-lg border border-border p-3 space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">{t('submissionDetail.title')}</p>
                    {sub.title ? <>
                      <Link href={`/titles/${sub.title.id}`} className="font-semibold hover:underline text-sm">{sub.title.title}</Link>
                      {sub.title.isbn && <p className="text-xs text-muted-foreground">ISBN: {sub.title.isbn}</p>}
                    </> : <p className="text-sm text-muted-foreground">—</p>}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{t('submissionDetail.sectionSubmissionDetails')}</h3>
                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Field label={t('submissionDetail.submissionDate')}>{fmtDate(sub.submDate)}</Field>
                  <Field label={t('submissionDetail.sentDate')}>{fmtDate(sub.sentDate)}</Field>
                  <Field label={t('submissionDetail.endDate')}>{fmtDate(sub.endDate)}</Field>
                  <Field label={t('submissionDetail.returnDate')}>{fmtDate(sub.returnDate)}</Field>
                  <Field label={t('submissionDetail.copyType')}>{sub.copyTypeDesc}</Field>
                  <Field label={t('submissionDetail.sendingMethod')}>{sub.submSentTypeDesc}</Field>
                  <Field label={t('submissionDetail.numberOfCopies')}>{sub.noOfCopies}</Field>
                  <Field label={t('submissionDetail.trackingNumber')}>{sub.trackingNo}</Field>
                  <Field label={t('submissionDetail.submissionNumber')}>{sub.submNr}</Field>
                  <Field label={t('submissionDetail.status')}>{sub.status}</Field>
                  <Field label={t('submissionDetail.exclusive')}>
                    {sub.exclusive
                      ? <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">{t('submissionDetail.yes')}</span>
                      : <span className="text-muted-foreground text-xs font-normal">{t('submissionDetail.no')}</span>}
                  </Field>
                  <Field label={t('submissionDetail.lastEvent')}>
                    <SubmissionEventBadge code={sub.lastEventCode} desc={sub.lastEventDesc} />
                  </Field>
                </div>
              </div>

              {sub.remarks && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">{t('submissionDetail.remarks')}</h3>
                  <p className="text-sm whitespace-pre-wrap rounded-lg bg-muted/40 p-3">{sub.remarks}</p>
                </div>
              )}

              <div className="text-xs text-muted-foreground border-t border-border pt-3 flex gap-6">
                {sub.dateMod && <span>{t('submissionDetail.lastModified')}: {fmtDateTime(sub.dateMod)}</span>}
                {sub.userMod && <span>{t('submissionDetail.modifiedBy')}: {sub.userMod}</span>}
              </div>
            </div>
          )}

          {/* ── Info — edycja ────────────────────────────────────────────── */}
          {tab === 'info' && editing && form && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{t('submissionDetail.sectionSubmissionParties')}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <EntitySearch label={t('submissionDetail.selectPublisher')} placeholder={t('submissionDetail.searchPublisher')}
                    value={form.publisherId} displayValue={form.publisherName}
                    onSelect={(id, lbl) => setF({ publisherId: id, publisherName: lbl })}
                    onClear={() => setF({ publisherId: null, publisherName: '' })}
                    fetchUrl={q => `/api/publishers?search=${q}&pageSize=15`}
                    mapResult={r => ({ id: r.id, label: r.name, sub: r.abbreviation ?? undefined })} />
                  <EntitySearch label={t('submissionDetail.selectTitle')} placeholder={t('submissionDetail.searchTitle')}
                    value={form.titleId} displayValue={form.titleName}
                    onSelect={(id, lbl) => setF({ titleId: id, titleName: lbl })}
                    onClear={() => setF({ titleId: null, titleName: '' })}
                    fetchUrl={q => `/api/titles?search=${q}&pageSize=15`}
                    mapResult={r => ({ id: r.id, label: r.title, sub: r.author ?? undefined })} />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{t('submissionDetail.sectionSubmissionDetails')}</h3>
                <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.submissionDate')}</label>
                    <input type="date" value={form.submDate} onChange={e => setF({ submDate: e.target.value })} className={INPUT_CLS} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.sentDate')}</label>
                    <input type="date" value={form.sentDate} onChange={e => setF({ sentDate: e.target.value })} className={INPUT_CLS} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.endDate')}</label>
                    <input type="date" value={form.endDate} onChange={e => setF({ endDate: e.target.value })} className={INPUT_CLS} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.returnDate')}</label>
                    <input type="date" value={form.returnDate} onChange={e => setF({ returnDate: e.target.value })} className={INPUT_CLS} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.copyType')}</label>
                    <select value={form.copyTypeId} onChange={e => setF({ copyTypeId: e.target.value })} className={INPUT_CLS}>
                      <option value="">—</option>
                      {dicts?.copyTypes.map(c => <option key={c.id} value={c.id}>{c.desc}</option>)}
                    </select></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.sendingMethod')}</label>
                    <select value={form.submSentTypeId} onChange={e => setF({ submSentTypeId: e.target.value })} className={INPUT_CLS}>
                      <option value="">—</option>
                      {dicts?.submSentTypes.map(s => <option key={s.id} value={s.id}>{s.desc}</option>)}
                    </select></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.numberOfCopies')}</label>
                    <Input type="number" value={form.noOfCopies} onChange={e => setF({ noOfCopies: e.target.value })} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.trackingNumber')}</label>
                    <Input value={form.trackingNo} onChange={e => setF({ trackingNo: e.target.value })} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.submissionNumber')}</label>
                    <Input type="number" value={form.submNr} onChange={e => setF({ submNr: e.target.value })} /></div>
                  <div><label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.status')}</label>
                    <Input value={form.status} onChange={e => setF({ status: e.target.value })} maxLength={1} /></div>
                  <div className="flex items-center gap-2 pt-5">
                    <input type="checkbox" id="exclusive" checked={form.exclusive}
                      onChange={e => setF({ exclusive: e.target.checked })} className="rounded border-input" />
                    <label htmlFor="exclusive" className="text-sm">{t('submissionDetail.exclusive')}</label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">{t('submissionDetail.remarks')}</h3>
                <textarea value={form.remarks} onChange={e => setF({ remarks: e.target.value })}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  rows={3} />
              </div>
            </div>
          )}

          {/* ── Zdarzenia — widok ────────────────────────────────────────── */}
          {tab === 'events' && !editing && (
            sub.events.length === 0
              ? <p className="text-center text-muted-foreground py-8">{t('submissionDetail.noEvents')}</p>
              : <div className="overflow-x-auto -mx-6 -mb-6">
                  <Table>
                    <thead>
                      <tr>
                        <Th>{t('submissionDetail.title')}</Th>
                        <Th>{t('submissionDetail.eventDate')}</Th>
                        <Th className="text-right">{t('submissionDetail.copies')}</Th>
                        <Th>{t('submissionDetail.finalDate')}</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {sub.events.map(e => (
                        <tr key={e.id} className="hover:bg-muted/40 transition-colors">
                          <Td><SubmissionEventBadge code={e.eventCode} desc={e.eventDesc} /></Td>
                          <Td className="whitespace-nowrap text-sm">{fmtDate(e.eventDate)}</Td>
                          <Td className="text-right tabular-nums text-sm">{e.noOfCopies ?? '—'}</Td>
                          <Td className="whitespace-nowrap text-sm">{fmtDate(e.endDate)}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
          )}

          {/* ── Zdarzenia — edycja ───────────────────────────────────────── */}
          {tab === 'events' && editing && form && (
            <div className="space-y-3">
              {form.events.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">{t('submissionDetail.addFirstEvent')}</p>
              )}
              {form.events.map(ev => (
                <div key={ev._key} className="grid gap-3 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] items-end border border-border rounded-lg p-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.title')}</label>
                    <select value={ev.eventCode} onChange={e => setEvField(ev._key, { eventCode: e.target.value })} className={INPUT_CLS}>
                      <option value="">{t('submissionDetail.selectEvent')}</option>
                      {dicts?.submEvents.map(e => <option key={e.code} value={e.code}>{e.desc}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.eventDate')}</label>
                    <input type="date" value={ev.eventDate} onChange={e => setEvField(ev._key, { eventDate: e.target.value })} className={INPUT_CLS} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.copies')}</label>
                    <Input type="number" value={ev.noOfCopies} onChange={e => setEvField(ev._key, { noOfCopies: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{t('submissionDetail.finalDate')}</label>
                    <input type="date" value={ev.endDate} onChange={e => setEvField(ev._key, { endDate: e.target.value })} className={INPUT_CLS} />
                  </div>
                  <button type="button" onClick={() => removeEvent(ev._key)} className="text-muted-foreground hover:text-destructive pb-1">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addEvent}><Plus className="h-3.5 w-3.5 mr-1" />{t('submissionDetail.addEvent')}</Button>
            </div>
          )}

        </div>
      </Card>
    </div>
  )
}
