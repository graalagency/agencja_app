'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ClientUpdateSchema } from '../../../../validation/client'
import { useTranslations } from 'next-intl'

type Publisher = {
  id: number
  name: string
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  postalCode?: string | null
  country?: string | null
  nip?: string | null
  regon?: string | null
  legalForm?: string | null
  bankAccount?: string | null
  notes?: string | null
  createdAt: string
  updatedAt: string
}

export default function PublisherDetailPage() {
  const t = useTranslations()
  const params = useParams()
  const id = Number(params.id)

  const [publisher, setPublisher] = useState<Publisher | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])

  const loadPublisher = async () => {
    const res = await fetch(`/api/publishers/${id}`)
    if (!res.ok) return
    const data = await res.json()
    setPublisher(data)
  }

  useEffect(() => {
    if (id) loadPublisher()
  }, [id])

  const updatePublisher = async () => {
    if (!publisher) return

    const parsed = ClientUpdateSchema.safeParse({
      name: publisher.name,
      email: publisher.email ?? '',
      phone: publisher.phone ?? '',
      address: publisher.address ?? '',
      city: publisher.city ?? '',
      postalCode: publisher.postalCode ?? '',
      country: publisher.country ?? '',
      nip: publisher.nip ?? '',
      regon: publisher.regon ?? '',
      legalForm: publisher.legalForm ?? '',
      bankAccount: publisher.bankAccount ?? '',
      notes: publisher.notes ?? '',
    })

    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map((e) => e.message))
      return
    }

    setFormErrors([])
    await fetch(`/api/publishers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })

    await loadPublisher()
    setEditMode(false)
  }

  if (!publisher) {
    return <p className="text-center text-muted-foreground py-8">{t('common.loading')}</p>
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('publishers.publisherDetails')}</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.history.back()}>
              {t('common.back')}
            </Button>
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>
                {t('common.edit')}
              </Button>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setEditMode(false)
                    loadPublisher()
                  }}
                >
                  {t('common.cancel')}
                </Button>
                <Button variant="primary" onClick={updatePublisher}>
                  {t('common.save')}
                </Button>
              </>
            )}
          </div>
        </div>

        {formErrors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
              {formErrors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('publishers.basicData')}</h3>
            <div>
              <label className="label text-xs">{t('publishers.name')}</label>
              {editMode ? (
                <Input value={publisher.name} onChange={(e) => setPublisher({ ...publisher, name: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{publisher.name}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.email')}</label>
              {editMode ? (
                <Input value={publisher.email ?? ''} onChange={(e) => setPublisher({ ...publisher, email: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.email || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.phone')}</label>
              {editMode ? (
                <Input value={publisher.phone ?? ''} onChange={(e) => setPublisher({ ...publisher, phone: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.phone || '-'}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('publishers.addressSection')}</h3>
            <div>
              <label className="label text-xs">{t('publishers.address')}</label>
              {editMode ? (
                <Input value={publisher.address ?? ''} onChange={(e) => setPublisher({ ...publisher, address: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.address || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.city')}</label>
              {editMode ? (
                <Input value={publisher.city ?? ''} onChange={(e) => setPublisher({ ...publisher, city: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.city || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.postalCode')}</label>
              {editMode ? (
                <Input value={publisher.postalCode ?? ''} onChange={(e) => setPublisher({ ...publisher, postalCode: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.postalCode || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.country')}</label>
              {editMode ? (
                <Input value={publisher.country ?? ''} onChange={(e) => setPublisher({ ...publisher, country: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.country || '-'}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('publishers.companyData')}</h3>
            <div>
              <label className="label text-xs">{t('publishers.nip')}</label>
              {editMode ? (
                <Input value={publisher.nip ?? ''} onChange={(e) => setPublisher({ ...publisher, nip: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.nip || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.regon')}</label>
              {editMode ? (
                <Input value={publisher.regon ?? ''} onChange={(e) => setPublisher({ ...publisher, regon: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.regon || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.legalForm')}</label>
              {editMode ? (
                <Input value={publisher.legalForm ?? ''} onChange={(e) => setPublisher({ ...publisher, legalForm: e.target.value })} />
              ) : (
                <p className="text-base">{publisher.legalForm || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">{t('publishers.bankAccount')}</label>
              {editMode ? (
                <Input value={publisher.bankAccount ?? ''} onChange={(e) => setPublisher({ ...publisher, bankAccount: e.target.value })} />
              ) : (
                <p className="text-sm font-mono">{publisher.bankAccount || '-'}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <label className="label text-xs">{t('publishers.notes')}</label>
          {editMode ? (
            <textarea className="input w-full min-h-[80px]" value={publisher.notes ?? ''} onChange={(e) => setPublisher({ ...publisher, notes: e.target.value })} />
          ) : (
            <p className="text-base whitespace-pre-wrap">{publisher.notes || '-'}</p>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">{t('common.createdAt')}:</span>{' '}
            {publisher.createdAt
              ? new Intl.DateTimeFormat('pl-PL', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(publisher.createdAt))
              : '-'}
          </div>
          <div>
            <span className="font-medium">{t('common.updatedAt')}:</span>{' '}
            {publisher.updatedAt
              ? new Intl.DateTimeFormat('pl-PL', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(publisher.updatedAt))
              : '-'}
          </div>
        </div>
      </Card>
    </div>
  )
}
