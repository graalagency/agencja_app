import * as z from 'zod';
export const AgreementRoyRateFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  agreementId: z.number().int(),
  rightId: z.number().int(),
  step: z.number().int(),
  copiesMax: z.number().int().optional(),
  rate: z.number(),
  Agreement: z.unknown(),
  Right: z.unknown()
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