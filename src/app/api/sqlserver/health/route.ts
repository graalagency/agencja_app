import { NextResponse } from 'next/server'
import { getSqlServerPool, sql } from '@/lib/sqlserver'

export async function GET() {
  try {
    const pool = await getSqlServerPool()
    const result = await pool
      .request()
      .query('SELECT @@SERVERNAME AS serverName, DB_NAME() AS databaseName')

    return NextResponse.json({
      success: true,
      data: result.recordset[0] ?? null,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown SQL Server error'
    return NextResponse.json(
      {
        success: false,
        error: message,
        code: (error as { code?: string })?.code,
      },
      { status: 500 }
    )
  }
}
