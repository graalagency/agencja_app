import * as z from 'zod';
export const CurrencyDictionaryUpsertResultSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});