'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type AuthorEntry = {
  authorId: number
  isMain: boolean
  order: number
  Author: { id: number; firstName: string; middleName: string | null; lastName: string; penName: string | null }
}

type TitleDetail = {
  id: number
  sourceId: number | null
  title: string
  isbn: string | null
  languageCode: string | null
  classCode: string | null
  edition: number | null
  pages: number | null
  copyrightYear: string | null
  copyrightOwner: string | null
  keywords: string | null
  volume: number | null
  totalVolumes: number | null
  isHit: boolean
  isCollection: boolean
  isCD: boolean
  notes: string | null
  dateOfReceipt: string | null
  createdAt: string
  updatedAt: string
  clientId: number | null
  publisherId: number | null
  Client: { id: number; name: string; abbreviation: string | null } | null
  Publisher: { id: number; name: string; abbreviation: string | null } | null
  TitleAuthors: AuthorEntry[]
}

type AuthorSuggest = { id: number; fullName: string; penName: string | null }

function authorLabel(a: AuthorEntry['Author']) {
  const name = [a.firstName, a.middleName, a.lastName].filter(Boolean).join(' ')
  return a.penName ? `${name} (${a.penName})` : name
}

export default function TitleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const [title, setTitle] = useState<TitleDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)

  const [authorSearch, setAuthorSearch] = useState('')
  const [authorSuggestions, setAuthorSuggestions] = useState<AuthorSuggest[]>([])
  const [authorSearchOpen, setAuthorSearchOpen] = useState(false)
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const load = async () => {
    setLoading(true)
    const res = await fetch(`/api/titles/${id}`)
    if (res.ok) setTitle(await res.json())
    setLoading(false)
  }

  useEffect(() => { load() }, [id])

  const save = async () => {
    if (!title) return
    await fetch(`/api/titles/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(title),
    })
    setEditMode(false)
    await load()
  }

  const remove = async () => {
    if (!confirm('Usunąć tytuł?')) return
    await fetch(`/api/titles/${id}`, { method: 'DELETE' })
    router.push('/titles')
  }

  const set = (patch: Partial<TitleDetail>) => setTitle(prev => prev ? { ...prev, ...patch } : prev)

  const removeAuthor = async (authorId: number) => {
    await fetch(`/api/titles/${id}/authors?authorId=${authorId}`, { method: 'DELETE' })
    await load()
  }

  const addAuthor = async (author: AuthorSuggest) => {
    setAuthorSearch('')
    setAuthorSuggestions([])
    setAuthorSearchOpen(false)
    await fetch(`/api/titles/${id}/authors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorId: author.id }),
    })
    await load()
  }

  const toggleMain = async (authorId: number, current: boolean) => {
    await fetch(`/api/titles/${id}/authors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorId, isMain: !current }),
    })
    await load()
  }

  useEffect(() => {
    if (!authorSearch.trim()) { setAuthorSuggestions([]); return }
    if (searchTimer.current) clearTimeout(searchTimer.current)
    searchTimer.current = setTimeout(async () => {
      const res = await fetch(`/api/authors?search=${encodeURIComponent(authorSearch)}&pageSize=10`)
      if (res.ok) {
        const data = await res.json()
        setAuthorSuggestions((data.data ?? []).map((a: any) => ({ id: a.id, fullName: a.fullName, penName: a.penName })))
        setAuthorSearchOpen(true)
      }
    }, 250)
  }, [authorSearch])

  const fmtDate = (d: string | null) =>
    d ? new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(d)) : '-'

  if (loading) return <div className="p-8 text-muted-foreground">Ładowanie...</div>
  if (!title) return <div className="p-8 text-red-500">Nie znaleziono tytułu.</div>

  const owner = title.Client ?? title.Publisher
  const ownerHref = title.Client ? `/customers/${title.Client.id}` : title.Publisher ? `/publishers/${title.Publisher.id}` : null
  const ownerName = owner ? (owner.abbreviation || owner.name) : null
  const existingAuthorIds = new Set(title.TitleAuthors.map(a => a.authorId))

  return (
    <div className="space-y-6">

      {/* ── Karta szczegółów ── */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Szczegóły tytułu</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.history.back()}>Powrót</Button>
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>Edytuj</Button>
            ) : (
              <>
                <Button variant="secondary" onClick={() => { setEditMode(false); load() }}>Anuluj</Button>
                <Button variant="primary" onClick={save}>Zapisz</Button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Kolumna 1 — Podstawowe */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Podstawowe</h3>
            <div>
              <label className="label text-xs">Tytuł</label>
              {editMode
                ? <Input value={title.title} onChange={e => set({ title: e.target.value })} />
                : <p className="text-base font-medium">{title.title}</p>}
            </div>
            <div>
              <label className="label text-xs">ISBN</label>
              {editMode
                ? <Input value={title.isbn ?? ''} onChange={e => set({ isbn: e.target.value || null })} />
                : <p className="text-base">{title.isbn || '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Język</label>
              {editMode
                ? <Input value={title.languageCode ?? ''} onChange={e => set({ languageCode: e.target.value || null })} placeholder="np. PL, EN" />
                : <p className="text-base">{title.languageCode || '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Klasa tematyczna</label>
              {editMode
                ? <Input value={title.classCode ?? ''} onChange={e => set({ classCode: e.target.value || null })} />
                : <p className="text-base">{title.classCode || '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Właściciel praw (kontrahent)</label>
              {editMode
                ? <Input value={title.clientId?.toString() ?? ''} onChange={e => set({ clientId: e.target.value ? Number(e.target.value) : null })} placeholder="ID kontrahenta" />
                : ownerHref
                  ? <Link href={ownerHref} className="text-base text-primary-600 hover:underline">{ownerName}</Link>
                  : <p className="text-base">-</p>}
            </div>
          </div>

          {/* Kolumna 2 — Wydanie */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Wydanie</h3>
            <div>
              <label className="label text-xs">Numer wydania</label>
              {editMode
                ? <Input type="number" value={title.edition ?? ''} onChange={e => set({ edition: e.target.value ? Number(e.target.value) : null })} />
                : <p className="text-base">{title.edition ?? '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Liczba stron</label>
              {editMode
                ? <Input type="number" value={title.pages ?? ''} onChange={e => set({ pages: e.target.value ? Number(e.target.value) : null })} />
                : <p className="text-base">{title.pages ?? '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Tom</label>
              {editMode
                ? <Input type="number" value={title.volume ?? ''} onChange={e => set({ volume: e.target.value ? Number(e.target.value) : null })} />
                : <p className="text-base">{title.volume ?? '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Liczba tomów</label>
              {editMode
                ? <Input type="number" value={title.totalVolumes ?? ''} onChange={e => set({ totalVolumes: e.target.value ? Number(e.target.value) : null })} />
                : <p className="text-base">{title.totalVolumes ?? '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Data wpływu</label>
              {editMode
                ? <Input type="date" value={title.dateOfReceipt ? title.dateOfReceipt.slice(0, 10) : ''} onChange={e => set({ dateOfReceipt: e.target.value || null })} />
                : <p className="text-base">{title.dateOfReceipt ? new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(title.dateOfReceipt)) : '-'}</p>}
            </div>
          </div>

          {/* Kolumna 3 — Prawa autorskie */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Prawa autorskie</h3>
            <div>
              <label className="label text-xs">Rok prawa autorskiego</label>
              {editMode
                ? <Input value={title.copyrightYear ?? ''} onChange={e => set({ copyrightYear: e.target.value || null })} placeholder="np. 2023" />
                : <p className="text-base">{title.copyrightYear || '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Właściciel praw (opis)</label>
              {editMode
                ? <Input value={title.copyrightOwner ?? ''} onChange={e => set({ copyrightOwner: e.target.value || null })} />
                : <p className="text-base">{title.copyrightOwner || '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Słowa kluczowe</label>
              {editMode
                ? <Input value={title.keywords ?? ''} onChange={e => set({ keywords: e.target.value || null })} />
                : <p className="text-base">{title.keywords || '-'}</p>}
            </div>
            <div>
              <label className="label text-xs">Cechy</label>
              {editMode ? (
                <div className="flex flex-col gap-2 mt-1">
                  {(['isHit', 'isCollection', 'isCD'] as const).map(key => (
                    <label key={key} className="flex items-center gap-2 text-sm cursor-pointer select-none">
                      <input type="checkbox" checked={title[key]} onChange={e => set({ [key]: e.target.checked })} className="rounded" />
                      {key === 'isHit' ? 'Hit' : key === 'isCollection' ? 'Kolekcja' : 'CD'}
                    </label>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {title.isHit && <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">Hit</span>}
                  {title.isCollection && <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">Kolekcja</span>}
                  {title.isCD && <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">CD</span>}
                  {!title.isHit && !title.isCollection && !title.isCD && <span className="text-base text-muted-foreground">-</span>}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notatki */}
        <div className="mt-6 pt-6 border-t border-border">
          <label className="label text-xs">Notatki</label>
          {editMode
            ? <textarea className="input w-full min-h-[80px]" value={title.notes ?? ''} onChange={e => set({ notes: e.target.value || null })} />
            : <p className="text-base whitespace-pre-wrap">{title.notes || '-'}</p>}
        </div>

        {/* Metadata */}
        <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div><span className="font-medium">Utworzono:</span> {fmtDate(title.createdAt)}</div>
          <div><span className="font-medium">Zmieniono:</span> {fmtDate(title.updatedAt)}</div>
        </div>
      </Card>

      {/* ── Karta z autorami ── */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Autorzy ({title.TitleAuthors.length})</h2>
        </div>

        {title.TitleAuthors.length > 0 ? (
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-medium text-muted-foreground py-2 pr-4">Imię i nazwisko</th>
                <th className="text-left font-medium text-muted-foreground py-2 pr-4">Pseudonim</th>
                <th className="text-left font-medium text-muted-foreground py-2 pr-4">Rola</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {title.TitleAuthors.map(ta => (
                <tr key={ta.authorId} className="border-b border-border last:border-0 group">
                  <td className="py-2 pr-4">
                    <Link href={`/authors/${ta.authorId}`} className="text-primary-600 hover:underline font-medium">
                      {[ta.Author.firstName, ta.Author.middleName, ta.Author.lastName].filter(Boolean).join(' ')}
                    </Link>
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">{ta.Author.penName || '-'}</td>
                  <td className="py-2 pr-4">
                    {ta.isMain
                      ? <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">główny</span>
                      : <span className="text-muted-foreground text-xs">dodatkowy</span>}
                  </td>
                  <td className="py-2">
                    <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleMain(ta.authorId, ta.isMain)}
                        className="text-xs text-muted-foreground hover:text-foreground underline"
                      >
                        {ta.isMain ? 'cofnij główny' : 'ustaw główny'}
                      </button>
                      <button
                        onClick={() => removeAuthor(ta.authorId)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Usuń
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-sm text-muted-foreground mb-4">Brak przypisanych autorów.</p>
        )}

        {/* Dodaj autora */}
        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="relative max-w-sm flex-1">
              <Input
                value={authorSearch}
                onChange={e => setAuthorSearch(e.target.value)}
                onFocus={() => authorSuggestions.length > 0 && setAuthorSearchOpen(true)}
                onBlur={() => setTimeout(() => setAuthorSearchOpen(false), 150)}
                placeholder="Szukaj autora po nazwisku..."
              />
              {authorSearchOpen && authorSuggestions.length > 0 && (
                <ul className="absolute z-30 left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-border rounded shadow-lg max-h-52 overflow-y-auto">
                  {authorSuggestions.filter(s => !existingAuthorIds.has(s.id)).map(s => (
                    <li
                      key={s.id}
                      onMouseDown={() => addAuthor(s)}
                      className="px-3 py-2 text-sm cursor-pointer hover:bg-accent"
                    >
                      {s.fullName}
                      {s.penName && <span className="ml-2 text-xs text-muted-foreground">({s.penName})</span>}
                    </li>
                  ))}
                  {authorSuggestions.every(s => existingAuthorIds.has(s.id)) && (
                    <li className="px-3 py-2 text-sm text-muted-foreground">Wszyscy pasujący autorzy już dodani</li>
                  )}
                </ul>
              )}
            </div>
            <span className="text-sm text-muted-foreground">+ Dodaj autora</span>
          </div>
        </div>
      </Card>

    </div>
  )
}
