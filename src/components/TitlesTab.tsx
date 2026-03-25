'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Table, Th, Td } from './ui/Table'
import { Pagination } from './ui/Pagination'
import { Input } from './ui/input'

type TitleRow = {
  id: number
  title: string
  isbn: string | null
  languageCode: string | null
  classCode: string | null
  edition: number | null
  isHit: boolean
  isCollection: boolean
  isCD: boolean
  authors: { id: number; name: string; isMain: boolean }[]
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

type Props = {
  ownerId: number
  ownerType: 'client' | 'publisher'
  onCountLoaded?: (count: number) => void
}

export function TitlesTab({ ownerId, ownerType, onCountLoaded }: Props) {
  const [titles, setTitles]   = useState<TitleRow[]>([])
  const [meta, setMeta]       = useState<Meta>({ page: 1, pageSize: 20, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch]   = useState('')
  const debounce = useRef<ReturnType<typeof setTimeout>>()
  const countReported = useRef(false)

  const load = async (page = 1, q = search) => {
    setLoading(true)
    const ownerParam = ownerType === 'client' ? `clientId=${ownerId}` : `publisherId=${ownerId}`
    const searchParam = q.trim() ? `&search=${encodeURIComponent(q.trim())}` : ''
    const res = await fetch(`/api/titles?${ownerParam}&page=${page}&pageSize=20&sortBy=title&sortOrder=asc${searchParam}`)
    if (res.ok) {
      const data = await res.json()
      const rows: TitleRow[] = Array.isArray(data?.data) ? data.data : []
      const m: Meta = data?.meta ?? { page, pageSize: 20, total: 0, pages: 1 }
      setTitles(rows)
      setMeta(m)
      if (!countReported.current && !q.trim()) {
        countReported.current = true
        onCountLoaded?.(m.total)
      }
    }
    setLoading(false)
  }

  useEffect(() => { load(1, '') }, [ownerId])

  useEffect(() => {
    clearTimeout(debounce.current)
    debounce.current = setTimeout(() => load(1, search), 300)
    return () => clearTimeout(debounce.current)
  }, [search])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="w-72">
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Tytuł / autor — "IT" = dokładnie, "IT = zaczyna się od'
          />
        </div>
        <Link href="/titles" className="text-sm text-primary hover:underline whitespace-nowrap">
          Wszystkie tytuły →
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground py-4">Ładowanie…</p>
      ) : titles.length === 0 ? (
        <p className="text-sm text-muted-foreground py-4 text-center">
          {search ? 'Brak tytułów pasujących do filtra.' : `Brak tytułów dla tego ${ownerType === 'client' ? 'kontrahenta' : 'wydawcy'}.`}
        </p>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <Th>Tytuł</Th>
                <Th>Autorzy</Th>
                <Th>ISBN</Th>
                <Th>Język</Th>
                <Th>Klasa</Th>
                <Th>Cechy</Th>
              </tr>
            </thead>
            <tbody>
              {titles.map(t => (
                <tr key={t.id} className="hover:bg-muted/40 transition-colors">
                  <Td>
                    <Link href={`/titles/${t.id}`} className="text-primary hover:underline font-medium">
                      {t.title}
                    </Link>
                    {t.edition ? <span className="ml-2 text-xs text-muted-foreground">wyd. {t.edition}</span> : null}
                  </Td>
                  <Td>
                    <div className="text-sm">
                      {t.authors.length === 0 ? '—' : t.authors.map(a => (
                        <Link key={a.id} href={`/authors/${a.id}`} className="block text-primary hover:underline leading-snug">
                          {a.name}{a.isMain && t.authors.length > 1 ? ' ★' : ''}
                        </Link>
                      ))}
                    </div>
                  </Td>
                  <Td className="font-mono text-xs">{t.isbn ?? '—'}</Td>
                  <Td className="font-mono text-xs">{t.languageCode ?? '—'}</Td>
                  <Td className="text-xs">{t.classCode ?? '—'}</Td>
                  <Td>
                    <div className="flex gap-1 flex-wrap">
                      {t.isHit        && <span className="px-1.5 py-0.5 text-xs rounded bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">Hit</span>}
                      {t.isCollection && <span className="px-1.5 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Kolekcja</span>}
                      {t.isCD         && <span className="px-1.5 py-0.5 text-xs rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">CD</span>}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          {meta.pages > 1 && (
            <Pagination page={meta.page} pages={meta.pages} onPage={p => load(p)} />
          )}
        </>
      )}
    </div>
  )
}
