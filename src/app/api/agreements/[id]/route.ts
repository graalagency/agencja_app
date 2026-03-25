import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { requireModuleAccess } from '../../../../lib/api-permissions'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const agreement = await prisma.agreement.findUnique({
      where: { id },
      include: {
        Publisher: { select: { id: true, name: true, abbreviation: true, email: true, phone: true } },
        Client:    { select: { id: true, name: true, abbreviation: true, email: true, phone: true } },
        Title:     { select: { id: true, title: true, isbn: true, languageCode: true } },
        Rights: {
          include: { RoyRates: { orderBy: { step: 'asc' } } },
          orderBy: { id: 'asc' },
        },
        Events:  { orderBy: [{ eventDate: 'asc' }, { eventCode: 'asc' }] },
        Advances: { orderBy: [{ advTypeId: 'asc' }, { instalment: 'asc' }] },
      },
    })

    if (!agreement) {
      return NextResponse.json({ error: 'Agreement not found' }, { status: 404 })
    }

    // Pobierz opisy ze słowników (raw SQL — tabele zarządzane przez system słowników)
    const rightFormIds        = [...new Set(agreement.Rights.map(r => r.rightFormId).filter(Boolean))]
    const priceTypeIds        = [...new Set(agreement.Rights.map(r => r.priceTypeId).filter(Boolean))]
    const royPriceTypeIds     = [...new Set(agreement.Rights.map(r => r.royPriceTypeId).filter(Boolean))]
    const royAccountIds       = [...new Set(agreement.Rights.map(r => r.royAccountIntervalId).filter(Boolean))]
    const distIds             = [...new Set(agreement.Rights.map(r => r.distributionTypeId).filter(Boolean))]
    const eventCodes          = [...new Set(agreement.Events.map(e => e.eventCode))]
    const advTermIds          = [...new Set(agreement.Advances.map(a => a.advTermId).filter(Boolean))]
    const advTypeIds          = [...new Set(agreement.Advances.map(a => a.advTypeId).filter(Boolean))]

    const [rightForms, priceTypes, royPriceTypes, royAccountIntervals, distTypes, agrEvents, advTerms, advTypes] =
      await Promise.all([
        rightFormIds.length    ? prisma.$queryRawUnsafe<any[]>(`SELECT "RightFormID" as id, "RightFormAbbPL" as "abbPL", "RightFormDesc" as "descEn", "RightFormPL" as "descPL" FROM "dictRightsForm" WHERE "RightFormID" = ANY(ARRAY[${rightFormIds.join(',')}])`) : Promise.resolve([]),
        priceTypeIds.length    ? prisma.$queryRawUnsafe<any[]>(`SELECT "PriceTypeID" as id, "PriceTypeDesc" as "descEn", "PriceTypePL" as "descPL" FROM "dictPriceType" WHERE "PriceTypeID" = ANY(ARRAY[${priceTypeIds.join(',')}])`) : Promise.resolve([]),
        royPriceTypeIds.length ? prisma.$queryRawUnsafe<any[]>(`SELECT "RoyPriceTypeID" as id, "RoyPriceTypeDesc" as "descEn", "RoyPriceTypePL" as "descPL" FROM "dictRoyPriceType" WHERE "RoyPriceTypeID" = ANY(ARRAY[${royPriceTypeIds.join(',')}])`) : Promise.resolve([]),
        royAccountIds.length   ? prisma.$queryRawUnsafe<any[]>(`SELECT "RoyAccountIntervalID" as id, "IntervalAbb" as abb, "RoyAccountIntervalDesc" as "descEn" FROM "dictRoyAccountInterval" WHERE "RoyAccountIntervalID" = ANY(ARRAY[${royAccountIds.join(',')}])`) : Promise.resolve([]),
        distIds.length         ? prisma.$queryRawUnsafe<any[]>(`SELECT "DistID" as id, "DistDesc" as "descEn" FROM "dictDistributionType" WHERE "DistID" = ANY(ARRAY[${distIds.join(',')}])`) : Promise.resolve([]),
        eventCodes.length      ? prisma.$queryRawUnsafe<any[]>(`SELECT "AgrEventCode" as code, "AgrEventDesc" as "descEn" FROM "dictAgrEvents" WHERE "AgrEventCode" = ANY(ARRAY[${eventCodes.join(',')}])`) : Promise.resolve([]),
        advTermIds.length      ? prisma.$queryRawUnsafe<any[]>(`SELECT "AdvTermId" as id, "AdvTermDesc" as "descEn", "AdvTermPL" as "descPL" FROM "dictAdvTerm" WHERE "AdvTermId" = ANY(ARRAY[${advTermIds.join(',')}])`) : Promise.resolve([]),
        advTypeIds.length      ? prisma.$queryRawUnsafe<any[]>(`SELECT "AdvTypeId" as id, "AdvTypeDesc" as "descEn", "AdvTypeDescPL" as "descPL" FROM "dictAdvType" WHERE "AdvTypeId" = ANY(ARRAY[${advTypeIds.join(',')}])`) : Promise.resolve([]),
      ])

    // Pomocnicze mapy
    const rfMap   = Object.fromEntries(rightForms.map((r: any) => [r.id, r]))
    const ptMap   = Object.fromEntries(priceTypes.map((r: any) => [r.id, r]))
    const rptMap  = Object.fromEntries(royPriceTypes.map((r: any) => [r.id, r]))
    const raiMap  = Object.fromEntries(royAccountIntervals.map((r: any) => [r.id, r]))
    const dtMap   = Object.fromEntries(distTypes.map((r: any) => [r.id, r]))
    const evMap   = Object.fromEntries(agrEvents.map((r: any) => [r.code, r]))
    const atermMap = Object.fromEntries(advTerms.map((r: any) => [r.id, r]))
    const atypeMap = Object.fromEntries(advTypes.map((r: any) => [r.id, r]))

    return NextResponse.json({
      id:                  agreement.id,
      sourceId:            agreement.sourceId,
      publisherId:         agreement.publisherId,
      publisher:           agreement.Publisher,
      clientId:            agreement.clientId,
      client:              agreement.Client,
      titleId:             agreement.titleId,
      title:               agreement.Title,
      agrDate:             agreement.agrDate.toISOString(),
      validYY:             agreement.validYY,
      pubTermMM:           agreement.pubTermMM,
      maxCopies:           agreement.maxCopies,
      minCopies:           agreement.minCopies,
      copiesToOwner:       agreement.copiesToOwner,
      copiesToGraal:       agreement.copiesToGraal,
      currencyCode:        agreement.currencyCode?.trim() ?? null,
      languageCode:        agreement.languageCode?.trim() ?? null,
      countryId:           agreement.countryId,
      commission:          agreement.commission          ? Number(agreement.commission)          : null,
      commissionMaterials: agreement.commissionMaterials ? Number(agreement.commissionMaterials) : null,
      estimatedCopyPrice:  agreement.estimatedCopyPrice  ? Number(agreement.estimatedCopyPrice)  : null,
      graalShare:          agreement.graalShare          ? Number(agreement.graalShare)          : null,
      graalRepresent:      agreement.graalRepresent,
      clientReference:     agreement.clientReference,
      localTitle:          agreement.localTitle,
      localIsbn:           agreement.localIsbn,
      localPubDate:        agreement.localPubDate?.toISOString() ?? null,
      agrDoc:              agreement.agrDoc,
      status:              agreement.status,
      remarks:             agreement.remarks,
      agentId:             agreement.agentId,
      dateMod:             agreement.dateMod?.toISOString() ?? null,
      userMod:             agreement.userMod?.trim() ?? null,
      createdAt:           agreement.createdAt.toISOString(),
      updatedAt:           agreement.updatedAt.toISOString(),
      lastEventCode:       agreement.Events.length > 0
        ? [...agreement.Events].sort((a, b) => {
            const d = (b.eventDate?.getTime() ?? 0) - (a.eventDate?.getTime() ?? 0)
            return d !== 0 ? d : b.eventCode - a.eventCode
          })[0].eventCode
        : null,

      rights: agreement.Rights.map(r => ({
        id:                   r.id,
        sourceId:             r.sourceId,
        rightFormId:          r.rightFormId,
        rightForm:            r.rightFormId ? rfMap[r.rightFormId] ?? null : null,
        priceTypeId:          r.priceTypeId,
        priceType:            r.priceTypeId ? ptMap[r.priceTypeId] ?? null : null,
        royPriceTypeId:       r.royPriceTypeId,
        royPriceType:         r.royPriceTypeId ? rptMap[r.royPriceTypeId] ?? null : null,
        royAccountIntervalId: r.royAccountIntervalId,
        royAccountInterval:   r.royAccountIntervalId ? raiMap[r.royAccountIntervalId] ?? null : null,
        distributionTypeId:   r.distributionTypeId,
        distributionType:     r.distributionTypeId ? dtMap[r.distributionTypeId] ?? null : null,
        royRates: r.RoyRates.map(rr => ({
          step:      rr.step,
          copiesMax: rr.copiesMax,
          rate:      Number(rr.rate),
        })),
      })),

      events: agreement.Events.map(e => ({
        id:        e.id,
        sourceId:  e.sourceId,
        eventCode: e.eventCode,
        eventDesc: evMap[e.eventCode]?.descEn?.trim() ?? null,
        eventDate: e.eventDate?.toISOString() ?? null,
        endDate:   e.endDate?.toISOString() ?? null,
        noOfCopies: e.noOfCopies,
      })),

      advances: agreement.Advances.map(a => ({
        id:         a.id,
        sourceId:   a.sourceId,
        instalment: a.instalment,
        advTermId:  a.advTermId,
        advTerm:    a.advTermId ? atermMap[a.advTermId] ?? null : null,
        advTypeId:  a.advTypeId,
        advType:    a.advTypeId ? atypeMap[a.advTypeId] ?? null : null,
        amount:     Number(a.amount),
        termDate:   a.termDate?.toISOString() ?? null,
        royaltyId:  a.royaltyId,
      })),
    })
  } catch (err: any) {
    console.error('GET /api/agreements/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body = await req.json()
    const rights:   any[] | undefined = Array.isArray(body.rights)   ? body.rights   : undefined
    const advances: any[] | undefined = Array.isArray(body.advances) ? body.advances : undefined

    await prisma.$transaction(async tx => {
      await tx.agreement.update({
        where: { id },
        data: {
          publisherId:         body.publisherId         != null ? Number(body.publisherId)         : null,
          clientId:            body.clientId            != null ? Number(body.clientId)            : null,
          titleId:             body.titleId             != null ? Number(body.titleId)             : null,
          agrDate:             body.agrDate             ? new Date(body.agrDate)                   : undefined,
          validYY:             body.validYY             != null ? Number(body.validYY)             : null,
          pubTermMM:           body.pubTermMM           != null ? Number(body.pubTermMM)           : null,
          maxCopies:           body.maxCopies           != null ? Number(body.maxCopies)           : null,
          minCopies:           body.minCopies           != null ? Number(body.minCopies)           : null,
          currencyCode:        body.currencyCode        || null,
          languageCode:        body.languageCode        || null,
          commission:          body.commission          != null ? Number(body.commission)          : null,
          commissionMaterials: body.commissionMaterials != null ? Number(body.commissionMaterials) : null,
          estimatedCopyPrice:  body.estimatedCopyPrice  != null ? Number(body.estimatedCopyPrice)  : null,
          graalShare:          body.graalShare          != null ? Number(body.graalShare)          : null,
          graalRepresent:      body.graalRepresent      ?? undefined,
          clientReference:     body.clientReference     || null,
          localTitle:          body.localTitle          || null,
          localIsbn:           body.localIsbn           || null,
          localPubDate:        body.localPubDate        ? new Date(body.localPubDate) : null,
          agrDoc:              body.agrDoc              || null,
          remarks:             body.remarks             || null,
          updatedAt:           new Date(),
        },
      })

      if (rights !== undefined) {
        // cascade deletes RoyRates
        await tx.agreementRight.deleteMany({ where: { agreementId: id } })
        for (const r of rights) {
          const right = await tx.agreementRight.create({
            data: {
              agreementId:          id,
              rightFormId:          r.rightFormId          ? Number(r.rightFormId)          : null,
              priceTypeId:          r.priceTypeId          ? Number(r.priceTypeId)          : null,
              royPriceTypeId:       r.royPriceTypeId       ? Number(r.royPriceTypeId)       : null,
              royAccountIntervalId: r.royAccountIntervalId ? Number(r.royAccountIntervalId) : null,
              distributionTypeId:   r.distributionTypeId   ? Number(r.distributionTypeId)   : null,
            },
          })
          const rates: any[] = Array.isArray(r.royRates) ? r.royRates : []
          for (let i = 0; i < rates.length; i++) {
            const rr = rates[i]
            if (rr.rate === '' || rr.rate == null) continue
            await tx.agreementRoyRate.create({
              data: {
                agreementId: id,
                rightId:     right.id,
                step:        i + 1,
                copiesMax:   rr.copiesMax ? Number(rr.copiesMax) : null,
                rate:        Number(rr.rate),
              },
            })
          }
        }
      }

      if (advances !== undefined) {
        await tx.agreementAdvance.deleteMany({ where: { agreementId: id } })
        for (const a of advances) {
          if (a.amount === '' || a.amount == null) continue
          await tx.agreementAdvance.create({
            data: {
              agreementId: id,
              instalment:  a.instalment  ? Number(a.instalment)  : null,
              advTermId:   a.advTermId   ? Number(a.advTermId)   : null,
              advTypeId:   a.advTypeId   ? Number(a.advTypeId)   : null,
              amount:      Number(a.amount),
              termDate:    a.termDate    ? new Date(a.termDate)  : null,
            },
          })
        }
      }
    })

    return NextResponse.json({ id })
  } catch (err: any) {
    console.error('PUT /api/agreements/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireModuleAccess(req, 'finances')
  if (auth.error) return auth.error

  try {
    const id = Number(params.id)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    await prisma.agreement.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('DELETE /api/agreements/[id] error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
