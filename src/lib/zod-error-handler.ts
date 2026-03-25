import { ZodError } from 'zod'

type MessageLoader = (key: string, defaults?: Record<string, string>) => string

/**
 * Tłumaczy Zod błędy walidacji używając i18n messages
 *
 * Użycie w endpoincie:
 *   const errors = translateZodErrors(zodError.issues)
 *   return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 })
 */
export function translateZodErrors(
  issues: ZodError['issues'],
  locale: string = 'pl'
): Array<{
  field: string
  message: string
}> {
  // Statyczne tłumaczenia dla najbardziej typowych błędów
  const messageMap: Record<string, Record<string, string>> = {
    pl: {
      'required': 'jest wymagane',
      'invalid_type': 'ma nieprawidłowy typ',
      'invalid_email': 'musi być prawidłowym adresem email',
      'too_small': 'jest za krótkie',
      'too_big': 'jest za długie',
      'invalid_date': 'musi być prawidłową datą',
      'invalid_literal': 'musi być równe {expected}',
      'unrecognized_keys': 'zawiera nieznane klucze: {keys}',
    },
    en: {
      'required': 'is required',
      'invalid_type': 'has invalid type',
      'invalid_email': 'must be a valid email address',
      'too_small': 'is too short',
      'too_big': 'is too long',
      'invalid_date': 'must be a valid date',
      'invalid_literal': 'must equal {expected}',
      'unrecognized_keys': 'has unknown keys: {keys}',
    },
  }

  const messages = messageMap[locale] || messageMap['en']

  return issues.map(issue => {
    const field = issue.path.join('.')
    let message = messages[issue.code] || issue.message

    // Zastępowanie zmiennych w wiadomości
    if (issue.code === 'too_small' && issue.type === 'string' && 'minimum' in issue) {
      const minLength = issue.minimum
      message = locale === 'pl'
        ? `musi mieć co najmniej ${minLength} znaków`
        : `must be at least ${minLength} characters`
    }

    if (issue.code === 'invalid_literal' && 'expected' in issue) {
      message = message.replace('{expected}', String(issue.expected))
    }

    if (issue.code === 'unrecognized_keys' && 'keys' in issue) {
      const keys = (issue as any).keys.join(', ')
      message = message.replace('{keys}', keys)
    }

    return {
      field: field || 'unknown',
      message,
    }
  })
}
