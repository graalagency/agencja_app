'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type TopPublisher = {
  id: number
  abbreviation: string | null
  name: string
  agreementsCount: number
}

type Props = {
  publishers: TopPublisher[]
  title: string
  subtitle: string
  noDataLabel: string
  size: 'small' | 'large'
}

function toPercent(value: number, total: number): number {
  if (!total) return 0
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)))
}

const SMALL_ROW_CLASS = 'h-8'
const LARGE_ROW_CLASS = 'h-11'

export function TopPublishersWidget({ publishers, title, subtitle, noDataLabel, size }: Props) {
  const max = Math.max(...publishers.map(p => p.agreementsCount), 0)

  if (size === 'small') {
    return (
      <Card className="border-0 shadow-md bg-gradient-to-br from-violet-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 h-full flex flex-col">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          {publishers.length === 0 ? (
            <div className="px-4 py-1.5 text-xs text-muted-foreground">{noDataLabel}</div>
          ) : (
            <table className="w-full h-full table-fixed">
              <tbody className="divide-y divide-border/50 text-xs">
                {publishers.map((publisher, idx) => (
                  <tr key={publisher.id} className={`${SMALL_ROW_CLASS} hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors`} title={publisher.name}>
                    <td className="px-4 align-middle">
                      <Link
                        href={`/publishers/${publisher.id}`}
                        className="block w-full truncate font-medium text-violet-600 dark:text-violet-400 hover:underline"
                      >
                        {idx + 1}. {publisher.abbreviation || publisher.name}
                      </Link>
                    </td>
                    <td className="text-right px-4 align-middle w-24">
                      <Link
                        href={`/publishers/${publisher.id}`}
                        className="font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                      >
                        {publisher.agreementsCount}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-md bg-gradient-to-br from-violet-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 h-full flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-hidden">
        {publishers.length === 0 ? (
          <div className="px-6 py-2.5 text-sm text-muted-foreground">{noDataLabel}</div>
        ) : (
          <table className="w-full h-full table-fixed">
            <tbody className="divide-y divide-border/30 text-sm">
              {publishers.map((publisher, idx) => {
                const percent = toPercent(publisher.agreementsCount, max)
                return (
                  <tr key={publisher.id} className={`${LARGE_ROW_CLASS} hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors`} title={publisher.name}>
                    <td className="px-6 align-middle font-medium">
                      <Link
                        href={`/publishers/${publisher.id}`}
                        className="flex items-center gap-2 min-w-0 hover:underline"
                      >
                        <span className="text-xs font-mono text-muted-foreground shrink-0 min-w-6">#{idx + 1}</span>
                        <span className="block min-w-0 truncate">{publisher.abbreviation ? `${publisher.abbreviation} - ${publisher.name}` : publisher.name}</span>
                      </Link>
                    </td>
                    <td className="text-right px-6 align-middle text-xs text-muted-foreground w-36">
                      <div className="flex items-center justify-end gap-3">
                        <span className="font-semibold tabular-nums text-sm">{publisher.agreementsCount.toLocaleString('pl-PL')}</span>
                        <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden flex-shrink-0">
                          <div className="h-1.5 rounded-full bg-violet-500" style={{ width: `${percent}%` }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  )
}
