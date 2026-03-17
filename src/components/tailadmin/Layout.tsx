"use client"
import React, { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('sidebar_collapsed')
      if (stored) setCollapsed(stored === '1')
    } catch {
      // ignore storage access errors
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('sidebar_collapsed', collapsed ? '1' : '0')
    } catch {
      // ignore storage access errors
    }
  }, [collapsed])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SessionProvider>
        <div className="flex h-screen overflow-y-hidden overflow-x-visible">
          <aside className={`relative z-50 bg-card text-card-foreground border-r border-border transition-all duration-200 ${collapsed ? 'w-16' : 'w-64'}`}>
            <Sidebar collapsed={collapsed} />
          </aside>

          <div className="flex-1 flex flex-col">
            <Header onToggleSidebar={() => setCollapsed(prev=>!prev)} collapsed={collapsed} />
            <main className="flex-1 overflow-auto p-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <footer className="bg-card border-t border-border p-3 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Admin Panel
            </footer>
          </div>
        </div>
      </SessionProvider>
    </div>
  )
}
