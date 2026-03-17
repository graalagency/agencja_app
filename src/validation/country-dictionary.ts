import { z } from 'zod'

export const DictCountryCreateSchema = z.object({
  description: z.string().min(1, 'Opis jest wymagany'),
  code: z.string().min(2, 'Kod musi miec co najmniej 2 znaki').max(10, 'Kod jest za dlugi'),
  tax: z.number().min(0, 'Podatek nie moze byc ujemny').max(100, 'Podatek nie moze byc wiekszy niz 100'),
  eu: z.boolean().default(false),
})

export const DictCountryUpdateSchema = DictCountryCreateSchema.partial().extend({
  description: z.string().min(1, 'Opis jest wymagany').optional(),
  code: z.string().min(2, 'Kod musi miec co najmniej 2 znaki').max(10, 'Kod jest za dlugi').optional(),
  tax: z.number().min(0, 'Podatek nie moze byc ujemny').max(100, 'Podatek nie moze byc wiekszy niz 100').optional(),
})

export type DictCountryCreateInput = z.infer<typeof DictCountryCreateSchema>
export type DictCountryUpdateInput = z.infer<typeof DictCountryUpdateSchema>
