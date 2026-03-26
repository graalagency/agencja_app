'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type SubmissionStatus = {
  code: number
  count: number
  label: string
  badgeClass: string
}

type Props = {
  statuses: SubmissionStatus[]
  total: number
  title: string
  subtitle: string
  size: 'small' | 'large'
}

function getBaseBgClass(classes: string): string {
  const tokens = classes.split(/\s+/).filter(Boolean)
  return tokens.find((token) => token.startsWith('bg-') && !token.startsWith('dark:')) ?? 'bg-slate-300'
}

function toPercent(value: number, total: number): number {
  if (!total) return 0
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)))
}

export function SubmissionsStatusWidget({ statuses, total, title, subtitle, size }: Props) {
  if (size === 'small') {
    return (
      <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 h-full flex flex-col">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          <table className="w-full h-full">
            <tbody className="divide-y divide-border/50 text-xs">
              {statuses.map((item) => {
                const colorClass = item.badgeClass.replace(/bg-\S+\s*|dark:bg-\S+\s*/g, '').trim()
                return (
                  <tr key={item.code} className="hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors">
                    <td className="px-4 py-1.5">
                      <Link
                        href={`/finances/submissions?lastEventCode=${item.code}`}
                        className={`font-medium truncate ${colorClass} hover:underline`}
                      >
                        {item.label}
                      </Link>
                    </td>
                    <td className="text-right px-4 py-1.5">
                      <Link
                        href={`/finances/submissions?lastEventCode=${item.code}`}
                        className={`font-semibold ${colorClass} hover:underline`}
                      >
                        {item.count.toLocaleString('pl-PL')}
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 h-full flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-hidden">
        <table className="w-full h-full">
          <tbody className="divide-y divide-border/30 text-sm">
            {statuses.map((item) => {
              const percent = toPercent(item.count, total)
              return (
                <tr key={item.code} className="hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors">
                  <td className="px-6 py-2.5 font-medium">
                    <Link
                      href={`/finances/submissions?lastEventCode=${item.code}`}
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${item.badgeClass} hover:opacity-85 transition-opacity`}
                    >
                      {item.label}
                    </Link>
                  </td>
                  <td className="text-right px-6 py-2.5 font-semibold tabular-nums">
                    <Link
                      href={`/finances/submissions?lastEventCode=${item.code}`}
                      className="hover:underline"
                    >
                      {item.count.toLocaleString('pl-PL')}
                    </Link>
                  </td>
                  <td className="text-right px-6 py-2.5 text-xs text-muted-foreground w-16">
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-medium">{percent}%</span>
                      <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className={`h-1.5 rounded-full bg-emerald-500`} style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
