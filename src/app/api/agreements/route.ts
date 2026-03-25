import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { requireModuleAccess } from '../../../lib/api-permissions'
import { translateZodErrors } from '../../../lib/zod-error-handler'

const CreateAgreementInputSchema = z.object({
  publisherId: z.number().int().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  titleId: z.number().int().optional().nullable(),
  agrDate: z.string().datetime().or(z.string().date()),
  validYY: z.number().int().optional().nullable(),
  pubTermMM: z.number().int().optional().nullable(),
  maxCopies: z.number().int().optional().nullable(),
  minCopies: z.number().int().optional().nullable(),
  copiesToOwner: z.number().int().optional().nullable(),
  copiesToGraal: z.number().int().optional().nullable(),
  currencyCode: z.string().optional().nullable(),
  languageCode: z.string().optional().nullable(),
  countryId: z.number().int().optional().nullable(),
  commission: z.number().optional().nullable(),
  commissionMaterials: z.number().optional().nullable(),
  estimatedCopyPrice: z.number().optional().nullable(),
  graalShare: z.number().optional().nullable(),
  graalRepresent: z.boolean().optional(),
  clientReference: z.string().optional().nullable(),
  localTitle: z.string().optional().nullable(),
  localIsbn: z.string().optional().nullable(),
  localPubDate: z.string().optional().nullable(),
  agrDoc: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  remarks: z.string().optional().nullable(),
  agentId: z.number().int().optional().nullable(),
  rights: z.array(z.object({
    rightFormId: z.number().optional().nullable(),
    priceTypeId: z.number().optional().nullable(),
    royPriceTypeId: z.number().optional().nullable(),
    royAccountIntervalId: z.number().optional().nullable(),
    distributionTypeId: z.number().optional().nullable(),
    royRates: z.array(z.object({
      copiesMax: z.number().optional().nullable(),
      rate: z.number(),
    })).optional(),
  })).optional(),
  events: z.array(z.object({
    eventCode: z.number().int().optional(),
    eventDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    noOfCopies: z.number().int().optional().nullable(),
  })).optional(),
  advances: z.array(z.object({
    instalment: z.number().int().optional().nullable(),
    advTermId: z.number().int().optional().nullable(),
    advTypeId: z.number().int().optional().nullable(),
    amount: z.number(),
    termDate: z.string().optional().nullable(),
  })).optional(),
})

