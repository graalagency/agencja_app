import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET() {
  try {
    const [rightForms, priceTypes, royPriceTypes, royAccountIntervals, distTypes, agrEvents, advTerms, advTypes, currencies, languages] =
      await Promise.all([
        prisma.$queryRawUnsafe<any[]>(`SELECT "RightFormID" as id, "RightFormAbbPL" as "abbPL", "RightFormPL" as "descPL" FROM "dictRightsForm" ORDER BY "RightFormID"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "PriceTypeID" as id, "PriceTypePL" as "descPL" FROM "dictPriceType" ORDER BY "PriceTypeID"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "RoyPriceTypeID" as id, "RoyPriceTypePL" as "descPL" FROM "dictRoyPriceType" ORDER BY "RoyPriceTypeID"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "RoyAccountIntervalID" as id, "IntervalAbb" as abb FROM "dictRoyAccountInterval" ORDER BY "RoyAccountIntervalID"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "DistID" as id, "DistDesc" as "descEn" FROM "dictDistributionType" ORDER BY "DistID"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "AgrEventCode" as code, "AgrEventDesc" as "descEn" FROM "dictAgrEvents" ORDER BY "AgrEventCode"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "AdvTermId" as id, "AdvTermPL" as "descPL" FROM "dictAdvTerm" ORDER BY "AdvTermId"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT "AdvTypeId" as id, "AdvTypeDescPL" as "descPL" FROM "dictAdvType" ORDER BY "AdvTypeId"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT TRIM("CurrID") as code, TRIM("CurrDesc") as desc FROM "dictCurrencies" ORDER BY "CurrID"`),
        prisma.$queryRawUnsafe<any[]>(`SELECT TRIM("LangAbb") as code, TRIM("LangPL") as "descPL" FROM "dictLanguages" ORDER BY "LangPL"`),
      ])

    return NextResponse.json({
      rightForms:           rightForms.map(r => ({ id: Number(r.id), abbPL: r.abbPL?.trim(), descPL: r.descPL?.trim() })),
      priceTypes:           priceTypes.map(r => ({ id: Number(r.id), descPL: r.descPL?.trim() })),
      royPriceTypes:        royPriceTypes.map(r => ({ id: Number(r.id), descPL: r.descPL?.trim() })),
      royAccountIntervals:  royAccountIntervals.map(r => ({ id: Number(r.id), abb: r.abb?.trim() })),
      distTypes:            distTypes.map(r => ({ id: Number(r.id), descEn: r.descEn?.trim() })),
      agrEvents:            agrEvents.map(r => ({ code: Number(r.code), descEn: r.descEn?.trim() })),
      advTerms:             advTerms.map(r => ({ id: Number(r.id), descPL: r.descPL?.trim() })),
      advTypes:             advTypes.map(r => ({ id: Number(r.id), descPL: r.descPL?.trim() })),
      currencies:           currencies.map(r => ({ code: r.code, desc: r.desc })),
      languages:            languages.map(r => ({ code: r.code, descPL: r.descPL })),
    })
  } catch (err: any) {
    console.error('GET /api/agreements/dicts error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
