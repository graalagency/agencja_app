'use client'

type Props = {
  checked: boolean
  onChange: (v: boolean) => void
}

export function RememberCheckbox({ checked, onChange }: Props) {
  return (
    <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer select-none whitespace-nowrap">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="rounded border-input"
      />
      Zapamiętaj kryteria
    </label>
  )
}
