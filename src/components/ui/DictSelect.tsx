'use client'
import { useEffect, useState } from 'react'

type Option = { value: string; label: string }

export type DictSelectProps = {
  dictKey: string
  valueField: string
  labelField: string
  /** 'code-label' → "EN — English" | 'label-only' → "English" */
  format?: 'code-label' | 'label-only'
  value: string | number | null | undefined
  onChange: (val: string) => void
  nullable?: boolean
  placeholder?: string
  className?: string
}

const cache: Record<string, Option[]> = {}

async function fetchOptions(dictKey: string, valueField: string, labelField: string): Promise<Option[]> {
  const key = `${dictKey}:${valueField}:${labelField}`
  if (cache[key]) return cache[key]
  const res = await fetch(`/api/dictionaries/${dictKey}?pageSize=500`)
  if (!res.ok) return []
  const data = await res.json()
  const opts: Option[] = (data.rows ?? [])
    .map((row: any) => ({
      value: String(row[valueField] ?? '').trim(),
      label: String(row[labelField] ?? '').trim(),
    }))
    .filter((o: Option) => o.value)
  cache[key] = opts
  return opts
}

const SELECT_CLS = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'

export function DictSelect({
  dictKey, valueField, labelField,
  format = 'code-label',
  value, onChange,
  nullable = true,
  placeholder = '— wybierz —',
  className,
}: DictSelectProps) {
  const [options, setOptions] = useState<Option[]>([])

  useEffect(() => {
    fetchOptions(dictKey, valueField, labelField).then(setOptions)
  }, [dictKey, valueField, labelField])

  return (
    <select
      className={className ?? SELECT_CLS}
      value={value != null ? String(value).trim() : ''}
      onChange={e => onChange(e.target.value)}
    >
      {nullable && <option value="">{placeholder}</option>}
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {format === 'code-label' ? `${o.value} — ${o.label}` : o.label}
        </option>
      ))}
    </select>
  )
}
