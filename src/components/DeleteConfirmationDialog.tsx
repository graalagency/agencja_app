'use client'

import React, { useContext } from 'react'
import { useTranslations } from 'next-intl'
import { DeleteConfirmationContext } from '@/context/DeleteConfirmationContext'
import { Modal } from './ui/Modal'
import { Button } from './ui/button'

export function DeleteConfirmationDialog() {
  const context = useContext(DeleteConfirmationContext)
  const t = useTranslations('common')

  if (!context) return null

  const { state, closeDeleteConfirmation, confirmDelete } = context

  return (
    <Modal isOpen={state.isOpen} onClose={closeDeleteConfirmation} title={state.title}>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{state.message}</p>
        <div className="flex items-center gap-3 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={closeDeleteConfirmation}
            disabled={state.isLoading}
          >
            {t('cancel')}
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={confirmDelete}
            disabled={state.isLoading}
          >
            {state.isLoading ? `${t('deleting')}...` : t('delete')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
