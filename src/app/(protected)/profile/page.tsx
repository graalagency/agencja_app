'use client'

import { useEffect, useState, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, Upload, Trash2, X } from 'lucide-react'
import { DashboardWidgetEditor } from '@/components/DashboardWidgetEditor'

type ProfileData = {
  id: number
  name: string | null
  email: string
  role: 'USER' | 'ADVANCED' | 'ADMIN'
  permissions: Record<string, any>
  locale: string
  image: string | null
}

const TABS = ['info', 'permissions', 'password', 'widgets'] as const
type Tab = (typeof TABS)[number]

const AVATAR_SIZE = 128

export default function ProfilePage() {
  const router = useRouter()
  const { data: session, update: updateSession } = useSession()
  const t = useTranslations()

  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('info')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Info tab state
  const [name, setName] = useState('')
  const [locale, setLocale] = useState<'pl' | 'en'>('pl')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Password tab state
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    if (!session?.user) {
      router.push('/login')
      return
    }
    fetchProfile()
  }, [session, router])

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/profile')
      if (!res.ok) throw new Error('Failed to fetch profile')
      const data = await res.json()
      setProfile(data)
      setName(data.name || '')
      setLocale(data.locale)
    } catch (err) {
      setMessage({ type: 'error', text: t('profile.loadError') })
    } finally {
      setLoading(false)
    }
  }

  const handlePhotoSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setSaving(true)
      const reader = new FileReader()
      reader.onload = async e => {
        const dataUrl = e.target?.result as string
        const img = new Image()
        img.onload = async () => {
          const canvas = canvasRef.current
          if (!canvas) throw new Error('Canvas not available')
          const ctx = canvas.getContext('2d')
          if (!ctx) throw new Error('Canvas context error')

          // Ustaw canvas na wymiary avatara (kwadrat)
          canvas.width = AVATAR_SIZE
          canvas.height = AVATAR_SIZE

          // Oblicz wymiary do przyciecia (zachowaj proporcje)
          const size = Math.min(img.width, img.height)
          const x = (img.width - size) / 2
          const y = (img.height - size) / 2

          // Narysuj przyciete i przeskalowane zdjęcie
          ctx.drawImage(img, x, y, size, size, 0, 0, AVATAR_SIZE, AVATAR_SIZE)

          // Konwertuj canvas na blob i wyślij od razu
          canvas.toBlob(
            async blob => {
              if (!blob) throw new Error('Canvas conversion failed')

              const formData = new FormData()
              formData.append('photo', blob, 'avatar.png')

              const res = await fetch('/api/profile/photo', {
                method: 'POST',
                body: formData,
              })

              if (!res.ok) {
                const error = await res.json()
                throw new Error(error.error || 'Upload failed')
              }

              const uploadResult = await res.json()

              // Odśwież profil z nowym zdjęciem
              await fetchProfile()
              await updateSession({ image: uploadResult?.url ?? null })

              setMessage({ type: 'success', text: t('profile.photoUploaded') })

              // Delikatny fallback na starsze stany sesji
              setTimeout(() => {
                window.location.reload()
              }, 400)
            },
            'image/png',
            0.95
          )
        }
        img.onerror = () => {
          throw new Error('Failed to load image')
        }
        img.src = dataUrl
      }
      reader.readAsDataURL(file)
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || t('profile.photoUploadError') })
    } finally {
      setSaving(false)
    }
  }

  const deletePhoto = async () => {
    if (!profile?.image) return
    if (!confirm(t('profile.confirmDeletePhoto'))) return
    setSaving(true)
    try {
      const res = await fetch(`/api/profile/photo?url=${encodeURIComponent(profile.image)}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Delete failed')
      setProfile(p => p ? { ...p, image: null } : null)
      await updateSession({ image: null })
      setMessage({ type: 'success', text: t('profile.photoDeleted') })
    } catch (err) {
      setMessage({ type: 'error', text: t('profile.photoDeleteError') })
    } finally {
      setSaving(false)
    }
  }

  const saveInfo = async () => {
    setSaving(true)
    const localeChanged = locale !== profile?.locale
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, locale }),
      })
      if (!res.ok) throw new Error('Save failed')
      const updated = await res.json()
      setProfile(updated)
      await updateSession({ locale: updated.locale })
      setMessage({ type: 'success', text: t('profile.saveSuccess') })

      // If language changed, update cookie and reload page to apply locale across UI
      if (localeChanged) {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
        setTimeout(() => {
          window.location.reload()
        }, 500)
      }
    } catch (err) {
      setMessage({ type: 'error', text: t('profile.saveError') })
    } finally {
      setSaving(false)
    }
  }

  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: t('profile.passwordMismatch') })
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/profile/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Change failed')
      }
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      setMessage({ type: 'success', text: t('profile.passwordChanged') })
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setSaving(false)
    }
  }

  if (loading || !profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            {t('common.back')}
          </Button>
          <h1 className="text-2xl font-bold">{t('profile.title')}</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 py-6 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Message */}
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

          {/* Tabs */}
          <div className="border-b border-border flex gap-1 overflow-x-auto">
            {TABS.map(t_tab => (
              <button
                key={t_tab}
                onClick={() => setTab(t_tab)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  tab === t_tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(`profile.tab${t_tab.charAt(0).toUpperCase() + t_tab.slice(1)}`)}
              </button>
            ))}
          </div>

          {/* Content */}
          {tab === 'info' && (
            <Card className="p-6 space-y-6">
              {/* Avatar section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm">{t('profile.avatar')}</h3>

                {/* Avatar with upload/delete icons */}
                <div className="flex justify-center">
                  <div className="relative inline-block group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="hidden"
                      disabled={saving}
                      id="avatar-input"
                    />
                    <label htmlFor="avatar-input" className="cursor-pointer block">
                      {profile.image ? (
                        <img
                          src={profile.image}
                          alt="Avatar"
                          className="w-32 h-32 rounded-full object-cover border-2 border-border transition-opacity group-hover:opacity-75"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border-2 border-border transition-opacity group-hover:opacity-75">
                          <span className="text-4xl font-semibold text-white">
                            {(profile.name || 'U').charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      {/* Upload icon overlay */}
                      <div className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <Upload className="h-5 w-5" />
                      </div>
                    </label>
                    {/* Delete icon */}
                    {profile.image && (
                      <button
                        onClick={deletePhoto}
                        disabled={saving}
                        className="absolute top-0 right-0 w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-destructive/90 disabled:opacity-50"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Hidden canvas for conversion */}
                <canvas
                  ref={canvasRef}
                  style={{ display: 'none' }}
                />

                {/* Info text */}
                <p className="text-xs text-muted-foreground text-center">
                  {t('profile.photoHint')}
                </p>
              </div>

              {/* Form fields */}
              <hr className="my-4" />
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('profile.name')}</label>
                  <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={t('profile.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('profile.email')}</label>
                  <Input value={profile.email} disabled className="bg-muted text-muted-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('profile.locale')}</label>
                  <select
                    value={locale}
                    onChange={e => setLocale(e.target.value as 'pl' | 'en')}
                    className="w-full px-3 py-2 border border-input rounded-lg text-sm bg-background hover:bg-muted/50 transition-colors"
                  >
                    <option value="pl">🇵🇱 Polski</option>
                    <option value="en">🇬🇧 English</option>
                  </select>
                </div>
              </div>

              <Button onClick={saveInfo} disabled={saving} className="w-full">
                {saving ? t('common.loading') : t('common.save')}
              </Button>
            </Card>
          )}

          {tab === 'permissions' && (
            <Card className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">{t('profile.role')}</label>
                <div className="inline-block px-4 py-2 rounded-full text-sm bg-primary/10 text-primary font-semibold">
                  {profile.role}
                </div>
              </div>
              {profile.permissions && Object.keys(profile.permissions).length > 0 ? (
                <div>
                  <label className="text-sm font-medium block mb-3">{t('profile.modules')}</label>
                  <div className="space-y-2">
                    {Object.entries(profile.permissions).map(([module, perms]: [string, any]) => (
                      <div
                        key={module}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg text-sm hover:bg-muted transition-colors"
                      >
                        <span className="font-medium capitalize">{module}</span>
                        <span className="text-xs text-muted-foreground">
                          {typeof perms === 'object' ? '✓' : '✓'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">{t('profile.noPermissions')}</p>
              )}
            </Card>
          )}

          {tab === 'password' && (
            <Card className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t('profile.currentPassword')}</label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={e => setCurrentPassword(e.target.value)}
                  disabled={saving}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('profile.newPassword')}</label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  disabled={saving}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('profile.confirmPassword')}</label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  disabled={saving}
                />
              </div>
              <Button onClick={changePassword} disabled={saving} className="w-full">
                {saving ? t('common.loading') : t('profile.changePassword')}
              </Button>
            </Card>
          )}

          {tab === 'widgets' && (
            <DashboardWidgetEditor
              onSave={async config => {
                const res = await fetch('/api/profile/dashboard-config', {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(config),
                })
                if (!res.ok) throw new Error('Save failed')
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
