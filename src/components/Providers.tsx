'use client'

import type { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { DeleteConfirmationProvider } from '@/context/DeleteConfirmationContext'
import { DeleteConfirmationDialog } from './DeleteConfirmationDialog'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <DeleteConfirmationProvider>
        {children}
        <DeleteConfirmationDialog />
      </DeleteConfirmationProvider>
    </SessionProvider>
  )
}
