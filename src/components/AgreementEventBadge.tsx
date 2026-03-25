export const EVENT_LABELS: Record<number, { label: string; cls: string }> = {
  300: { label: 'New agreement',  cls: 'bg-blue-100   text-blue-700   dark:bg-blue-900/30   dark:text-blue-300'   },
  301: { label: 'Modify',         cls: 'bg-blue-100   text-blue-700   dark:bg-blue-900/30   dark:text-blue-300'   },
  305: { label: '1st sign. out',  cls: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  315: { label: '2nd sign. out',  cls: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  320: { label: '2nd sign. in',   cls: 'bg-cyan-100   text-cyan-700   dark:bg-cyan-900/30   dark:text-cyan-300'   },
  325: { label: 'Final out',      cls: 'bg-green-100  text-green-800  dark:bg-green-900/30  dark:text-green-300'  },
  330: { label: 'Expired',        cls: 'bg-gray-100   text-gray-600   dark:bg-gray-800      dark:text-gray-400'   },
  335: { label: 'Terminated',     cls: 'bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-300'    },
  340: { label: 'Cancel out',     cls: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
  345: { label: 'Cancel in',      cls: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
}

export function AgreementEventBadge({ code }: { code: number | null | undefined }) {
  if (!code) return <span className="text-muted-foreground text-xs">—</span>
  const e = EVENT_LABELS[code]
  if (!e) return <span className="text-xs font-mono">{code}</span>
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${e.cls}`}>
      {e.label}
    </span>
  )
}
