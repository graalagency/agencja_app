import * as z from 'zod';
export const LanguageDictionaryDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  code: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));