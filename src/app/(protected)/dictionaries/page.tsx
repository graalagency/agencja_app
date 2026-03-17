'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { Coins, Globe, Languages, Search, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { hasModuleAccess, type ModuleKey, type RolePermissionsMap } from '@/lib/permissions'

type DictionaryItem = {
  id: 'countries' | 'currencies' | 'language-dictionary'
  moduleKey: ModuleKey
  href: string
  labelKey: 'navigation.countryDictionary' | 'navigation.currencyDictionary' | 'navigation.languageDictionary'
  descriptionKey: 'dictionaryHub.countryDescription' | 'dictionaryHub.currencyDescription' | 'dictionaryHub.languageDescription'
  group: 'regional' | 'finance' | 'content'
}

const DICTIONARY_ITEMS: DictionaryItem[] = [
  {
    id: 'countries',
    moduleKey: 'countries',
    href: '/countries',
    labelKey: 'navigation.countryDictionary',
    descriptionKey: 'dictionaryHub.countryDescription',
    group: 'regional',
  },
  {
    id: 'currencies',
    moduleKey: 'currencies',
    href: '/currencies',
    labelKey: 'navigation.currencyDictionary',
    descriptionKey: 'dictionaryHub.currencyDescription',
    group: 'finance',
  },
  {
    id: 'language-dictionary',
    moduleKey: 'language-dictionary',
    href: '/language-dictionary',
    labelKey: 'navigation.languageDictionary',
    descriptionKey: 'dictionaryHub.languageDescription',
    group: 'content',
  },
]

const GROUP_ORDER: Array<DictionaryItem['group']> = ['regional', 'finance', 'content']
const FAVORITES_STORAGE_KEY = 'dictionary_hub_favorites'

function iconForDictionary(id: DictionaryItem['id']) {
  if (id === 'countries') return <Globe className="h-4 w-4" />
  if (id === 'currencies') return <Coins className="h-4 w-4" />
  return <Languages className="h-4 w-4" />
}

