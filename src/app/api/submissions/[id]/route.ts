import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { requireModuleAccess } from '../../../../lib/api-permissions'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'submissions')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const submission = await prisma.submission.findUnique({
      where: { id },
      include: {
        Publisher: { select: { id: true, name: true, abbreviation: true, email: true, phone: true } },
        Title:     { select: { id: true, title: true, isbn: true, languageCode: true } },
        Events:    { orderBy: [{ eventDate: 'asc' }, { eventCode: 'asc' }] },
      },
    })

    if (!submission) return NextResponse.json({ error: 'Submission not found' }, { status: 404 })

    // Opisy zdarzeń ze słownika
    const eventCodes = [...new Set(submission.Events.map(e => e.eventCode))]
    const evMap = new Map<number, string>()
    if (eventCodes.length > 0) {
      const evRows = await prisma.$queryRawUnsafe<{ code: number; desc: string }[]>(
        `SELECT "EventCode" as code, TRIM("EventDesc") as desc FROM "dictEvents" WHERE "EventCode" = ANY(ARRAY[${eventCodes.join(',')}])`
      )
      evRows.forEach(r => evMap.set(Number(r.code), r.desc))
    }

    // Opisy copyType i submSentType
    const [copyTypeRows, submSentTypeRows] = await Promise.all([
      submission.copyTypeId
        ? prisma.$queryRawUnsafe<{ desc: string }[]>(`SELECT TRIM("CopyType") as desc FROM "dictCopyType" WHERE "CopyTypeID" = ${submission.copyTypeId}`)
        : Promise.resolve([]),
      submission.submSentTypeId
        ? prisma.$queryRawUnsafe<{ desc: string }[]>(`SELECT TRIM("SubmSentType") as desc FROM "dictSubmSentType" WHERE "SubmSentTypeID" = ${submission.submSentTypeId}`)
        : Promise.resolve([]),
    ])

    const lastEvent = submission.Events.length > 0
      ? [...submission.Events].sort((a, b) => {
          const d = (b.eventDate?.getTime() ?? 0) - (a.eventDate?.getTime() ?? 0)
          return d !== 0 ? d : b.eventCode - a.eventCode
        })[0]
      : null

    return NextResponse.json({
      id:             submission.id,
      sourceId:       submission.sourceId,
      titleId:        submission.titleId,
      title:          submission.Title,
      publisherId:    submission.publisherId,
      publisher:      submission.Publisher,
      contactId:      submission.contactId,
      copyTypeId:     submission.copyTypeId,
      copyTypeDesc:   copyTypeRows[0]?.desc ?? null,
      submSentTypeId: submission.submSentTypeId,
      submSentTypeDesc: submSentTypeRows[0]?.desc ?? null,
      submDate:       submission.submDate.toISOString(),
      sentDate:       submission.sentDate?.toISOString()   ?? null,
      endDate:        submission.endDate?.toISOString()    ?? null,
      returnDate:     submission.returnDate?.toISOString() ?? null,
      noOfCopies:     submission.noOfCopies,
      trackingNo:     submission.trackingNo,
      exclusive:      submission.exclusive,
      submNr:         submission.submNr,
      status:         submission.status,
      remarks:        submission.remarks,
      userMod:        submission.userMod?.trim() ?? null,
      dateMod:        submission.dateMod?.toISOString() ?? null,
      createdAt:      submission.createdAt.toISOString(),
      updatedAt:      submission.updatedAt.toISOString(),
      lastEventCode:  lastEvent?.eventCode ?? null,
      lastEventDesc:  lastEvent ? (evMap.get(lastEvent.eventCode) ?? null) : null,
      events: submission.Events.map(e => ({
        id:         e.id,
        sourceId:   e.sourceId,
        eventCode:  e.eventCode,
        eventDesc:  evMap.get(e.eventCode) ?? null,
        eventDate:  e.eventDate?.toISOString() ?? null,
        noOfCopies: e.noOfCopies,
        endDate:    e.endDate?.toISOString() ?? null,
      })),
    })
  } catch (err: any) {
    console.error('GET /api/submissions/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'submissions')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body   = await req.json()
    const events: any[] | undefined = Array.isArray(body.events) ? body.events : undefined

    await prisma.$transaction(async tx => {
      await tx.submission.update({
        where: { id },
        data: {
          titleId:        body.titleId        != null ? Number(body.titleId)        : null,
          publisherId:    body.publisherId    != null ? Number(body.publisherId)    : null,
          contactId:      body.contactId      != null ? Number(body.contactId)      : null,
          copyTypeId:     body.copyTypeId     != null ? Number(body.copyTypeId)     : null,
          submSentTypeId: body.submSentTypeId != null ? Number(body.submSentTypeId) : null,
          submDate:       body.submDate   ? new Date(body.submDate)   : undefined,
          sentDate:       body.sentDate   ? new Date(body.sentDate)   : null,
          endDate:        body.endDate    ? new Date(body.endDate)    : null,
          returnDate:     body.returnDate ? new Date(body.returnDate) : null,
          noOfCopies:     body.noOfCopies  != null ? Number(body.noOfCopies)  : null,
          trackingNo:     body.trackingNo  || null,
          exclusive:      body.exclusive   ?? undefined,
          submNr:         body.submNr      != null ? Number(body.submNr) : null,
          status:         body.status      || null,
          remarks:        body.remarks     || null,
        },
      })

      if (events !== undefined) {
        await tx.submissionEvent.deleteMany({ where: { submissionId: id } })
        for (const e of events) {
          if (!e.eventCode) continue
          await tx.submissionEvent.create({
            data: {
              submissionId: id,
              eventCode:    Number(e.eventCode),
              eventDate:    e.eventDate ? new Date(e.eventDate) : new Date(),
              noOfCopies:   e.noOfCopies ? Number(e.noOfCopies) : null,
              endDate:      e.endDate    ? new Date(e.endDate)   : null,
            },
          })
        }
      }
    })

    return NextResponse.json({ id })
  } catch (err: any) {
    console.error('PUT /api/submissions/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'submissions')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
    await prisma.submission.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/submissions/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
