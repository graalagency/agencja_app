import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'
import { hasModuleAccess, type ModuleKey } from './permissions'

/**
 * Sprawdza czy użytkownik ma dostęp do danego modułu.
 * Jeśli nie, zwraca 401 (brak sesji) lub 403 (dostęp zabroniony)
 *
 * Użycie w endpoincie:
 *   const auth = await requireModuleAccess(req, 'customers')
 *   if (auth.error) return auth.error
 *   const session = auth.session!
 */
export async function requireModuleAccess(req: Request, moduleKey: ModuleKey) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return {
      error: NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      ),
      session: null,
    }
  }

  const userRole = (session.user as any).role as 'USER' | 'ADVANCED' | 'ADMIN' | undefined
  const permissions = (session.user as any).permissions as any || {}

  if (!userRole) {
    return {
      error: NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      ),
      session: null,
    }
  }

  if (!hasModuleAccess(moduleKey, userRole, permissions)) {
    return {
      error: NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      ),
      session: null,
    }
  }

  return {
    error: null,
    session,
  }
}
