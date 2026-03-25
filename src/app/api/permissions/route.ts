import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { requireModuleAccess } from '../../../lib/api-permissions'

// GET /api/permissions - get all role permissions
export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'permissions')
  if (auth.error) return auth.error

  const permissions = await prisma.rolePermissions.findMany({
    orderBy: { module: 'asc' }
  })
  return NextResponse.json({ data: permissions })
}

// PUT /api/permissions - update role permissions
export async function PUT(req: Request) {
  const auth = await requireModuleAccess(req, 'permissions')
  if (auth.error) return auth.error

  try {
    const body = await req.json()
    const { module, userAccess, advancedAccess, adminAccess } = body

    if (!module) {
      return NextResponse.json({ error: 'Module is required' }, { status: 400 })
    }

    // Upsert permission for the module
    const permission = await prisma.rolePermissions.upsert({
      where: { module },
      update: {
        userAccess: userAccess ?? false,
        advancedAccess: advancedAccess ?? false,
        adminAccess: adminAccess ?? true,
        updatedAt: new Date(),
      },
      create: {
        module,
        userAccess: userAccess ?? false,
        advancedAccess: advancedAccess ?? false,
        adminAccess: adminAccess ?? true,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ data: permission })
  } catch (error) {
    console.error('Error updating permissions:', error)
    return NextResponse.json({ error: 'Failed to update permissions' }, { status: 500 })
  }
}
