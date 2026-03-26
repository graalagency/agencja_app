'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '@/components/ui/Table'
import { ChevronLeft, Pencil } from 'lucide-react'

type Author = {
  id: number
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  fullName?: string | null
  suffix?: string | null
  penName?: string | null
  remarks?: string | null
  dateMod?: string | null
  userMod?: string | null
}

type AuthorTitle = {
  id: number
  title: string
  isbn: string | null
  languageCode: string | null
  edition: number | null
  copyrightYear: string | null
  pages: number | null
  isMain: boolean
  order: number
  agreementCount: number
}

type Tab = 'info' | 'titles'

export default function AuthorDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const t = useTranslations('authors')
  const tCommon = useTranslations('common')

  const [author, setAuthor] = useState<Author | null>(null)
  const [titles, setTitles] = useState<AuthorTitle[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('info')
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveErr, setSaveErr] = useState('')

  const loadAuthor = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/authors/${id}`)
      const data = await res.json()
      setAuthor(data)
    } finally {
      setLoading(false)
    }
  }

  const loadTitles = async () => {
    try {
      const res = await fetch(`/api/authors/${id}/titles`)
      if (!res.ok) {
        setTitles([])
        return
      }
      const data = await res.json()
      setTitles(Array.isArray(data) ? data : data.data || [])
    } catch (err) {
      setTitles([])
    }
  }

  useEffect(() => {
    if (id) {
      loadAuthor()
      loadTitles()
    }
  }, [id])

  const startEdit = () => {
    setEditing(true)
    setSaveErr('')
  }

  const cancelEdit = () => {
    setEditing(false)
    setSaveErr('')
    loadAuthor()
  }

  const handleSave = async () => {
    if (!author) return
    setSaving(true)
    setSaveErr('')
    try {
      const res = await fetch(`/api/authors/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: author.firstName,
          middleName: author.middleName,
          lastName: author.lastName,
          fullName: author.fullName,
          suffix: author.suffix,
          penName: author.penName,
          remarks: author.remarks,
        })
      })
      if (!res.ok) {
        setSaveErr((await res.json()).error ?? t('saveError'))
        return
      }
      await loadAuthor()
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8 text-center text-muted-foreground">{tCommon('loading')}</div>
  if (!author) return (
    <div className="space-y-4">
      <Button variant="outline" onClick={() => router.back()} className="gap-1">
        <ChevronLeft className="h-4 w-4" />{tCommon('back')}
      </Button>
      <Card className="p-8 text-center text-destructive">{t('notFound')}</Card>
    </div>
  )

  const tabs: { key: Tab; label: string }[] = [
    { key: 'info', label: t('tabInfo') },
    { key: 'titles', label: t('tabTitles') },
  ]

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(iso))

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="gap-1">
            <ChevronLeft className="h-4 w-4" />{tCommon('back')}
          </Button>
          <div>
            <h1 className="text-xl font-bold leading-tight">{author.fullName || `${author.firstName} ${author.lastName}`}</h1>
            {author.penName && <p className="text-xs text-muted-foreground">ps. {author.penName}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!editing
            ? <Button size="sm" variant="outline" onClick={startEdit} className="gap-1"><Pencil className="h-3.5 w-3.5" />{tCommon('edit')}</Button>
            : <div className="flex items-center gap-2">
                <Button size="sm" onClick={handleSave} disabled={saving}>{saving ? tCommon('saving') : tCommon('save')}</Button>
                <Button size="sm" variant="outline" onClick={cancelEdit} disabled={saving}>{tCommon('cancel')}</Button>
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
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">

          {/* ── Info ────────────────────────────────────────────── */}
          {tab === 'info' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dane podstawowe */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('sectionBasic')}</h3>
                  <div>
                    <label className="label text-xs">ID</label>
                    <div className="text-sm font-medium">{author.id}</div>
                  </div>
                  <div>
                    <label className="label text-xs">{t('fullName')}</label>
                    {editing ? (
                      <Input value={author.fullName || ''} onChange={e => setAuthor({ ...author, fullName: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.fullName || '—'}</div>
                    )}
                  </div>
                  <div>
                    <label className="label text-xs">{t('firstName')}</label>
                    {editing ? (
                      <Input value={author.firstName || ''} onChange={e => setAuthor({ ...author, firstName: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.firstName || '—'}</div>
                    )}
                  </div>
                  <div>
                    <label className="label text-xs">{t('middleName')}</label>
                    {editing ? (
                      <Input value={author.middleName || ''} onChange={e => setAuthor({ ...author, middleName: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.middleName || '—'}</div>
                    )}
                  </div>
                  <div>
                    <label className="label text-xs">{t('lastName')}</label>
                    {editing ? (
                      <Input value={author.lastName || ''} onChange={e => setAuthor({ ...author, lastName: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.lastName || '—'}</div>
                    )}
                  </div>
                  <div>
                    <label className="label text-xs">{tCommon('suffix')}</label>
                    {editing ? (
                      <Input value={author.suffix || ''} onChange={e => setAuthor({ ...author, suffix: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.suffix || '—'}</div>
                    )}
                  </div>
                </div>

                {/* Dane dodatkowe */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('sectionAdditional')}</h3>
                  <div>
                    <label className="label text-xs">{t('penName')}</label>
                    {editing ? (
                      <Input value={author.penName || ''} onChange={e => setAuthor({ ...author, penName: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.penName || '—'}</div>
                    )}
                  </div>
                  <div>
                    <label className="label text-xs">{t('remarks')}</label>
                    {editing ? (
                      <Input value={author.remarks || ''} onChange={e => setAuthor({ ...author, remarks: e.target.value })} />
                    ) : (
                      <div className="text-sm font-medium">{author.remarks || '—'}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Metadane na dole */}
              <div className="text-xs text-muted-foreground border-t border-border pt-3 flex gap-6">
                {author.dateMod && <span>{tCommon('dateModified')}: {new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(author.dateMod))}</span>}
                {author.userMod && <span>{tCommon('modifiedBy')}: {author.userMod}</span>}
              </div>
            </div>
          )}

          {/* ── Titles ────────────────────────────────────────────── */}
          {tab === 'titles' && (
            <div className="space-y-4">
              {titles.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">{t('noTitles')}</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <thead>
                      <tr>
                        <Th>ID</Th>
                        <Th>{tCommon('title')}</Th>
                        <Th>ISBN</Th>
                        <Th>{t('colLanguage')}</Th>
                        <Th>{t('colEdition')}</Th>
                        <Th className="text-right">{t('colPages')}</Th>
                        <Th>{t('colCopyrightYear')}</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {titles.map(t => (
                        <tr key={t.id}>
                          <Td className="font-mono text-xs text-muted-foreground">{t.id}</Td>
                          <Td className="max-w-[300px]">
                            <Link href={`/titles/${t.id}`} className="text-primary hover:underline font-medium">
                              <span className="truncate block text-sm">{t.title}</span>
                            </Link>
                          </Td>
                          <Td className="font-mono text-xs">{t.isbn ?? '—'}</Td>
                          <Td className="font-mono text-xs">{t.languageCode ?? '—'}</Td>
                          <Td className="text-center text-sm">{t.edition ?? '—'}</Td>
                          <Td className="text-right text-sm">{t.pages ?? '—'}</Td>
                          <Td className="text-sm">{t.copyrightYear ?? '—'}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          )}

        </div>
      </Card>
    </div>
  )
}
