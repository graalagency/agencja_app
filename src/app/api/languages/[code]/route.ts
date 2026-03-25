import { NextRequest, NextResponse } from 'next/server'
import { requireModuleAccess } from '../../../../lib/api-permissions'
import fs from 'fs'
import path from 'path'
import { z } from 'zod'
import { translateZodErrors } from '../../../../lib/zod-error-handler'

const MESSAGES_DIR = path.join(process.cwd(), 'messages')

const UpdateTranslationsSchema = z.object({
  translations: z.record(z.any()).strict(),
})

// GET - pobierz tłumaczenia dla konkretnego języka
export async function GET(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  const auth = await requireModuleAccess(req, 'languages')
  if (auth.error) return auth.error

  try {
    const code = params.code
    const filePath = path.join(MESSAGES_DIR, `${code}.json`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Language not found' }, { status: 404 })
    }

    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    return NextResponse.json({ translations: content })
  } catch (error) {
    console.error('Error loading translations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT - zapisz tłumaczenia dla konkretnego języka
export async function PUT(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  const auth = await requireModuleAccess(req, 'languages')
  if (auth.error) return auth.error

  try {
    const body = await req.json()
    const validationResult = UpdateTranslationsSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: translateZodErrors(validationResult.error.issues, 'pl') },
        { status: 400 }
      )
    }

    const code = params.code
    const { translations } = validationResult.data
    const filePath = path.join(MESSAGES_DIR, `${code}.json`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Language not found' }, { status: 404 })
    }

    // Zapisz z ładnym formatowaniem
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving translations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
