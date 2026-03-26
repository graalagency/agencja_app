import { prisma } from '../../../lib/prisma'
import { Card, CardContent } from '../../../components/ui/card'
import { getTranslations } from 'next-intl/server'
import { EVENT_LABELS } from '../../../components/AgreementEventBadge'
import { getSubmissionEventColor } from '../../../components/SubmissionEventBadge'
import { DashboardGrid } from '../../../components/dashboard/DashboardGrid'

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

      <DashboardGrid
        data={{
          agreementStatuses,
          agreementsTotal,
          submissionStatuses,
          submissionsTotal,
          topAuthors,
          topPublishers,
        }}
        translations={{
          agreementsTitle: t('dashboard.agreementsWidgetTitle'),
          agreementsSubtitle: t('dashboard.totalWithLastStatus', { count: agreementsTotal.toLocaleString('pl-PL') }),
          submissionsTitle: t('dashboard.submissionsWidgetTitle'),
          submissionsSubtitle: t('dashboard.totalWithLastStatus', { count: submissionsTotal.toLocaleString('pl-PL') }),
          topAuthorsTitle: t('dashboard.topAuthorsWidgetTitle'),
          topAuthorsSubtitle: t('dashboard.topByAgreements'),
          topPublishersTitle: t('dashboard.topPublishersWidgetTitle'),
          topPublishersSubtitle: t('dashboard.topByAgreements'),
          noRankingData: t('dashboard.noRankingData'),
        }}
      />
    </div>
  )
}