export async function GET(req: Request) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const url = new URL(req.url)
    const page = Math.max(1, Number(url.searchParams.get('page') || '1'))
    const pageSize = Math.min(200, Math.max(1, Number(url.searchParams.get('pageSize') || '50')))
    const skip = (page - 1) * pageSize

    const publisherName  = (url.searchParams.get('publisherName') || '').trim()
    const clientName     = (url.searchParams.get('clientName') || url.searchParams.get('customerName') || '').trim()
    const search         = (url.searchParams.get('search') || '').trim()
    const dateFrom       = url.searchParams.get('dateFrom')
    const dateTo         = url.searchParams.get('dateTo')
    const lastEventCodes = url.searchParams.getAll('lastEventCode').flatMap(v => v.split(',')).map(Number).filter(Boolean)
    const currencies     = url.searchParams.getAll('currency').flatMap(v => v.split(',')).map(s => s.trim().toUpperCase()).filter(Boolean)
    const languages      = url.searchParams.getAll('language').flatMap(v => v.split(',')).map(s => s.trim().toUpperCase()).filter(Boolean)
    const titleId        = url.searchParams.get('titleId')
    const sort           = url.searchParams.get('sort') || 'agrDate'
    const order          = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}

    if (titleId)       where.titleId   = Number(titleId)
    if (publisherName) where.Publisher = { OR: [
      { name:         { contains: publisherName, mode: 'insensitive' } },
      { abbreviation: { contains: publisherName, mode: 'insensitive' } },
    ] }
    if (clientName)    where.Client    = { name: { contains: clientName,    mode: 'insensitive' } }
    if (currencies.length > 0) where.currencyCode = { in: currencies }
    if (languages.length > 0)  where.languageCode  = { in: languages }
    if (lastEventCodes.length > 0) {
      const ids = await prisma.$queryRawUnsafe<{ id: string }[]>(`
        SELECT last."agreementId"::text AS id
        FROM (
          SELECT DISTINCT ON (e."agreementId") e."agreementId", e."eventCode"
          FROM "AgreementEvent" e
          ORDER BY e."agreementId", e."eventDate" DESC NULLS LAST, e."eventCode" DESC
        ) last
        WHERE last."eventCode" IN (${lastEventCodes.join(',')})
      `)
      where.id = { in: ids.map(r => Number(r.id)) }
    }

    if (dateFrom || dateTo) {
      where.agrDate = {}
      if (dateFrom) where.agrDate.gte = new Date(dateFrom)
      if (dateTo)   where.agrDate.lte = new Date(dateTo)
    }

    if (search) {
      where.OR = [
        { localTitle:  { contains: search, mode: 'insensitive' } },
        { remarks:     { contains: search, mode: 'insensitive' } },
        { Publisher:   { name: { contains: search, mode: 'insensitive' } } },
        { Client:      { name: { contains: search, mode: 'insensitive' } } },
        { Title:       { title: { contains: search, mode: 'insensitive' } } },
      ]
    }

    const sortAllowed: Record<string, string> = {
      agrDate: 'agrDate', id: 'id', commission: 'commission',
      status: 'status', currencyCode: 'currencyCode',
    }
    const orderBy = { [sortAllowed[sort] ?? 'agrDate']: order }

    const [total, data] = await Promise.all([
      prisma.agreement.count({ where }),
      prisma.agreement.findMany({
        where,
        take: pageSize,
        skip,
        orderBy,
        include: {
          Publisher: { select: { id: true, name: true, abbreviation: true } },
          Client:    { select: { id: true, name: true, abbreviation: true } },
          Title:     { select: { id: true, title: true } },
          Events:    { orderBy: [{ eventDate: 'desc' }, { eventCode: 'desc' }], take: 1, select: { eventCode: true, eventDate: true } },
        },
      }),
    ])

    const items = data.map(a => ({
      id:                  a.id,
      sourceId:            a.sourceId,
      publisherId:         a.publisherId,
      publisherName:       a.Publisher?.name ?? null,
      publisherAbb:        a.Publisher?.abbreviation ?? null,
      clientId:            a.clientId,
      clientName:          a.Client?.name ?? null,
      titleId:             a.titleId,
      titleName:           a.Title?.title ?? a.localTitle ?? null,
      agrDate:             a.agrDate.toISOString(),
      status:              a.status,
      lastEventCode:       a.Events[0]?.eventCode ?? null,
      currencyCode:        a.currencyCode?.trim() ?? null,
      languageCode:        a.languageCode?.trim() ?? null,
      commission:          a.commission ? Number(a.commission) : null,
      commissionMaterials: a.commissionMaterials ? Number(a.commissionMaterials) : null,
      validYY:             a.validYY,
      pubTermMM:           a.pubTermMM,
      localTitle:          a.localTitle,
      graalRepresent:      a.graalRepresent,
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('GET /api/agreements error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const body = await req.json()

    const validationResult = CreateAgreementInputSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: translateZodErrors(validationResult.error.issues, 'pl')
        },
        { status: 400 }
      )
    }

    const validated = validationResult.data

    const rights:   any[] = Array.isArray(validated.rights)   ? validated.rights   : []
    const events:   any[] = Array.isArray(validated.events)   ? validated.events   : []
    const advances: any[] = Array.isArray(validated.advances) ? validated.advances : []

    const agreementId = await prisma.$transaction(async tx => {
      const agr = await tx.agreement.create({
        data: {
          publisherId:         validated.publisherId,
          clientId:            validated.clientId,
          titleId:             validated.titleId,
          agrDate:             new Date(validated.agrDate),
          validYY:             validated.validYY,
          pubTermMM:           validated.pubTermMM,
          maxCopies:           validated.maxCopies,
          minCopies:           validated.minCopies,
          copiesToOwner:       validated.copiesToOwner,
          copiesToGraal:       validated.copiesToGraal,
          currencyCode:        validated.currencyCode,
          languageCode:        validated.languageCode,
          countryId:           validated.countryId,
          commission:          validated.commission,
          commissionMaterials: validated.commissionMaterials,
          estimatedCopyPrice:  validated.estimatedCopyPrice,
          graalShare:          validated.graalShare,
          graalRepresent:      validated.graalRepresent ?? true,
          clientReference:     validated.clientReference,
          localTitle:          validated.localTitle,
          localIsbn:           validated.localIsbn,
          localPubDate:        validated.localPubDate ? new Date(validated.localPubDate) : null,
          agrDoc:              validated.agrDoc,
          status:              validated.status,
          remarks:             validated.remarks,
          agentId:             validated.agentId,
          updatedAt:           new Date(),
        },
      })

      // Prawa + stawki royalty
      for (const r of rights) {
        const right = await tx.agreementRight.create({
          data: {
            agreementId:          agr.id,
            rightFormId:          r.rightFormId          ? Number(r.rightFormId)          : null,
            priceTypeId:          r.priceTypeId          ? Number(r.priceTypeId)          : null,
            royPriceTypeId:       r.royPriceTypeId       ? Number(r.royPriceTypeId)       : null,
            royAccountIntervalId: r.royAccountIntervalId ? Number(r.royAccountIntervalId) : null,
            distributionTypeId:   r.distributionTypeId   ? Number(r.distributionTypeId)   : null,
          },
        })
        const royRates: any[] = Array.isArray(r.royRates) ? r.royRates : []
        for (let i = 0; i < royRates.length; i++) {
          const rr = royRates[i]
          await tx.agreementRoyRate.create({
            data: {
              agreementId: agr.id,
              rightId:     right.id,
              step:        i + 1,
              copiesMax:   rr.copiesMax ? Number(rr.copiesMax) : null,
              rate:        Number(rr.rate ?? 0),
            },
          })
        }
      }

      // Zdarzenia
      for (const e of events) {
        if (!e.eventCode) continue
        await tx.agreementEvent.create({
          data: {
            agreementId: agr.id,
            eventCode:   Number(e.eventCode),
            eventDate:   e.eventDate ? new Date(e.eventDate) : null,
            endDate:     e.endDate   ? new Date(e.endDate)   : null,
            noOfCopies:  e.noOfCopies ? Number(e.noOfCopies) : null,
          },
        })
      }

      // Zaliczki
      for (const a of advances) {
        if (a.amount == null || a.amount === '') continue
        await tx.agreementAdvance.create({
          data: {
            agreementId: agr.id,
            instalment:  a.instalment  ? Number(a.instalment)  : null,
            advTermId:   a.advTermId   ? Number(a.advTermId)   : null,
            advTypeId:   a.advTypeId   ? Number(a.advTypeId)   : null,
            amount:      Number(a.amount),
            termDate:    a.termDate    ? new Date(a.termDate)  : null,
          },
        })
      }

      return agr.id
    })

    return NextResponse.json({ id: agreementId }, { status: 201 })
  } catch (err: any) {
    console.error('POST /api/agreements error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
