'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useSearchMemory } from '../../../../hooks/useSearchMemory'
import { RememberCheckbox } from '../../../../components/ui/RememberCheckbox'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '@/components/ui/Table'
import { Pagination } from '@/components/ui/Pagination'
import { MultiSelect } from '@/components/ui/MultiSelect'
import { SubmissionEventBadge, getSubmissionEventColor } from '@/components/SubmissionEventBadge'

type Submission = {
  id: number; sourceId: number | null
  titleId: number | null; titleName: string | null
  publisherId: number | null; publisherName: string | null; publisherAbb: string | null
  submDate: string; noOfCopies: number | null; exclusive: boolean; submNr: number | null
  copyTypeId: number | null; submSentTypeId: number | null
  lastEventCode: number | null; lastEventDesc: string | null
}

type Meta = { page: number; pageSize: number; total: number; pages: number }
type SortField = 'submDate' | 'id' | 'noOfCopies' | 'submNr'
type DictItem = { id: number; desc: string }
type EvItem   = { code: number; desc: string }

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

export default function SubmissionsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useTranslations()
  const [items, setItems]   = useState<Submission[]>([])
  const [meta, setMeta]     = useState<Meta>({ page: 1, pageSize: 20, total: 0, pages: 1 })
  const [loading, setLoading] = useState(false)

  const [dictCopyTypes,     setDictCopyTypes]     = useState<DictItem[]>([])
  const [dictSubmSentTypes, setDictSubmSentTypes]  = useState<DictItem[]>([])
  const [dictEvents,        setDictEvents]         = useState<EvItem[]>([])

  const { remember, setRemember, initialCriteria, save } = useSearchMemory('submissions', {
    search: '', publisherSearch: '', eventCodes: '',
    exclusive: '', dateFrom: '', dateTo: '', sortBy: 'submDate', sortDir: 'desc', pageSize: 20,
  })

  const [pageSize, setPageSize] = useState(Number(initialCriteria.pageSize))
  const [sortBy,   setSortBy]   = useState<SortField>(initialCriteria.sortBy as SortField)
  const [sortDir,  setSortDir]  = useState<'asc' | 'desc'>(initialCriteria.sortDir as any)
  const [search,          setSearch]          = useState(initialCriteria.search as string)
  const [publisherSearch, setPublisherSearch] = useState(initialCriteria.publisherSearch as string)
  const [eventCodesStr,   setEventCodesStr]   = useState(initialCriteria.eventCodes as string)
  const [exclusiveFilter, setExclusiveFilter] = useState(initialCriteria.exclusive as string)
  const [dateFrom,        setDateFrom]        = useState(initialCriteria.dateFrom as string)
  const [dateTo,          setDateTo]          = useState(initialCriteria.dateTo as string)

  const eventCodesSet = new Set(eventCodesStr.split(',').map(Number).filter(Boolean))
  const debounceRef   = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    fetch('/api/submissions/dicts').then(r => r.json()).then(d => {
      setDictCopyTypes(d.copyTypes ?? [])
      setDictSubmSentTypes(d.submSentTypes ?? [])
      setDictEvents(d.submEvents ?? [])
    })
  }, [])

  const evMap = new Map(dictEvents.map(e => [e.code, e.desc]))
  const copyTypeMap     = new Map(dictCopyTypes.map(c => [c.id, c.desc]))
  const submSentTypeMap = new Map(dictSubmSentTypes.map(s => [s.id, s.desc]))

  const fetchData = async (page = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(page), pageSize: String(pageSize), sort: sortBy, order: sortDir })
      if (search)          params.set('search',        search)
      if (publisherSearch) params.set('publisherName', publisherSearch)
      if (eventCodesStr)   params.set('lastEventCode', eventCodesStr)
      if (exclusiveFilter) params.set('exclusive',     exclusiveFilter)
      if (dateFrom)        params.set('dateFrom',      dateFrom)
      if (dateTo)          params.set('dateTo',        dateTo)

      const res  = await fetch(`/api/submissions?${params}`)
      const json = await res.json()
      setItems(json.data || [])
      if (json.meta) setMeta(json.meta)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchData(1), 300)
    return () => clearTimeout(debounceRef.current)
  }, [search, publisherSearch, eventCodesStr, exclusiveFilter, dateFrom, dateTo, pageSize, sortBy, sortDir])

  useEffect(() => {
    save({ search, publisherSearch, eventCodes: eventCodesStr, exclusive: exclusiveFilter, dateFrom, dateTo, sortBy, sortDir, pageSize })
  }, [search, publisherSearch, eventCodesStr, exclusiveFilter, dateFrom, dateTo, sortBy, sortDir, pageSize])

  useEffect(() => {
    const fromUrl = searchParams.get('lastEventCode')
    if (!fromUrl) return

    const normalized = fromUrl
      .split(',')
      .map((value) => Number(value.trim()))
      .filter((value) => Number.isInteger(value) && value > 0)
      .sort((a, b) => a - b)
      .join(',')

    if (normalized && normalized !== eventCodesStr) {
      setEventCodesStr(normalized)
    }
  }, [searchParams, eventCodesStr])

  const toggleSort = (field: SortField) => {
    if (sortBy === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortBy(field); setSortDir('desc') }
  }

  const resetFilters = () => {
    setSearch(''); setPublisherSearch(''); setEventCodesStr(''); setExclusiveFilter(''); setDateFrom(''); setDateTo('')
  }

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(iso))

  const deleteSubmission = async (id: number) => {
    if (!confirm(t('submissionsPage.confirmDelete'))) return
    await fetch(`/api/submissions/${id}`, { method: 'DELETE' })
    await fetchData(meta.page)
  }

  const SortTh = ({ field, children, className = '' }: { field: SortField; children: React.ReactNode; className?: string }) => (
    <Th className={`cursor-pointer select-none whitespace-nowrap ${className}`} onClick={() => toggleSort(field)}>
      <span className="flex items-center gap-1">
        {children}
        {sortBy === field ? (sortDir === 'asc' ? ' ↑' : ' ↓') : <span className="text-muted-foreground/40"> ↕</span>}
      </span>
    </Th>
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('submissionsPage.title')}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t('submissionsPage.total')} <strong>{meta.total.toLocaleString('pl-PL')}</strong>
          </span>
          <Button size="sm" onClick={() => router.push('/finances/submissions/new')}>{t('submissionsPage.newSubmission')}</Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="label text-xs">{t('submissionsPage.searchLabel')}</label>
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder={t('submissionsPage.searchPlaceholder')} />
          </div>
          <div>
            <label className="label text-xs">{t('submissionsPage.publisherLabel')}</label>
            <Input value={publisherSearch} onChange={e => setPublisherSearch(e.target.value)} placeholder={t('submissionsPage.publisherPlaceholder')} />
          </div>
          <div>
            <label className="label text-xs">{t('submissionsPage.lastEventLabel')}</label>
            <MultiSelect
              placeholder={t('submissionsPage.statusAll')}
              options={dictEvents.map(e => ({
                value: e.code,
                label: e.desc,
                cls: getSubmissionEventColor(e.code),
              }))}
              value={eventCodesSet}
              onChange={next => setEventCodesStr([...next].sort((a, b) => Number(a) - Number(b)).join(','))}
            />
          </div>
          <div>
            <label className="label text-xs">{t('submissionsPage.exclusiveLabel')}</label>
            <select
              value={exclusiveFilter}
              onChange={e => setExclusiveFilter(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">{t('submissionsPage.statusAll')}</option>
              <option value="true">{t('submissionsPage.statusYes')}</option>
              <option value="false">{t('submissionsPage.statusNo')}</option>
            </select>
          </div>
          <div>
            <label className="label text-xs">{t('submissionsPage.dateFromLabel')}</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
          <div>
            <label className="label text-xs">{t('submissionsPage.dateToLabel')}</label>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={resetFilters} className="h-8 text-xs">{t('submissionsPage.clearFilters')}</Button>
            <RememberCheckbox checked={remember} onChange={setRemember} />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{t('submissionsPage.perPage')}</span>
            <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
              className="h-8 rounded border border-input bg-transparent px-2 text-xs"
            >
              {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden">
        {loading ? (
          <p className="p-8 text-center text-muted-foreground">{t('submissionsPage.loading')}</p>
        ) : items.length === 0 ? (
          <p className="p-8 text-center text-muted-foreground">{t('submissionsPage.noSubmissions')}</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <SortTh field="id">ID</SortTh>
                  <Th>{t('submissionsPage.columnTitle')}</Th>
                  <Th>{t('submissionsPage.columnPublisher')}</Th>
                  <SortTh field="submDate">{t('submissionsPage.columnSubmissionDate')}</SortTh>
                  <Th>{t('submissionsPage.columnCopyType')}</Th>
                  <Th>{t('submissionsPage.columnSubmissionType')}</Th>
                  <SortTh field="noOfCopies" className="text-right">{t('submissionsPage.columnCopies')}</SortTh>
                  <Th>{t('submissionsPage.columnExclusive')}</Th>
                  <Th>{t('submissionsPage.columnEvent')}</Th>
                  <Th>{t('common.actions')}</Th>
                </tr>
              </thead>
              <tbody>
                {items.map(s => (
                  <tr key={s.id} className="hover:bg-muted/40 transition-colors">
                    <Td className="font-mono text-xs text-muted-foreground">
                      <Link href={`/finances/submissions/${s.id}`} className="text-primary hover:underline font-medium">
                        {s.sourceId ?? s.id}
                      </Link>
                    </Td>
                    <Td className="max-w-[200px]">
                      {s.titleId ? (
                        <Link href={`/titles/${s.titleId}`} className="hover:underline text-sm font-medium" title={s.titleName ?? ''}>
                          <span className="truncate block max-w-[190px]">{s.titleName ?? '—'}</span>
                        </Link>
                      ) : <span className="text-muted-foreground">—</span>}
                    </Td>
                    <Td className="max-w-[160px]">
                      {s.publisherId ? (
                        <Link href={`/publishers/${s.publisherId}`} className="hover:underline text-sm" title={s.publisherName ?? ''}>
                          {s.publisherAbb ?? s.publisherName ?? '—'}
                        </Link>
                      ) : <span className="text-muted-foreground">—</span>}
                    </Td>
                    <Td className="whitespace-nowrap text-sm">{fmtDate(s.submDate)}</Td>
                    <Td className="text-xs text-muted-foreground">
                      {s.copyTypeId ? (copyTypeMap.get(s.copyTypeId) ?? s.copyTypeId) : '—'}
                    </Td>
                    <Td className="text-xs text-muted-foreground">
                      {s.submSentTypeId ? (submSentTypeMap.get(s.submSentTypeId) ?? s.submSentTypeId) : '—'}
                    </Td>
                    <Td className="text-right tabular-nums text-sm">{s.noOfCopies ?? '—'}</Td>
                    <Td>
                      {s.exclusive
                        ? <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">{t('submissionsPage.statusYes')}</span>
                        : <span className="text-muted-foreground text-xs">{t('submissionsPage.statusNo')}</span>}
                    </Td>
                    <Td>
                      <SubmissionEventBadge code={s.lastEventCode} desc={s.lastEventDesc} />
                    </Td>
                    <Td>
                      <Button variant="destructive" size="sm" onClick={() => deleteSubmission(s.id)}>{t('common.delete')}</Button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {meta.pages > 1 && (
          <div className="border-t border-border px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {t('submissionsPage.page')} {meta.page} {t('common.of')} {meta.pages} ({meta.total.toLocaleString('pl-PL')} {t('submissionsPage.records')})
            </span>
            <Pagination page={meta.page} pages={meta.pages} onPage={fetchData} />
          </div>
        )}
      </Card>
    </div>
  )
}
