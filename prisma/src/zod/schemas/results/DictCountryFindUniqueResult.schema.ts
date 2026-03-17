import * as z from 'zod';
export const DictCountryFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  description: z.string(),
  code: z.string(),
  tax: z.number(),
  eu: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));