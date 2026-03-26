'use client'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSearchMemory } from '../../../../hooks/useSearchMemory'
import { useDeleteConfirmation } from '../../../../hooks/useDeleteConfirmation'
import { RememberCheckbox } from '../../../../components/ui/RememberCheckbox'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '@/components/ui/Table'
import { Pagination } from '@/components/ui/Pagination'
import { MultiSelect } from '@/components/ui/MultiSelect'
import { EVENT_LABELS, AgreementEventBadge as EventBadge } from '@/components/AgreementEventBadge'

type Agreement = {
  id: number; sourceId: number | null
  publisherId: number | null; publisherName: string | null; publisherAbb: string | null
  clientId: number | null; clientName: string | null
  titleId: number | null; titleName: string | null
  agrDate: string; status: string | null; lastEventCode: number | null
  currencyCode: string | null; languageCode: string | null
  commission: number | null; validYY: number | null; localTitle: string | null
}
type Meta = { page: number; pageSize: number; total: number; pages: number }
type SortField = 'agrDate' | 'id' | 'commission' | 'status' | 'currencyCode'

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]
const CACHE = {
  filters: 'agr_filters_v2',
  sort: 'agr_sort_v2',
  pageSize: 'agr_pageSize_v2',
}

type DictItem = { code: string; desc?: string; descPL?: string }

