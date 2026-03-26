'use client'

import { useContext } from 'react'
import { DeleteConfirmationContext } from '@/context/DeleteConfirmationContext'

export function useDeleteConfirmation() {
  const context = useContext(DeleteConfirmationContext)

  if (!context) {
    throw new Error('useDeleteConfirmation must be used within DeleteConfirmationProvider')
  }

  return {
    openDeleteConfirmation: context.openDeleteConfirmation,
    closeDeleteConfirmation: context.closeDeleteConfirmation,
  }
}
