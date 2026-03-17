// Helper functions for checking permissions

export type ModuleKey = 
  | 'dashboard' 
  | 'contacts' 
  | 'customers'
  | 'publishers'
  | 'documents' 
  | 'invoices' 
  | 'simple-invoices'
  | 'authors'
  | 'cashflow' 
  | 'finances'
  | 'users' 
  | 'permissions' 
  | 'languages'
  | 'language-dictionary'
  | 'countries'
  | 'currencies'
  | 'administration'

export type RolePermissionsMap = Record<ModuleKey, {
  userAccess: boolean
  advancedAccess: boolean
  adminAccess: boolean
}>

// Check if user has access to a module based on their role and permissions matrix
export function hasModuleAccess(
  moduleKey: ModuleKey, 
  userRole: 'USER' | 'ADVANCED' | 'ADMIN',
  permissions: RolePermissionsMap
): boolean {
  // Admin always has access to everything
  if (userRole === 'ADMIN') return true
  
  // For nested modules, check both the specific module and the parent 'administration' module
  if (['users', 'permissions', 'languages', 'language-dictionary', 'countries', 'currencies'].includes(moduleKey)) {
    const specificPerm = permissions[moduleKey]
    const adminPerm = permissions['administration']
    
    if (!specificPerm && !adminPerm) return false
    
    // If specific permission exists, use it; otherwise fall back to administration
    const perm = specificPerm || adminPerm
    
    if (userRole === 'ADVANCED') {
      return perm.advancedAccess
    }
    
    if (userRole === 'USER') {
      return perm.userAccess
    }
  }
  
  const modulePerm = permissions[moduleKey]
  if (!modulePerm) return false
  
  if (userRole === 'ADVANCED') {
    return modulePerm.advancedAccess
  }
  
  if (userRole === 'USER') {
    return modulePerm.userAccess
  }
  
  return false
}