export default function AgreementsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useTranslations()
  const { openDeleteConfirmation } = useDeleteConfirmation()
  const [items, setItems]       = useState<Agreement[]>([])
  const [meta, setMeta]         = useState<Meta>({ page: 1, pageSize: 20, total: 0, pages: 1 })
  const [loading, setLoading]   = useState(false)
  const [dictCurrencies, setDictCurrencies] = useState<DictItem[]>([])
  const [dictLanguages,  setDictLanguages]  = useState<DictItem[]>([])

  const { remember, setRemember, initialCriteria, save } = useSearchMemory('agreements', {
    search: '', publisherSearch: '', clientSearch: '', currencies: '', languages: '',
    eventCodes: '', dateFrom: '', dateTo: '', sortBy: 'agrDate', sortDir: 'desc', pageSize: 20,
  })
  const [pageSize, setPageSize] = useState(Number(initialCriteria.pageSize))
  const [sortBy, setSortBy]     = useState<SortField>(initialCriteria.sortBy as SortField)
  const [sortDir, setSortDir]   = useState<'asc' | 'desc'>(initialCriteria.sortDir as any)

  const [search,          setSearch]          = useState(initialCriteria.search as string)
  const [publisherSearch, setPublisherSearch] = useState(initialCriteria.publisherSearch as string)
  const [clientSearch,    setClientSearch]    = useState(initialCriteria.clientSearch as string)
  // comma-sep strings for reliable useEffect deps
  const [currenciesStr, setCurrenciesStr] = useState<string>(initialCriteria.currencies as string)
  const [languagesStr,  setLanguagesStr]  = useState<string>(initialCriteria.languages  as string)
  const [eventCodesStr, setEventCodesStr] = useState<string>(initialCriteria.eventCodes as string)
  const [dateFrom,        setDateFrom]        = useState(initialCriteria.dateFrom as string)
  const [dateTo,          setDateTo]          = useState(initialCriteria.dateTo as string)

  const currenciesSet = new Set(currenciesStr.split(',').filter(Boolean))
  const languagesSet  = new Set(languagesStr.split(',').filter(Boolean))
  const eventCodesSet = new Set(eventCodesStr.split(',').map(Number).filter(Boolean))

  const toStr = (s: Set<string | number>) => [...s].map(String).sort().join(',')

  useEffect(() => {
    fetch('/api/agreements/dicts')
      .then(r => r.json())
      .then(d => {
        setDictCurrencies(d.currencies ?? [])
        setDictLanguages(d.languages  ?? [])
      })
  }, [])

  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const fetchData = async (page = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(page), pageSize: String(pageSize), sort: sortBy, order: sortDir })
      if (search)          params.set('search',        search)
      if (publisherSearch) params.set('publisherName', publisherSearch)
      if (clientSearch)    params.set('clientName',    clientSearch)
      if (currenciesStr)   params.set('currency',      currenciesStr)
      if (languagesStr)    params.set('language',      languagesStr)
      if (eventCodesStr)   params.set('lastEventCode', eventCodesStr)
      if (dateFrom)        params.set('dateFrom',      dateFrom)
      if (dateTo)          params.set('dateTo',        dateTo)

      const res  = await fetch(`/api/agreements?${params}`)
      const json = await res.json()
      setItems(json.data || [])
      setMeta(json.meta)
    } finally {
      setLoading(false)
    }
  }

  // debounced fetch on filter changes
  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchData(1), 300)
    return () => clearTimeout(debounceRef.current)
  }, [search, publisherSearch, clientSearch, currenciesStr, languagesStr, eventCodesStr, dateFrom, dateTo, pageSize, sortBy, sortDir])

  useEffect(() => {
    save({ search, publisherSearch, clientSearch, currencies: currenciesStr, languages: languagesStr, eventCodes: eventCodesStr, dateFrom, dateTo, sortBy, sortDir, pageSize })
  }, [search, publisherSearch, clientSearch, currenciesStr, languagesStr, eventCodesStr, dateFrom, dateTo, sortBy, sortDir, pageSize])

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
    setSearch(''); setPublisherSearch(''); setClientSearch('')
    setCurrenciesStr(''); setLanguagesStr(''); setEventCodesStr(''); setDateFrom(''); setDateTo('')
  }

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(iso))

  const SortTh = ({ field, children, className = '' }: { field: SortField; children: React.ReactNode; className?: string }) => (
    <Th className={`cursor-pointer select-none whitespace-nowrap ${className}`} onClick={() => toggleSort(field)}>
      <span className="flex items-center gap-1">
        {children}
        {sortBy === field ? (sortDir === 'asc' ? ' ↑' : ' ↓') : <span className="text-muted-foreground/40"> ↕</span>}
      </span>
    </Th>
  )

  const deleteAgreement = (id: number) => {
    openDeleteConfirmation({
      title: t('agreementsPage.deleteTitle'),
      message: t('agreementsPage.deleteMessage'),
      onConfirm: async () => {
        await fetch(`/api/agreements/${id}`, { method: 'DELETE' })
        await fetchData(meta.page)
      },
    })
  }
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('agreementsPage.title')}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t('agreementsPage.total')} <strong>{meta.total.toLocaleString('pl-PL')}</strong>
          </span>
          <Button size="sm" onClick={() => router.push('/finances/agreements/new')}>{t('agreementsPage.newAgreement')}</Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="label text-xs">{t('agreementsPage.searchLabel')}</label>
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder={t('agreementsPage.searchPlaceholder')} />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.publisherLabel')}</label>
            <Input value={publisherSearch} onChange={e => setPublisherSearch(e.target.value)} placeholder={t('agreementsPage.publisherPlaceholder')} />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.clientLabel')}</label>
            <Input value={clientSearch} onChange={e => setClientSearch(e.target.value)} placeholder={t('agreementsPage.clientPlaceholder')} />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.statusLabel')}</label>
            <MultiSelect
              placeholder={t('agreementsPage.statusAll')}
              options={Object.entries(EVENT_LABELS).map(([k, v]) => ({ value: Number(k), label: v.label, cls: v.cls }))}
              value={eventCodesSet}
              onChange={next => setEventCodesStr([...next].sort((a, b) => Number(a) - Number(b)).join(','))}
            />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.currencyLabel')}</label>
            <MultiSelect
              placeholder={t('agreementsPage.statusAll')}
              searchable
              options={dictCurrencies.map(c => ({ value: c.code, label: `${c.code} – ${c.desc}` }))}
              value={currenciesSet}
              onChange={next => setCurrenciesStr(toStr(next))}
            />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.languageLabel')}</label>
            <MultiSelect
              placeholder={t('agreementsPage.statusAll')}
              searchable
              options={dictLanguages.map(l => ({ value: l.code, label: `${l.code} – ${l.descPL}` }))}
              value={languagesSet}
              onChange={next => setLanguagesStr(toStr(next))}
            />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.dateFromLabel')}</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
          <div>
            <label className="label text-xs">{t('agreementsPage.dateToLabel')}</label>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={resetFilters} className="h-8 text-xs">{t('agreementsPage.clearFilters')}</Button>
            <RememberCheckbox checked={remember} onChange={setRemember} />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{t('agreementsPage.perPage')}</span>
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

      {/* Table */}
      <Card className="p-0 overflow-hidden">
        {loading ? (
          <p className="p-8 text-center text-muted-foreground">{t('agreementsPage.loading')}</p>
        ) : items.length === 0 ? (
          <p className="p-8 text-center text-muted-foreground">{t('agreementsPage.noAgreements')}</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <SortTh field="id">ID</SortTh>
                  <Th>{t('agreementsPage.columnPublisher')}</Th>
                  <Th>{t('agreementsPage.columnClient')}</Th>
                  <Th>{t('agreementsPage.columnTitle')}</Th>
                  <SortTh field="agrDate">{t('agreementsPage.columnDate')}</SortTh>
                  <SortTh field="currencyCode">{t('agreementsPage.columnCurrency')}</SortTh>
                  <Th>{t('agreementsPage.columnLanguage')}</Th>
                  <SortTh field="commission" className="text-right">{t('agreementsPage.columnCommission')}</SortTh>
                  <SortTh field="status">{t('agreementsPage.columnStatus')}</SortTh>
                  <Th>{t('common.actions')}</Th>
                </tr>
              </thead>
              <tbody>
                {items.map(a => (
                  <tr key={a.id} className="hover:bg-muted/40 transition-colors">
                    <Td className="font-mono text-xs text-muted-foreground">
                      <Link href={`/finances/agreements/${a.id}`} className="text-primary hover:underline font-medium">
                        {a.sourceId ?? a.id}
                      </Link>
                    </Td>
                    <Td className="max-w-[200px]">
                      {a.publisherId ? (
                        <Link href={`/publishers/${a.publisherId}`} className="hover:underline text-sm font-medium" title={a.publisherName ?? ''}>
                          {a.publisherAbb ?? a.publisherName ?? '—'}
                        </Link>
                      ) : <span className="text-muted-foreground">—</span>}
                    </Td>
                    <Td className="max-w-[180px]">
                      {a.clientId ? (
                        <Link href={`/customers/${a.clientId}`} className="hover:underline text-sm" title={a.clientName ?? ''}>
                          <span className="truncate block max-w-[170px]">{a.clientName ?? '—'}</span>
                        </Link>
                      ) : <span className="text-muted-foreground">—</span>}
                    </Td>
                    <Td className="max-w-[200px]">
                      <span className="truncate block max-w-[190px] text-sm" title={a.titleName ?? ''}>
                        {a.titleName ?? a.localTitle ?? <span className="text-muted-foreground">—</span>}
                      </span>
                    </Td>
                    <Td className="whitespace-nowrap text-sm">{fmtDate(a.agrDate)}</Td>
                    <Td className="font-mono text-xs">{a.currencyCode ?? '—'}</Td>
                    <Td className="font-mono text-xs">{a.languageCode ?? '—'}</Td>
                    <Td className="text-right tabular-nums text-sm">
                      {a.commission != null ? `${Number(a.commission).toFixed(1)} %` : '—'}
                    </Td>
                    <Td><EventBadge code={a.lastEventCode} /></Td>
                    <Td className="text-right">
                      <Button variant="destructive" size="sm" onClick={() => deleteAgreement(a.id)}>{t('common.delete')}</Button>
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
              {t('agreementsPage.page')} {meta.page} {t('common.of')} {meta.pages} ({meta.total.toLocaleString('pl-PL')} {t('agreementsPage.records')})
            </span>
            <Pagination page={meta.page} pages={meta.pages} onPage={fetchData} />
          </div>
        )}
      </Card>
    </div>
  )
}
