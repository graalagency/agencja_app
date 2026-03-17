import { z } from 'zod'

export const DictCurrencyCreateSchema = z.object({
  description: z.string().min(1, 'Opis jest wymagany'),
  code: z.string().min(3, 'Kod musi miec 3 znaki').max(3, 'Kod musi miec 3 znaki'),
})

export const DictCurrencyUpdateSchema = DictCurrencyCreateSchema.partial().extend({
  description: z.string().min(1, 'Opis jest wymagany').optional(),
  code: z.string().min(3, 'Kod musi miec 3 znaki').max(3, 'Kod musi miec 3 znaki').optional(),
})

export type DictCurrencyCreateInput = z.infer<typeof DictCurrencyCreateSchema>
export type DictCurrencyUpdateInput = z.infer<typeof DictCurrencyUpdateSchema>
