import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'
import { z } from 'zod'

// Widget configuration schema
const WidgetConfigSchema = z.object({
  id: z.string(),
  enabled: z.boolean(),
  col: z.number().min(0).max(19),
  row: z.number().min(0).max(19),
  width: z.number().min(5).max(20),
  height: z.number().min(5).max(20),
})

const DashboardConfigSchema = z.object({
  gridCols: z.number().default(20),
  gridRows: z.number().default(20),
  widgets: z.array(WidgetConfigSchema),
})

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const config = DashboardConfigSchema.parse(body)

    await prisma.user.update({
      where: { id: Number(session.user.id) },
      data: { dashboardConfig: config },
    })

    return NextResponse.json(config)
  } catch (err: any) {
    console.error('PUT /api/profile/dashboard-config error:', err)
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid configuration', details: err.errors },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(session.user.id) },
      select: { dashboardConfig: true },
    })

    const config = user?.dashboardConfig || getDefaultDashboardConfig()
    return NextResponse.json(config)
  } catch (err) {
    console.error('GET /api/profile/dashboard-config error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function getDefaultDashboardConfig() {
  return {
    gridCols: 20,
    gridRows: 20,
    widgets: [
      { id: 'top-authors', enabled: true, col: 0, row: 0, width: 10, height: 10 },
      { id: 'top-publishers', enabled: true, col: 10, row: 0, width: 10, height: 10 },
      { id: 'agreements-status', enabled: true, col: 0, row: 10, width: 10, height: 5 },
      { id: 'submissions-status', enabled: true, col: 10, row: 10, width: 10, height: 5 },
    ],
  }
}
