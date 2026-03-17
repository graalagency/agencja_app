"use client"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { 
  LayoutDashboard, 
  Database, 
  Receipt, 
  Users as UsersIcon, 
  Shield, 
  Languages,
  ChevronDown,
  UserCircle,
  Building2,
  TrendingUp,
  Wallet
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { hasModuleAccess, type RolePermissionsMap, type ModuleKey } from '../lib/permissions'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

type Props = { collapsed?: boolean }

export function Sidebar({ collapsed = false }: Props) {
  const t = useTranslations()
  const { data: session } = useSession()
  const role = (session as any)?.user?.role as 'USER' | 'ADVANCED' | 'ADMIN' | undefined
  const pathname = usePathname() || ''
  const [open, setOpen] = useState<{ [k: string]: boolean }>({ data: false, admin: false, finance: false })
  const [permissions, setPermissions] = useState<RolePermissionsMap | null>(null)
  const [loading, setLoading] = useState(true)
  const [tooltip, setTooltip] = useState<{ label: string; x: number; y: number } | null>(null)
  const [tooltipDelay, setTooltipDelay] = useState<ReturnType<typeof setTimeout> | null>(null)

  const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }))

  useEffect(() => {
    const loadPermissions = async () => {
      try {
        const res = await fetch('/api/permissions')
        if (!res.ok) {
          setLoading(false)
          return
        }
        const json = await res.json()
        const permMap: RolePermissionsMap = {
          dashboard: { userAccess: false, advancedAccess: false, adminAccess: true },
          contacts: { userAccess: false, advancedAccess: false, adminAccess: true },
          customers: { userAccess: false, advancedAccess: false, adminAccess: true },
          publishers: { userAccess: false, advancedAccess: false, adminAccess: true },
          authors: { userAccess: false, advancedAccess: false, adminAccess: true },
          invoices: { userAccess: false, advancedAccess: false, adminAccess: true },
          'simple-invoices': { userAccess: false, advancedAccess: false, adminAccess: true },
          cashflow: { userAccess: false, advancedAccess: false, adminAccess: true },
          finances: { userAccess: false, advancedAccess: false, adminAccess: true },
          users: { userAccess: false, advancedAccess: false, adminAccess: true },
          permissions: { userAccess: false, advancedAccess: false, adminAccess: true },
          languages: { userAccess: false, advancedAccess: false, adminAccess: true },
          'language-dictionary': { userAccess: false, advancedAccess: false, adminAccess: true },
          countries: { userAccess: false, advancedAccess: false, adminAccess: true },
          currencies: { userAccess: false, advancedAccess: false, adminAccess: true },
          administration: { userAccess: false, advancedAccess: false, adminAccess: true },
          documents: { userAccess: false, advancedAccess: false, adminAccess: true },
        }
        
        if (Array.isArray(json.data)) {
          json.data.forEach((p: any) => {
            if (p.module in permMap) {
              permMap[p.module as ModuleKey] = {
                userAccess: p.userAccess,
                advancedAccess: p.advancedAccess,
                adminAccess: p.adminAccess,
              }
            }
          })
        }
        
        setPermissions(permMap)
      } catch (error) {
        console.error('Failed to load permissions:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadPermissions()
  }, [])

  // Auto-open the relevant accordion when the current path belongs to that group
  useEffect(() => {
    const isData = pathname.startsWith('/customers') || pathname.startsWith('/publishers') || pathname.startsWith('/contacts') || pathname.startsWith('/authors')
    const isFinance = pathname.startsWith('/finances') || pathname.startsWith('/simple-invoices') || pathname.startsWith('/invoices/calendar')
    const isAdmin = pathname.startsWith('/users') || pathname.startsWith('/permissions') || pathname.startsWith('/languages')
    setOpen(prev => ({
      ...prev,
      data: isData || prev.data,
      finance: isFinance || prev.finance,
      admin: isAdmin || prev.admin,
    }))
  }, [pathname])

  const canAccess = (moduleKey: ModuleKey) => {
    if (!role || !permissions) return false
    return hasModuleAccess(moduleKey, role, permissions)
  }

  const collapsedItemClass = (isActive: boolean) =>
    cn(
      "group relative flex h-10 w-10 items-center justify-center rounded-md transition-colors overflow-visible",
      isActive
        ? "bg-primary text-primary-foreground"
        : "hover:bg-accent hover:text-accent-foreground"
    )

  const clearTooltip = () => {
    if (tooltipDelay) {
      clearTimeout(tooltipDelay)
      setTooltipDelay(null)
    }
    setTooltip(null)
  }

  const showTooltip = (event: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (tooltipDelay) {
      clearTimeout(tooltipDelay)
    }
    const rect = event.currentTarget.getBoundingClientRect()
    const timeout = setTimeout(() => {
      setTooltip({
        label,
        x: rect.right + 10,
        y: rect.top + rect.height / 2,
      })
      setTooltipDelay(null)
    }, 120)
    setTooltipDelay(timeout)
  }

  useEffect(() => {
    return () => {
      if (tooltipDelay) {
        clearTimeout(tooltipDelay)
      }
    }
  }, [tooltipDelay])

  const renderCollapsedItem = (href: string, label: string, isActive: boolean, icon: React.ReactNode) => (
    <Link
      href={href}
      aria-label={label}
      className={collapsedItemClass(isActive)}
      onMouseEnter={(event) => showTooltip(event, label)}
      onMouseLeave={clearTooltip}
      onBlur={clearTooltip}
    >
      {icon}
    </Link>
  )

  if (loading) {
    return (
      <div className="h-full flex flex-col bg-card border-r">
        <div className={cn("p-6 border-b", collapsed && "px-2") }>
          <div className={cn("flex items-center gap-2", collapsed && "justify-center") }>
            <Building2 className="h-6 w-6 text-primary" />
            {!collapsed && <span className="font-bold text-lg">O P I S</span>}
          </div>
        </div>
        <div className="p-4 text-sm text-muted-foreground">{t('common.loading')}</div>
      </div>
    )
  }

  if (collapsed) {
    return (
      <>
        <div className="h-full flex flex-col bg-card border-r">
          <div className="p-2 border-b flex justify-center">
            <Building2 className="h-6 w-6 text-primary" />
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-visible py-3">
            <nav className="flex flex-col items-center gap-1 px-2 overflow-visible">
            {canAccess('dashboard') && (
              renderCollapsedItem('/dashboard', t('navigation.dashboard'), pathname === '/dashboard' || pathname === '/', <LayoutDashboard className="h-4 w-4" />)
            )}

            {canAccess('contacts') && (
              renderCollapsedItem('/contacts', t('navigation.contacts'), pathname.startsWith('/contacts'), <UserCircle className="h-4 w-4" />)
            )}

            {canAccess('customers') && (
              renderCollapsedItem('/customers', t('customers.title'), pathname.startsWith('/customers'), <Building2 className="h-4 w-4" />)
            )}

            {canAccess('publishers') && (
              renderCollapsedItem('/publishers', t('publishers.title'), pathname.startsWith('/publishers'), <Building2 className="h-4 w-4" />)
            )}

            {canAccess('authors') && (
              renderCollapsedItem('/authors', 'Autorzy', pathname.startsWith('/authors'), <UserCircle className="h-4 w-4" />)
            )}

            {(canAccess('countries') || canAccess('currencies') || canAccess('language-dictionary')) && (
              renderCollapsedItem(
                '/dictionaries',
                t('navigation.dictionaries'),
                pathname.startsWith('/dictionaries') || pathname.startsWith('/countries') || pathname.startsWith('/currencies') || pathname.startsWith('/language-dictionary'),
                <Database className="h-4 w-4" />
              )
            )}

            {canAccess('invoices') && (
              renderCollapsedItem('/finances/invoices', 'Faktury VAT', pathname.startsWith('/finances/invoices'), <Receipt className="h-4 w-4" />)
            )}

            {canAccess('invoices') && (
              renderCollapsedItem('/simple-invoices', 'Faktury proste', pathname.startsWith('/simple-invoices'), <Receipt className="h-4 w-4" />)
            )}

            {canAccess('invoices') && (
              renderCollapsedItem('/finances/agreements', 'Umowy', pathname.startsWith('/finances/agreements'), <Wallet className="h-4 w-4" />)
            )}

            {canAccess('cashflow') && (
              renderCollapsedItem('/invoices/calendar', 'Cashflow', pathname.startsWith('/invoices/calendar'), <TrendingUp className="h-4 w-4" />)
            )}

            {canAccess('users') && (
              renderCollapsedItem('/users', t('navigation.users'), pathname.startsWith('/users'), <UsersIcon className="h-4 w-4" />)
            )}

            {canAccess('permissions') && (
              renderCollapsedItem('/permissions', t('permissions.title'), pathname.startsWith('/permissions'), <Shield className="h-4 w-4" />)
            )}

            {canAccess('languages') && (
              renderCollapsedItem('/languages', t('navigation.languages'), pathname.startsWith('/languages'), <Languages className="h-4 w-4" />)
            )}
            </nav>
          </div>
        </div>
        {tooltip && typeof document !== 'undefined' && createPortal(
          <div
            className="pointer-events-none fixed z-[200] -translate-y-1/2 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.label}
          </div>,
          document.body
        )}
      </>
    )
  }

  return (
    <div className="h-full flex flex-col bg-card border-r">
      {/* Logo/Brand */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{t('common.appName')}</span>
        </div>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {/* Dashboard */}
          {canAccess('dashboard') && (
            <Link 
              href="/dashboard" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === '/dashboard' || pathname === '/' 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>{t('navigation.dashboard')}</span>
            </Link>
          )}

          {/* Dictionaries */}
          {(canAccess('countries') || canAccess('currencies') || canAccess('language-dictionary')) && (
            <Link 
              href="/dictionaries" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname.startsWith('/dictionaries') || pathname.startsWith('/countries') || pathname.startsWith('/currencies') || pathname.startsWith('/language-dictionary')
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Database className="h-4 w-4" />
              <span>{t('navigation.dictionaries')}</span>
            </Link>
          )}

          {/* Data group */}
          {(canAccess('contacts') || canAccess('customers') || canAccess('publishers') || canAccess('authors')) && (
            <div className="space-y-1">
              <button 
                onClick={() => toggle('data')} 
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  (pathname.startsWith('/customers') || pathname.startsWith('/publishers') || pathname.startsWith('/contacts') || pathname.startsWith('/authors'))
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4" />
                  <span>{t('navigation.customers')}</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open.data && "rotate-180")} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200 space-y-1",
                open.data ? "max-h-60 mt-1" : "max-h-0"
              )}>
                {canAccess('contacts') && (
                  <Link 
                    href="/contacts" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/contacts')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <UserCircle className="h-3.5 w-3.5" />
                    <span>{t('navigation.contacts')}</span>
                  </Link>
                )}
                {canAccess('customers') && (
                  <Link 
                    href="/customers" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/customers')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{t('customers.title')}</span>
                  </Link>
                )}
                {canAccess('publishers') && (
                  <Link 
                    href="/publishers" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/publishers')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{t('publishers.title')}</span>
                  </Link>
                )}
                {canAccess('authors') && (
                  <Link 
                    href="/authors" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/authors')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <UserCircle className="h-3.5 w-3.5" />
                    <span>Autorzy</span>
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Finance group */}
          {(canAccess('invoices') || canAccess('cashflow')) && (
            <div className="space-y-1">
              <button 
                onClick={() => toggle('finance')} 
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  (pathname.startsWith('/finances') || pathname.startsWith('/invoices/calendar'))
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Wallet className="h-4 w-4" />
                  <span>Finanse</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open.finance && "rotate-180")} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200 space-y-1",
                open.finance ? "max-h-60 mt-1" : "max-h-0"
              )}>
                {canAccess('invoices') && (
                  <Link 
                    href="/finances/invoices" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/finances/invoices')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Receipt className="h-3.5 w-3.5" />
                    <span>Faktury VAT</span>
                  </Link>
                )}
                {canAccess('invoices') && (
                  <Link 
                    href="/simple-invoices" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/simple-invoices')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Receipt className="h-3.5 w-3.5" />
                    <span>Faktury proste</span>
                  </Link>
                )}
                {canAccess('cashflow') && (
                  <Link 
                    href="/invoices/calendar" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/invoices/calendar')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Cashflow</span>
                  </Link>
                )}
                {canAccess('invoices') && (
                  <Link 
                    href="/finances/agreements" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/finances/agreements')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Receipt className="h-3.5 w-3.5" />
                    <span>Umowy</span>
                  </Link>
                )}
              </div>
            </div>
          )}

          <Separator className="my-2" />

          {/* Admin group */}
          {(canAccess('users') || canAccess('permissions') || canAccess('languages')) && (
            <div className="space-y-1">
              <button 
                onClick={() => toggle('admin')} 
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  (pathname.startsWith('/users') || pathname.startsWith('/permissions') || pathname.startsWith('/languages'))
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4" />
                  <span>{t('navigation.administration')}</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open.admin && "rotate-180")} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200 space-y-1",
                open.admin ? "max-h-40 mt-1" : "max-h-0"
              )}>
                {canAccess('users') && (
                  <Link 
                    href="/users" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/users')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <UsersIcon className="h-3.5 w-3.5" />
                    <span>{t('navigation.users')}</span>
                  </Link>
                )}
                {canAccess('permissions') && (
                  <Link 
                    href="/permissions" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/permissions')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Shield className="h-3.5 w-3.5" />
                    <span>{t('permissions.title')}</span>
                  </Link>
                )}
                {canAccess('languages') && (
                  <Link 
                    href="/languages" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/languages')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Languages className="h-3.5 w-3.5" />
                    <span>{t('navigation.languages')}</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </nav>
      </ScrollArea>
    </div>
  )
}
