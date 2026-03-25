import { prisma } from '../../../lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { getTranslations } from 'next-intl/server'
import { EVENT_LABELS } from '../../../components/AgreementEventBadge'
import { getSubmissionEventColor } from '../../../components/SubmissionEventBadge'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type StatusCount = {
  code: number
  count: bigint
  label?: string | null
}

type TopAuthorRow = {
  id: number
  fullName: string
  agreementsCount: bigint
}

type TopPublisherRow = {
  id: number
  abbreviation: string | null
  name: string
  agreementsCount: bigint
}

function toNumber(value: bigint | number | null | undefined): number {
  if (typeof value === 'bigint') return Number(value)
  return Number(value ?? 0)
}

function getBaseBgClass(classes: string): string {
  const tokens = classes.split(/\s+/).filter(Boolean)
  return tokens.find((token) => token.startsWith('bg-') && !token.startsWith('dark:')) ?? 'bg-slate-300'
}

function toPercent(value: number, total: number): number {
  if (!total) return 0
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)))
}

export default async function DashboardPage() {
  const t = await getTranslations()

  let agreementStatusRows: Array<StatusCount> = []
  let submissionStatusRows: Array<StatusCount> = []
  let topAuthorsRows: Array<TopAuthorRow> = []
  let topPublishersRows: Array<TopPublisherRow> = []
  let dbUnavailable = false

  try {
    ;[
      agreementStatusRows,
      submissionStatusRows,
      topAuthorsRows,
      topPublishersRows,
    ] = await Promise.all([
      prisma.$queryRaw<Array<StatusCount>>`
      SELECT last."eventCode" AS code, COUNT(*)::bigint AS count
      FROM (
        SELECT DISTINCT ON (e."agreementId") e."agreementId", e."eventCode"
        FROM "AgreementEvent" e
        ORDER BY e."agreementId", e."eventDate" DESC NULLS LAST, e."eventCode" DESC
      ) last
      GROUP BY last."eventCode"
      ORDER BY count DESC
    `,
    prisma.$queryRaw<Array<StatusCount>>`
      SELECT last."eventCode" AS code, COUNT(*)::bigint AS count, TRIM(de."EventDesc") AS label
      FROM (
        SELECT DISTINCT ON (e."submissionId") e."submissionId", e."eventCode"
        FROM "SubmissionEvent" e
        ORDER BY e."submissionId", e."eventDate" DESC NULLS LAST, e."eventCode" DESC
      ) last
      LEFT JOIN "dictEvents" de ON de."EventCode" = last."eventCode"
      GROUP BY last."eventCode", de."EventDesc"
      ORDER BY count DESC
    `,
    prisma.$queryRaw<Array<TopAuthorRow>>`
      SELECT
        a.id,
        TRIM(CONCAT_WS(' ', a."firstName", a."middleName", a."lastName")) AS "fullName",
        COUNT(DISTINCT ag.id)::bigint AS "agreementsCount"
      FROM "Author" a
      JOIN "TitleAuthor" ta ON ta."authorId" = a.id
      JOIN "Agreement" ag ON ag."titleId" = ta."titleId"
      GROUP BY a.id, a."firstName", a."middleName", a."lastName"
      ORDER BY "agreementsCount" DESC, "fullName" ASC
      LIMIT 10
    `,
    prisma.$queryRaw<Array<TopPublisherRow>>`
      SELECT
        p.id,
        p.abbreviation,
        p.name,
        COUNT(ag.id)::bigint AS "agreementsCount"
      FROM "Publisher" p
      JOIN "Agreement" ag ON ag."publisherId" = p.id
      GROUP BY p.id, p.abbreviation, p.name
      ORDER BY "agreementsCount" DESC, p.name ASC
      LIMIT 10
    `,
    ])
  } catch (error) {
    dbUnavailable = true
    console.error('Dashboard data unavailable:', error)
  }

  const agreementStatusesAll = agreementStatusRows
    .map((row) => {
      const code = Number(row.code)
      const event = EVENT_LABELS[code]
      return {
        code,
        count: toNumber(row.count),
        label: event?.label ?? `Code ${code}`,
        badgeClass: event?.cls ?? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
      }
    })

  const submissionStatusesAll = submissionStatusRows
    .map((row) => {
      const code = Number(row.code)
      return {
        code,
        count: toNumber(row.count),
        label: row.label?.trim() || `Code ${code}`,
        badgeClass: getSubmissionEventColor(code),
      }
    })

  const agreementStatuses = agreementStatusesAll.slice(0, 8)
  const submissionStatuses = submissionStatusesAll.slice(0, 8)

  const agreementsTotal = agreementStatusesAll.reduce((acc, item) => acc + item.count, 0)
  const submissionsTotal = submissionStatusesAll.reduce((acc, item) => acc + item.count, 0)

  const topAuthors = topAuthorsRows.map((row) => ({
    id: Number(row.id),
    fullName: row.fullName,
    agreementsCount: toNumber(row.agreementsCount),
  }))

  const topPublishers = topPublishersRows.map((row) => ({
    id: Number(row.id),
    abbreviation: row.abbreviation,
    name: row.name,
    agreementsCount: toNumber(row.agreementsCount),
  }))

  const topAuthorsMax = Math.max(...topAuthors.map((row) => row.agreementsCount), 0)
  const topPublishersMax = Math.max(...topPublishers.map((row) => row.agreementsCount), 0)

  return (
    <div className="space-y-6">
      {dbUnavailable && (
        <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="pt-6">
            <p className="text-sm text-amber-800 dark:text-amber-200">{t('auth.databaseUnavailable')}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-0 shadow-md bg-gradient-to-br from-sky-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{t('dashboard.agreementsWidgetTitle')}</CardTitle>
            <p className="text-sm text-muted-foreground">{t('dashboard.totalWithLastStatus', { count: agreementsTotal.toLocaleString('pl-PL') })}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {agreementStatuses.map((item) => {
              const bgClass = getBaseBgClass(item.badgeClass)
              const percent = toPercent(item.count, agreementsTotal)
              return (
                <div key={item.code} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={`/finances/agreements?lastEventCode=${item.code}`}
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${item.badgeClass} hover:opacity-85 transition-opacity`}
                    >
                      {item.label}
                    </Link>
                    <Link
                      href={`/finances/agreements?lastEventCode=${item.code}`}
                      className="text-sm font-semibold tabular-nums hover:underline"
                    >
                      {item.count.toLocaleString('pl-PL')}
                    </Link>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className={`h-2 rounded-full ${bgClass}`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{t('dashboard.submissionsWidgetTitle')}</CardTitle>
            <p className="text-sm text-muted-foreground">{t('dashboard.totalWithLastStatus', { count: submissionsTotal.toLocaleString('pl-PL') })}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {submissionStatuses.map((item) => {
              const bgClass = getBaseBgClass(item.badgeClass)
              const percent = toPercent(item.count, submissionsTotal)
              return (
                <div key={item.code} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={`/finances/submissions?lastEventCode=${item.code}`}
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${item.badgeClass} hover:opacity-85 transition-opacity`}
                    >
                      {item.label}
                    </Link>
                    <Link
                      href={`/finances/submissions?lastEventCode=${item.code}`}
                      className="text-sm font-semibold tabular-nums hover:underline"
                    >
                      {item.count.toLocaleString('pl-PL')}
                    </Link>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className={`h-2 rounded-full ${bgClass}`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="border-0 shadow-md bg-gradient-to-br from-amber-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{t('dashboard.topAuthorsWidgetTitle')}</CardTitle>
            <p className="text-sm text-muted-foreground">{t('dashboard.topByAgreements')}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {topAuthors.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t('dashboard.noRankingData')}</p>
            ) : topAuthors.map((author, idx) => {
              const percent = toPercent(author.agreementsCount, topAuthorsMax)
              return (
                <Link
                  key={author.id}
                  href={`/authors/${author.id}`}
                  className="group block rounded-lg border border-border/60 bg-background/70 p-3 hover:bg-background transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-muted-foreground">#{idx + 1}</span>
                    <span className="flex-1 truncate text-sm font-medium group-hover:underline">{author.fullName}</span>
                    <span className="text-sm font-semibold tabular-nums">{author.agreementsCount.toLocaleString('pl-PL')}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-1.5 rounded-full bg-amber-500" style={{ width: `${percent}%` }} />
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-violet-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{t('dashboard.topPublishersWidgetTitle')}</CardTitle>
            <p className="text-sm text-muted-foreground">{t('dashboard.topByAgreements')}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {topPublishers.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t('dashboard.noRankingData')}</p>
            ) : topPublishers.map((publisher, idx) => {
              const percent = toPercent(publisher.agreementsCount, topPublishersMax)
              return (
                <Link
                  key={publisher.id}
                  href={`/publishers/${publisher.id}`}
                  className="group block rounded-lg border border-border/60 bg-background/70 p-3 hover:bg-background transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-muted-foreground">#{idx + 1}</span>
                    <span className="flex-1 truncate text-sm font-medium group-hover:underline" title={publisher.name}>
                      {publisher.abbreviation ? `${publisher.abbreviation} - ${publisher.name}` : publisher.name}
                    </span>
                    <span className="text-sm font-semibold tabular-nums">{publisher.agreementsCount.toLocaleString('pl-PL')}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-1.5 rounded-full bg-violet-500" style={{ width: `${percent}%` }} />
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
