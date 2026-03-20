'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Table, Th, Td } from './ui/Table'
import { Pagination } from './ui/Pagination'

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
}

export function TitlesTab({ ownerId, ownerType }: Props) {
  const [titles, setTitles] = useState<TitleRow[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 20, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const load = async (page = 1) => {
    setLoading(true)
    const param = ownerType === 'client' ? `clientId=${ownerId}` : `publisherId=${ownerId}`
    const res = await fetch(`/api/titles?${param}&page=${page}&pageSize=20&sortBy=title&sortOrder=asc`)
    if (res.ok) {
      const data = await res.json()
      setTitles(Array.isArray(data?.data) ? data.data : [])
      setMeta(data?.meta ?? { page, pageSize: 20, total: 0, pages: 1 })
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [ownerId])

  if (loading) return <p className="text-sm text-muted-foreground py-4">Ładowanie tytułów...</p>

  if (titles.length === 0) {
    return <p className="text-sm text-muted-foreground py-4">Brak tytułów dla tego {ownerType === 'client' ? 'kontrahenta' : 'wydawcy'}.</p>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tytuły ({meta.total})</h2>
        <Link href="/titles" className="text-sm text-primary-600 hover:underline">
          Wszystkie tytuły →
        </Link>
      </div>
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
            <tr key={t.id}>
              <Td>
                <Link href={`/titles/${t.id}`} className="text-primary-600 hover:underline">
                  {t.title}
                </Link>
                {t.edition ? <span className="ml-2 text-xs text-muted-foreground">wyd. {t.edition}</span> : null}
              </Td>
              <Td>
                <div className="text-sm">
                  {t.authors.length === 0 ? '—' : t.authors.map(a => (
                    <Link key={a.id} href={`/authors/${a.id}`} className="block text-primary-600 hover:underline leading-snug">
                      {a.name}{a.isMain && t.authors.length > 1 ? ' ★' : ''}
                    </Link>
                  ))}
                </div>
              </Td>
              <Td>{t.isbn ?? '—'}</Td>
              <Td>{t.languageCode ?? '—'}</Td>
              <Td>{t.classCode ?? '—'}</Td>
              <Td>
                <div className="flex gap-1 flex-wrap">
                  {t.isHit && <span className="px-1.5 py-0.5 text-xs rounded bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">Hit</span>}
                  {t.isCollection && <span className="px-1.5 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Kolekcja</span>}
                  {t.isCD && <span className="px-1.5 py-0.5 text-xs rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">CD</span>}
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {meta.pages > 1 && (
        <Pagination page={meta.page} pages={meta.pages} onPage={p => load(p)} />
      )}
    </div>
  )
}
