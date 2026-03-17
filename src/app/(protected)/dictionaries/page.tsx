'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Database, Search, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DICTIONARIES, DICTIONARY_GROUPS } from '@/lib/dictionaries'

const FAVORITES_STORAGE_KEY = 'dictionary_hub_favorites'

function iconForDictionary() {
  return <Database className="h-4 w-4" />
}

export default function DictionariesHubPage() {
  const { data: session } = useSession()
  const role = (session as any)?.user?.role as 'USER' | 'ADVANCED' | 'ADMIN' | undefined
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])
  const [permissionsLoading, setPermissionsLoading] = useState(true)
  const [canViewDictionaries, setCanViewDictionaries] = useState(false)

  useEffect(() => {
    const loadAccess = async () => {
      if (role === 'ADMIN') {
        setCanViewDictionaries(true)
        setPermissionsLoading(false)
        return
      }

      try {
        const res = await fetch('/api/permissions')
        if (!res.ok) {
          setCanViewDictionaries(false)
          setPermissionsLoading(false)
          return
        }

        const json = await res.json()
        const list = Array.isArray(json?.data) ? json.data : []
        const dictionariesPerm = list.find((item: any) => item.module === 'dictionaries')

        if (dictionariesPerm) {
          setCanViewDictionaries(role === 'ADVANCED' ? Boolean(dictionariesPerm.advancedAccess) : Boolean(dictionariesPerm.userAccess))
          setPermissionsLoading(false)
          return
        }

        // Backward compatibility for old permission matrix entries
        const legacy = list.filter((item: any) => ['countries', 'currencies', 'language-dictionary'].includes(item.module))
        const legacyAccess = legacy.some((item: any) => role === 'ADVANCED' ? Boolean(item.advancedAccess) : Boolean(item.userAccess))
        setCanViewDictionaries(legacyAccess)
      } catch {
        setCanViewDictionaries(false)
      } finally {
        setPermissionsLoading(false)
      }
    }

    if (role) {
      loadAccess()
    }
  }, [role])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        setFavorites(parsed.filter((value): value is string => typeof value === 'string' && DICTIONARIES.some((item) => item.key === value)))
      }
    } catch {
      // ignore
    }
  }, [])

  const filteredItems = useMemo(() => {
    const needle = search.trim().toLowerCase()
    if (!needle) return DICTIONARIES
    return DICTIONARIES.filter((item) => {
      const title = item.label.toLowerCase()
      const description = item.description.toLowerCase()
      return title.includes(needle) || description.includes(needle)
    })
  }, [search])

  const favoriteItems = filteredItems.filter((item) => favorites.includes(item.key))

  const groupedItems = DICTIONARY_GROUPS.map((group) => ({
    key: group.key,
    label: group.label,
    items: filteredItems.filter((item) => item.group === group.key),
  })).filter((group) => group.items.length > 0)

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id]
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  return (
    <div className="space-y-6">
      {permissionsLoading ? (
        <Card className="p-6 text-sm text-muted-foreground">Ladowanie uprawnien...</Card>
      ) : !canViewDictionaries ? (
        <Card className="p-6 text-sm text-muted-foreground">Brak dostepu do modulu slownikow.</Card>
      ) : (
        <>
          <Card className="p-6">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold">Centrum slownikowe</h1>
              <p className="text-sm text-muted-foreground">Wszystkie slowniki sa pogrupowane i kazdy prowadzi do ekranu edycji.</p>
            </div>

            <div className="mt-5 relative max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-9"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Szukaj slownika po nazwie lub opisie"
              />
            </div>
          </Card>

          {favoriteItems.length > 0 && (
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                <h2 className="text-lg font-semibold">Ulubione</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {favoriteItems.map((item) => (
                  <div key={`fav-${item.key}`} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-medium">
                          {iconForDictionary()}
                          <span>{item.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(item.key)}
                        aria-label="Usun z ulubionych"
                        className="text-amber-500"
                      >
                        <Star className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/dictionaries/${item.key}`}>Otworz</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {groupedItems.length === 0 ? (
            <Card className="p-6 text-sm text-muted-foreground">
              Brak slownikow pasujacych do wyszukiwania.
            </Card>
          ) : (
            groupedItems.map((group) => (
              <Card key={group.key} className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">{group.label}</h2>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => {
                    const isFavorite = favorites.includes(item.key)
                    return (
                      <div key={item.key} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 font-medium">
                              {iconForDictionary()}
                              <span>{item.label}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleFavorite(item.key)}
                            aria-label={isFavorite ? 'Usun z ulubionych' : 'Przypnij do ulubionych'}
                            className={isFavorite ? 'text-amber-500' : 'text-muted-foreground'}
                          >
                            <Star className={isFavorite ? 'h-4 w-4 fill-current' : 'h-4 w-4'} />
                          </button>
                        </div>
                        <div className="mt-4">
                          <Button asChild size="sm" variant="outline" className="w-full">
                            <Link href={`/dictionaries/${item.key}`}>Otworz slownik</Link>
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
