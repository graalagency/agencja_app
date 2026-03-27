'use client'

import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { AgreementsStatusWidget } from './AgreementsStatusWidget'
import { SubmissionsStatusWidget } from './SubmissionsStatusWidget'
import { TopAuthorsWidget } from './TopAuthorsWidget'
import { TopPublishersWidget } from './TopPublishersWidget'
import { Card } from '@/components/ui/card'

type DashboardConfig = {
  gridCols: number
  gridRows: number
  widgets: Array<{
    id: string
    enabled: boolean
    col: number
    row: number
    width: number
    height: number
  }>
}

type Props = {
  data: {
    agreementStatuses: Array<{ code: number; count: number; label: string; badgeClass: string }>
    agreementsTotal: number
    submissionStatuses: Array<{ code: number; count: number; label: string; badgeClass: string }>
    submissionsTotal: number
    topAuthors: Array<{ id: number; fullName: string; agreementsCount: number }>
    topPublishers: Array<{ id: number; abbreviation: string | null; name: string; agreementsCount: number }>
  }
  translations: {
    agreementsTitle: string
    agreementsSubtitle: string
    submissionsTitle: string
    submissionsSubtitle: string
    topAuthorsTitle: string
    topAuthorsSubtitle: string
    topPublishersTitle: string
    topPublishersSubtitle: string
    noRankingData: string
  }
}

const WIDGET_COMPONENTS: Record<string, any> = {
  'agreements-status': AgreementsStatusWidget,
  'submissions-status': SubmissionsStatusWidget,
  'top-authors': TopAuthorsWidget,
  'top-publishers': TopPublishersWidget,
}

const GRID_UNIT_PX = 34

export function DashboardGrid({ data, translations }: Props) {
  const [config, setConfig] = useState<DashboardConfig | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    try {
      const res = await fetch('/api/profile/dashboard-config')
      if (res.ok) {
        const cfg = await res.json()
        setConfig(cfg)
      }
    } catch (err) {
      console.error('Failed to fetch dashboard config:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !config) {
    return (
      <div className="space-y-6">
        {[1, 2, 3, 4].map(i => (
          <Card key={i} className="h-64 bg-muted animate-pulse" />
        ))}
      </div>
    )
  }

  // Calculate grid layout
  const enabledWidgets = config.widgets.filter(w => w.enabled)
  const gridWidthPx = config.gridCols * GRID_UNIT_PX

  // Map widget data
  const widgetDataMap: Record<string, any> = {}
  enabledWidgets.forEach(widget => {
    const size = widget.width >= 10 ? 'large' : 'small'

    if (widget.id === 'agreements-status') {
      widgetDataMap[widget.id] = {
        statuses: size === 'large' ? data.agreementStatuses : data.agreementStatuses.slice(0, 5),
        total: data.agreementsTotal,
        title: translations.agreementsTitle,
        subtitle: translations.agreementsSubtitle,
        size,
      }
    } else if (widget.id === 'submissions-status') {
      widgetDataMap[widget.id] = {
        statuses: size === 'large' ? data.submissionStatuses : data.submissionStatuses.slice(0, 5),
        total: data.submissionsTotal,
        title: translations.submissionsTitle,
        subtitle: translations.submissionsSubtitle,
        size,
      }
    } else if (widget.id === 'top-authors') {
      widgetDataMap[widget.id] = {
        authors: size === 'large' ? data.topAuthors : data.topAuthors.slice(0, 5),
        title: translations.topAuthorsTitle,
        subtitle: translations.topAuthorsSubtitle,
        noDataLabel: translations.noRankingData,
        size,
      }
    } else if (widget.id === 'top-publishers') {
      widgetDataMap[widget.id] = {
        publishers: size === 'large' ? data.topPublishers : data.topPublishers.slice(0, 5),
        title: translations.topPublishersTitle,
        subtitle: translations.topPublishersSubtitle,
        noDataLabel: translations.noRankingData,
        size,
      }
    }
  })

  return (
    <div className="overflow-x-auto pb-2">
      <div
        className="gap-4"
        style={{
          width: `${gridWidthPx}px`,
          display: 'grid',
          gridTemplateColumns: `repeat(${config.gridCols}, ${GRID_UNIT_PX}px)`,
          gridAutoRows: `${GRID_UNIT_PX}px`,
        }}
      >
        {enabledWidgets.map(widget => {
          const Component = WIDGET_COMPONENTS[widget.id]
          const widgetData = widgetDataMap[widget.id]

          if (!Component || !widgetData) return null

          return (
            <div
              key={widget.id}
              style={{
                gridColumn: `${widget.col + 1} / span ${widget.width}`,
                gridRow: `${widget.row + 1} / span ${widget.height}`,
              }}
            >
              <Suspense
                fallback={<Card className="h-full bg-muted animate-pulse" />}
              >
                <Component {...widgetData} />
              </Suspense>
            </div>
          )
        })}
      </div>
    </div>
  )
}