export default function DictionariesHubPage() {
  const t = useTranslations()
  const { data: session } = useSession()
  const role = (session as any)?.user?.role as 'USER' | 'ADVANCED' | 'ADMIN' | undefined

  const [search, setSearch] = useState('')
  const [permissions, setPermissions] = useState<RolePermissionsMap | null>(null)
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<DictionaryItem['id'][]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        setFavorites(parsed.filter((value): value is DictionaryItem['id'] => typeof value === 'string' && DICTIONARY_ITEMS.some((item) => item.id === value)))
      }
    } catch {
      // ignore storage parse errors
    }
  }, [])

  useEffect(() => {
    const loadPermissions = async () => {
      try {
        const res = await fetch('/api/permissions')
        if (!res.ok) {
          setLoading(false)
          return
        }

        const json = await res.json()
        const permMap: RolePermissionsMap = {
          dashboard: { userAccess: false, advancedAccess: false, adminAccess: true },
          contacts: { userAccess: false, advancedAccess: false, adminAccess: true },
          customers: { userAccess: false, advancedAccess: false, adminAccess: true },
          publishers: { userAccess: false, advancedAccess: false, adminAccess: true },
          authors: { userAccess: false, advancedAccess: false, adminAccess: true },
          invoices: { userAccess: false, advancedAccess: false, adminAccess: true },
          'simple-invoices': { userAccess: false, advancedAccess: false, adminAccess: true },
          cashflow: { userAccess: false, advancedAccess: false, adminAccess: true },
          finances: { userAccess: false, advancedAccess: false, adminAccess: true },
          users: { userAccess: false, advancedAccess: false, adminAccess: true },
          permissions: { userAccess: false, advancedAccess: false, adminAccess: true },
          languages: { userAccess: false, advancedAccess: false, adminAccess: true },
          'language-dictionary': { userAccess: false, advancedAccess: false, adminAccess: true },
          countries: { userAccess: false, advancedAccess: false, adminAccess: true },
          currencies: { userAccess: false, advancedAccess: false, adminAccess: true },
          administration: { userAccess: false, advancedAccess: false, adminAccess: true },
          documents: { userAccess: false, advancedAccess: false, adminAccess: true },
        }

        if (Array.isArray(json.data)) {
          json.data.forEach((permission: any) => {
            if (permission.module in permMap) {
              permMap[permission.module as ModuleKey] = {
                userAccess: permission.userAccess,
                advancedAccess: permission.advancedAccess,
                adminAccess: permission.adminAccess,
              }
            }
          })
        }

        setPermissions(permMap)
      } catch {
        // keep empty state
      } finally {
        setLoading(false)
      }
    }

    loadPermissions()
  }, [])

  const canAccess = (moduleKey: ModuleKey) => {
    if (!role || !permissions) return false
    return hasModuleAccess(moduleKey, role, permissions)
  }

  const availableItems = useMemo(() => DICTIONARY_ITEMS.filter((item) => canAccess(item.moduleKey)), [role, permissions])

  const filteredItems = useMemo(() => {
    const needle = search.trim().toLowerCase()
    if (!needle) return availableItems
    return availableItems.filter((item) => {
      const title = t(item.labelKey).toLowerCase()
      const description = t(item.descriptionKey).toLowerCase()
      return title.includes(needle) || description.includes(needle)
    })
  }, [availableItems, search, t])

  const favoriteItems = filteredItems.filter((item) => favorites.includes(item.id))

  const groupedItems = GROUP_ORDER.map((group) => ({
    group,
    items: filteredItems.filter((item) => item.group === group),
  })).filter((group) => group.items.length > 0)

  const toggleFavorite = (id: DictionaryItem['id']) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id]
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">{t('dictionaryHub.title')}</h1>
          <p className="text-sm text-muted-foreground">{t('dictionaryHub.subtitle')}</p>
        </div>

        <div className="mt-5 relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-9"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t('dictionaryHub.searchPlaceholder')}
          />
        </div>
      </Card>

      {loading ? (
        <Card className="p-6 text-sm text-muted-foreground">{t('common.loading')}</Card>
      ) : (
        <>
          {favoriteItems.length > 0 && (
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                <h2 className="text-lg font-semibold">{t('dictionaryHub.favorites')}</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {favoriteItems.map((item) => (
                  <div key={`fav-${item.id}`} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-medium">
                          {iconForDictionary(item.id)}
                          <span>{t(item.labelKey)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{t(item.descriptionKey)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(item.id)}
                        aria-label={t('dictionaryHub.unpin')}
                        className="text-amber-500"
                      >
                        <Star className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <Button asChild size="sm" className="w-full">
                        <Link href={item.href}>{t('dictionaryHub.open')}</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {groupedItems.length === 0 ? (
            <Card className="p-6 text-sm text-muted-foreground">
              {availableItems.length === 0 ? t('dictionaryHub.emptyForPermissions') : t('dictionaryHub.emptySearch')}
            </Card>
          ) : (
            groupedItems.map((group) => (
              <Card key={group.group} className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">{t(`dictionaryHub.groups.${group.group}`)}</h2>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => {
                    const isFavorite = favorites.includes(item.id)
                    return (
                      <div key={item.id} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 font-medium">
                              {iconForDictionary(item.id)}
                              <span>{t(item.labelKey)}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{t(item.descriptionKey)}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleFavorite(item.id)}
                            aria-label={isFavorite ? t('dictionaryHub.unpin') : t('dictionaryHub.pin')}
                            className={isFavorite ? 'text-amber-500' : 'text-muted-foreground'}
                          >
                            <Star className={isFavorite ? 'h-4 w-4 fill-current' : 'h-4 w-4'} />
                          </button>
                        </div>
                        <div className="mt-4">
                          <Button asChild size="sm" variant="outline" className="w-full">
                            <Link href={item.href}>{t('dictionaryHub.open')}</Link>
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            ))
          )}
        </>
      )}
    </div>
  )
}
