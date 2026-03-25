'use client'
import { useEffect, useRef, useState } from 'react'

type Option = { value: string | number; label: string; cls?: string }

type Props = {
  options: Option[]
  value: Set<string | number>
  onChange: (next: Set<string | number>) => void
  placeholder?: string
  searchable?: boolean
}

export function MultiSelect({ options, value, onChange, placeholder = 'Wszystkie', searchable = false }: Props) {
  const [open, setOpen]       = useState(false)
  const [query, setQuery]     = useState('')
  const ref                   = useRef<HTMLDivElement>(null)
  const searchRef             = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus()
  }, [open, searchable])

  const toggle = (v: string | number) => {
    const next = new Set(value)
    next.has(v) ? next.delete(v) : next.add(v)
    onChange(next)
  }

  const filtered = searchable && query
    ? options.filter(o => o.label.toLowerCase().includes(query.toLowerCase()))
    : options

  const selected = options.filter(o => value.has(o.value))
  const label = selected.length === 0
    ? placeholder
    : selected.length === 1
    ? selected[0].label
    : `${selected.length} zaznaczone`

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <span className={value.size === 0 ? 'text-muted-foreground' : ''}>{label}</span>
        <svg className="h-4 w-4 opacity-50 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full min-w-[200px] rounded-md border border-border bg-popover shadow-md">
          {searchable && (
            <div className="border-b border-border px-2 py-1.5">
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Szukaj…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          )}
          {value.size > 0 && (
            <button
              type="button"
              onClick={() => onChange(new Set())}
              className="w-full px-3 py-1.5 text-left text-xs text-muted-foreground hover:text-foreground border-b border-border"
            >
              Wyczyść zaznaczenie
            </button>
          )}
          <ul className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-xs text-muted-foreground">Brak wyników</li>
            ) : filtered.map(o => (
              <li key={o.value}>
                <label className="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-muted/50 text-sm">
                  <input
                    type="checkbox"
                    checked={value.has(o.value)}
                    onChange={() => toggle(o.value)}
                    className="rounded border-input shrink-0"
                  />
                  {o.cls
                    ? <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${o.cls}`}>{o.label}</span>
                    : <span>{o.label}</span>}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
