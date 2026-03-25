import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET() {
  try {
    const [copyTypes, submSentTypes, submEvents] = await Promise.all([
      prisma.$queryRawUnsafe<any[]>(
        `SELECT "CopyTypeID" as id, TRIM("CopyType") as desc FROM "dictCopyType" ORDER BY "CopyTypeID"`
      ),
      prisma.$queryRawUnsafe<any[]>(
        `SELECT "SubmSentTypeID" as id, TRIM("SubmSentType") as desc FROM "dictSubmSentType" ORDER BY "SubmSentTypeID"`
      ),
      prisma.$queryRawUnsafe<any[]>(
        `SELECT "EventCode" as code, TRIM("EventDesc") as desc FROM "dictEvents" ORDER BY "EventCode"`
      ),
    ])

    return NextResponse.json({
      copyTypes:     copyTypes.map(r => ({ id: Number(r.id), desc: r.desc })),
      submSentTypes: submSentTypes.map(r => ({ id: Number(r.id), desc: r.desc })),
      submEvents:    submEvents.map(r => ({ code: Number(r.code), desc: r.desc })),
    })
  } catch (err: any) {
    console.error('GET /api/submissions/dicts error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
