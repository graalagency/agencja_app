'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type TopAuthor = {
  id: number
  fullName: string
  agreementsCount: number
}

type Props = {
  authors: TopAuthor[]
  title: string
  subtitle: string
  noDataLabel: string
  size: 'small' | 'large'
}

function toPercent(value: number, total: number): number {
  if (!total) return 0
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)))
}

export function TopAuthorsWidget({ authors, title, subtitle, noDataLabel, size }: Props) {
  const max = Math.max(...authors.map(a => a.agreementsCount), 0)

  if (size === 'small') {
    return (
      <Card className="border-0 shadow-md bg-gradient-to-br from-amber-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 h-full flex flex-col">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          {authors.length === 0 ? (
            <div className="px-4 py-1.5 text-xs text-muted-foreground">{noDataLabel}</div>
          ) : (
            <table className="w-full h-full">
              <tbody className="divide-y divide-border/50 text-xs">
                {authors.map((author, idx) => (
                  <tr key={author.id} className="hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                    <td className="px-4 py-1.5">
                      <Link
                        href={`/authors/${author.id}`}
                        className="font-medium truncate text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        {idx + 1}. {author.fullName}
                      </Link>
                    </td>
                    <td className="text-right px-4 py-1.5">
                      <Link
                        href={`/authors/${author.id}`}
                        className="font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        {author.agreementsCount}
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
    <Card className="border-0 shadow-md bg-gradient-to-br from-amber-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 h-full flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-hidden">
        {authors.length === 0 ? (
          <div className="px-6 py-2.5 text-sm text-muted-foreground">{noDataLabel}</div>
        ) : (
          <table className="w-full h-full">
            <tbody className="divide-y divide-border/30 text-sm">
              {authors.map((author, idx) => {
                const percent = toPercent(author.agreementsCount, max)
                return (
                  <tr key={author.id} className="hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                    <td className="px-6 py-2.5 font-medium">
                      <Link
                        href={`/authors/${author.id}`}
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="text-xs font-mono text-muted-foreground min-w-6">#{idx + 1}</span>
                        <span className="truncate">{author.fullName}</span>
                      </Link>
                    </td>
                    <td className="text-right px-6 py-2.5 text-xs text-muted-foreground w-32">
                      <div className="flex items-center justify-end gap-3">
                        <span className="font-semibold tabular-nums text-sm">{author.agreementsCount.toLocaleString('pl-PL')}</span>
                        <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden flex-shrink-0">
                          <div className="h-1.5 rounded-full bg-amber-500" style={{ width: `${percent}%` }} />
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
