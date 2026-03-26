'use client'

import React, { createContext, useState, useCallback } from 'react'

type DeleteConfirmationState = {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void | Promise<void>
  isLoading: boolean
}

type DeleteConfirmationContextType = {
  state: DeleteConfirmationState
  openDeleteConfirmation: (options: {
    title: string
    message: string
    onConfirm: () => void | Promise<void>
  }) => void
  closeDeleteConfirmation: () => void
  confirmDelete: () => Promise<void>
}

export const DeleteConfirmationContext = createContext<DeleteConfirmationContextType | undefined>(undefined)

export function DeleteConfirmationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DeleteConfirmationState>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
    isLoading: false,
  })

  const openDeleteConfirmation = useCallback((options: {
    title: string
    message: string
    onConfirm: () => void | Promise<void>
  }) => {
    setState({
      isOpen: true,
      title: options.title,
      message: options.message,
      onConfirm: options.onConfirm,
      isLoading: false,
    })
  }, [])

  const closeDeleteConfirmation = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }))
  }, [])

  const confirmDelete = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }))
    try {
      await state.onConfirm()
      closeDeleteConfirmation()
    } finally {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }, [state.onConfirm, closeDeleteConfirmation])

  return (
    <DeleteConfirmationContext.Provider value={{ state, openDeleteConfirmation, closeDeleteConfirmation, confirmDelete }}>
      {children}
    </DeleteConfirmationContext.Provider>
  )
}
