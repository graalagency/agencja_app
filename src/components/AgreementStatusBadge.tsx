export const AGREEMENT_STATUS_LABELS: Record<string, { label: string; cls: string }> = {
  '1': { label: 'W toku',     cls: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  '2': { label: 'Aktywna',   cls: 'bg-green-100  text-green-800  dark:bg-green-900/30  dark:text-green-300'  },
  '3': { label: 'Wygasła',   cls: 'bg-gray-100   text-gray-600   dark:bg-gray-800      dark:text-gray-400'   },
  '4': { label: 'Zakończona',cls: 'bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-300'    },
  '5': { label: 'Zawieszona',cls: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
  '6': { label: 'Archiwum',  cls: 'bg-slate-100  text-slate-600  dark:bg-slate-800     dark:text-slate-400'  },
}

export function AgreementStatusBadge({ status }: { status: string | null | undefined }) {
  if (!status) return <span className="text-muted-foreground text-xs">—</span>
  const s = AGREEMENT_STATUS_LABELS[status]
  if (!s) return <span className="text-xs font-mono">{status}</span>
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`}>
      {s.label}
    </span>
  )
}
