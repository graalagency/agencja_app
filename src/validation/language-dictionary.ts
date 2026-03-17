import { z } from 'zod'

export const DictLanguageCreateSchema = z.object({
  description: z.string().min(1, 'Opis jest wymagany'),
  code: z.string().min(1, 'Skrot jest wymagany').max(10, 'Skrot moze miec maksymalnie 10 znakow'),
})

export const DictLanguageUpdateSchema = DictLanguageCreateSchema.partial().extend({
  description: z.string().min(1, 'Opis jest wymagany').optional(),
  code: z.string().min(1, 'Skrot jest wymagany').max(10, 'Skrot moze miec maksymalnie 10 znakow').optional(),
})

export type DictLanguageCreateInput = z.infer<typeof DictLanguageCreateSchema>
export type DictLanguageUpdateInput = z.infer<typeof DictLanguageUpdateSchema>
