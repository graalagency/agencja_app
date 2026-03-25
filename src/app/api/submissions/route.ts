import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { requireModuleAccess } from '../../../lib/api-permissions'

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'submissions')
  if (auth.error) return auth.error

  try {
    const url      = new URL(req.url)
    const page     = Math.max(1, Number(url.searchParams.get('page')     || '1'))
    const pageSize = Math.min(200, Math.max(1, Number(url.searchParams.get('pageSize') || '50')))
    const skip     = (page - 1) * pageSize

    const publisherName  = (url.searchParams.get('publisherName') || '').trim()
    const search         = (url.searchParams.get('search')        || '').trim()
    const titleId        = url.searchParams.get('titleId')
    const publisherId    = url.searchParams.get('publisherId')
    const exclusiveParam = url.searchParams.get('exclusive')
    const dateFrom       = url.searchParams.get('dateFrom')
    const dateTo         = url.searchParams.get('dateTo')
    const lastEventCodes = url.searchParams.getAll('lastEventCode').flatMap(v => v.split(',')).map(Number).filter(Boolean)
    const sort           = url.searchParams.get('sort') || 'submDate'
    const order          = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'ASC' : 'DESC'

    const sortAllowed: Record<string, string> = {
      submDate: '"submDate"', id: 'id', noOfCopies: '"noOfCopies"', submNr: '"submNr"',
    }
    const orderCol = sortAllowed[sort] ?? '"submDate"'

    // Budowanie WHERE jako raw SQL — unika limitu bind variables przy IN (...)
    const conds: string[] = []
    const vals:  unknown[] = []
    const p = (v: unknown) => { vals.push(v); return `$${vals.length}` }

    if (titleId)     conds.push(`s."titleId"     = ${p(Number(titleId))}`)
    if (publisherId) conds.push(`s."publisherId" = ${p(Number(publisherId))}`)
    if (publisherName) conds.push(`pub."name" ILIKE ${p('%' + publisherName + '%')}`)
    if (exclusiveParam !== null && exclusiveParam !== '') conds.push(`s."exclusive" = ${p(exclusiveParam === 'true')}`)
    if (dateFrom) conds.push(`s."submDate" >= ${p(new Date(dateFrom))}`)
    if (dateTo)   conds.push(`s."submDate" <= ${p(new Date(dateTo))}`)
    if (search) {
      const sp = p('%' + search + '%')
      conds.push(`(s."remarks" ILIKE ${sp} OR s."trackingNo" ILIKE ${sp} OR t."title" ILIKE ${sp} OR pub."name" ILIKE ${sp})`)
    }
    if (lastEventCodes.length > 0) {
      // EXISTS z DISTINCT ON — jeden bind variable (array), brak limitu
      conds.push(`EXISTS (
        SELECT 1 FROM (
          SELECT DISTINCT ON (e."submissionId") e."submissionId", e."eventCode"
          FROM "SubmissionEvent" e
          ORDER BY e."submissionId", e."eventDate" DESC NULLS LAST, e."eventCode" DESC
        ) last
        WHERE last."submissionId" = s.id
          AND last."eventCode" = ANY(${p(lastEventCodes)}::int[])
      )`)
    }

    const where = conds.length > 0 ? `WHERE ${conds.join(' AND ')}` : ''

    const baseFrom = `
      FROM "Submission" s
      LEFT JOIN "Publisher" pub ON pub.id = s."publisherId"
      LEFT JOIN "Title"     t   ON t.id   = s."titleId"
      ${where}
    `

    const [countRows, dataRows] = await Promise.all([
      prisma.$queryRawUnsafe<{ cnt: bigint }[]>(
        `SELECT COUNT(*) AS cnt ${baseFrom}`, ...vals
      ),
      prisma.$queryRawUnsafe<any[]>(`
        SELECT
          s.id, s."sourceId", s."titleId", s."publisherId",
          s."noOfCopies", s."exclusive", s."submNr",
          s."copyTypeId", s."submSentTypeId", s."remarks",
          s."submDate",
          pub.id        AS "publisherIdJoin",
          pub."name"    AS "publisherName",
          pub."abbreviation" AS "publisherAbb",
          t."title"     AS "titleName",
          (
            SELECT last."eventCode"
            FROM (
              SELECT DISTINCT ON (e."submissionId") e."submissionId", e."eventCode"
              FROM "SubmissionEvent" e
              ORDER BY e."submissionId", e."eventDate" DESC NULLS LAST, e."eventCode" DESC
            ) last
            WHERE last."submissionId" = s.id
          ) AS "lastEventCode"
        ${baseFrom}
        ORDER BY s.${orderCol} ${order}
        LIMIT ${pageSize} OFFSET ${skip}
      `, ...vals),
    ])

    const total = Number(countRows[0]?.cnt ?? 0)

    // Opisy zdarzeń ze słownika
    const eventCodes = [...new Set(dataRows.map((r: any) => r.lastEventCode).filter(Boolean))] as number[]
    const evMap = new Map<number, string>()
    if (eventCodes.length > 0) {
      const evRows = await prisma.$queryRawUnsafe<{ code: number; desc: string }[]>(
        `SELECT "EventCode" as code, TRIM("EventDesc") as desc FROM "dictEvents" WHERE "EventCode" = ANY(ARRAY[${eventCodes.join(',')}])`
      )
      evRows.forEach(r => evMap.set(Number(r.code), r.desc))
    }

    const items = dataRows.map((s: any) => ({
      id:             Number(s.id),
      sourceId:       s.sourceId != null ? Number(s.sourceId) : null,
      titleId:        s.titleId  != null ? Number(s.titleId)  : null,
      titleName:      s.titleName   ?? null,
      publisherId:    s.publisherId != null ? Number(s.publisherId) : null,
      publisherName:  s.publisherName  ?? null,
      publisherAbb:   s.publisherAbb   ?? null,
      submDate:       s.submDate instanceof Date ? s.submDate.toISOString() : s.submDate,
      noOfCopies:     s.noOfCopies  != null ? Number(s.noOfCopies)  : null,
      exclusive:      Boolean(s.exclusive),
      submNr:         s.submNr      != null ? Number(s.submNr)      : null,
      copyTypeId:     s.copyTypeId  != null ? Number(s.copyTypeId)  : null,
      submSentTypeId: s.submSentTypeId != null ? Number(s.submSentTypeId) : null,
      remarks:        s.remarks ?? null,
      lastEventCode:  s.lastEventCode != null ? Number(s.lastEventCode) : null,
      lastEventDesc:  s.lastEventCode != null ? (evMap.get(Number(s.lastEventCode)) ?? null) : null,
    }))

    return NextResponse.json({ data: items, meta: { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) } })
  } catch (err: any) {
    console.error('GET /api/submissions error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const auth = await requireModuleAccess(req, 'submissions')
  if (auth.error) return auth.error

  try {
    const body   = await req.json()
    const events: any[] = Array.isArray(body.events) ? body.events : []

    const submission = await prisma.$transaction(async tx => {
      const s = await tx.submission.create({
        data: {
          titleId:        body.titleId        ? Number(body.titleId)        : null,
          publisherId:    body.publisherId    ? Number(body.publisherId)    : null,
          contactId:      body.contactId      ? Number(body.contactId)      : null,
          copyTypeId:     body.copyTypeId     ? Number(body.copyTypeId)     : null,
          submSentTypeId: body.submSentTypeId ? Number(body.submSentTypeId) : null,
          submDate:       body.submDate ? new Date(body.submDate) : new Date(),
          sentDate:       body.sentDate   ? new Date(body.sentDate)   : null,
          endDate:        body.endDate    ? new Date(body.endDate)    : null,
          returnDate:     body.returnDate ? new Date(body.returnDate) : null,
          noOfCopies:     body.noOfCopies != null ? Number(body.noOfCopies) : null,
          trackingNo:     body.trackingNo  || null,
          exclusive:      body.exclusive   ?? false,
          submNr:         body.submNr      != null ? Number(body.submNr) : null,
          status:         body.status      || null,
          remarks:        body.remarks     || null,
        },
      })
      for (const e of events) {
        if (!e.eventCode) continue
        await tx.submissionEvent.create({
          data: {
            submissionId: s.id,
            eventCode:    Number(e.eventCode),
            eventDate:    e.eventDate ? new Date(e.eventDate) : new Date(),
            noOfCopies:   e.noOfCopies ? Number(e.noOfCopies) : null,
            endDate:      e.endDate    ? new Date(e.endDate)   : null,
          },
        })
      }
      return s
    })

    return NextResponse.json({ id: submission.id }, { status: 201 })
  } catch (err: any) {
    console.error('POST /api/submissions error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
