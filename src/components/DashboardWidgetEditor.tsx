'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Widget = {
  id: string
  enabled: boolean
  col: number
  row: number
  width: number
  height: number
}

type DashboardConfig = {
  gridCols: number
  gridRows: number
  widgets: Widget[]
}

const AVAILABLE_WIDGETS = [
  { id: 'top-authors', label: 'profile.widget.topAuthors', icon: '👥' },
  { id: 'top-publishers', label: 'profile.widget.topPublishers', icon: '📚' },
  { id: 'agreements-status', label: 'profile.widget.agreementsStatus', icon: '📄' },
  { id: 'submissions-status', label: 'profile.widget.submissionsStatus', icon: '📦' },
]

const SIZE_OPTIONS = [
  { label: 'Small (5×5)', width: 5, height: 5 },
  { label: 'Large (10×10)', width: 10, height: 10 },
]

type Props = {
  onSave: (config: DashboardConfig) => Promise<void>
}

export function DashboardWidgetEditor({ onSave }: Props) {
  const t = useTranslations()
  const [config, setConfig] = useState<DashboardConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    try {
      const res = await fetch('/api/profile/dashboard-config')
      if (!res.ok) throw new Error('Failed to fetch config')
      const data = await res.json()
      setConfig(data)
    } catch (err) {
      setMessage({ type: 'error', text: 'Błąd przy wczytywaniu konfiguracji' })
    } finally {
      setLoading(false)
    }
  }

  const toggleWidget = (widgetId: string) => {
    if (!config) return
    setConfig({
      ...config,
      widgets: config.widgets.map(w =>
        w.id === widgetId ? { ...w, enabled: !w.enabled } : w
      ),
    })
  }

  const changeSize = (widgetId: string, width: number, height: number) => {
    if (!config) return
    setConfig({
      ...config,
      widgets: config.widgets.map(w =>
        w.id === widgetId ? { ...w, width, height } : w
      ),
    })
  }

  const resetToDefault = () => {
    setConfig({
      gridCols: 20,
      gridRows: 20,
      widgets: [
        { id: 'top-authors', enabled: true, col: 0, row: 0, width: 10, height: 10 },
        { id: 'top-publishers', enabled: true, col: 10, row: 0, width: 10, height: 10 },
        { id: 'agreements-status', enabled: true, col: 0, row: 10, width: 10, height: 5 },
        { id: 'submissions-status', enabled: true, col: 10, row: 10, width: 10, height: 5 },
      ],
    })
  }

  const handleSave = async () => {
    if (!config) return
    setSaving(true)
    try {
      await onSave(config)
      setMessage({ type: 'success', text: t('profile.saveSuccess') })
    } catch (err) {
      setMessage({ type: 'error', text: t('profile.saveError') })
    } finally {
      setSaving(false)
    }
  }

  if (loading || !config) {
    return <div className="text-center py-8">{t('common.loading')}</div>
  }

  return (
    <Card className="p-6 space-y-6">
      {message && (
        <div
          className={`p-4 rounded-lg text-sm font-medium transition-all ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">{t('profile.availableWidgets')}</h3>

        <div className="space-y-3">
          {config.widgets.map(widget => {
            const available = AVAILABLE_WIDGETS.find(w => w.id === widget.id)
            if (!available) return null

            return (
              <div key={widget.id} className="p-4 border border-border rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={widget.enabled}
                    onChange={() => toggleWidget(widget.id)}
                    id={`widget-${widget.id}`}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor={`widget-${widget.id}`} className="flex-1 cursor-pointer">
                    <span className="text-sm font-medium">
                      {available.icon} {t(available.label)}
                    </span>
                  </label>
                </div>

                {widget.enabled && (
                  <div className="ml-6 flex gap-2">
                    {SIZE_OPTIONS.map(size => (
                      <Button
                        key={`${size.width}-${size.height}`}
                        variant={
                          widget.width === size.width && widget.height === size.height
                            ? 'default'
                            : 'outline'
                        }
                        size="sm"
                        onClick={() => changeSize(widget.id, size.width, size.height)}
                      >
                        {size.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Grid preview */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">{t('profile.gridPreview')}</h3>
        <div
          className="bg-muted rounded-lg p-4 gap-1 border border-border"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${config.gridCols / 5}, 1fr)`,
            gridTemplateRows: `repeat(${config.gridRows / 5}, 1fr)`,
            aspectRatio: '1',
          }}
        >
          {config.widgets
            .filter(w => w.enabled)
            .map(widget => (
              <div
                key={widget.id}
                style={{
                  gridColumn: `${widget.col / 5 + 1} / span ${widget.width / 5}`,
                  gridRow: `${widget.row / 5 + 1} / span ${widget.height / 5}`,
                }}
                className="bg-primary/20 border border-primary/40 rounded p-2 flex items-center justify-center text-xs font-medium"
              >
                {AVAILABLE_WIDGETS.find(w => w.id === widget.id)?.icon}
              </div>
            ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {t('profile.gridSize')}: {config.gridCols}×{config.gridRows}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Button variant="outline" onClick={resetToDefault} disabled={saving}>
          {t('profile.resetToDefault')}
        </Button>
        <Button onClick={handleSave} disabled={saving} className="flex-1">
          {saving ? t('common.loading') : t('common.save')}
        </Button>
      </div>
    </Card>
  )
}
