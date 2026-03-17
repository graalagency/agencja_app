import * as z from 'zod';
export const CountryDictionaryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  description: z.string(),
  code: z.string(),
  tax: z.number(),
  eu: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});