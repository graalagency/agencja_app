import * as z from 'zod';
export const AgreementAdvanceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  agreementId: z.number().int(),
  instalment: z.number().int().optional(),
  advTermId: z.number().int().optional(),
  advTypeId: z.number().int().optional(),
  amount: z.number(),
  termDate: z.date().optional(),
  royaltyId: z.number().int().optional(),
  createdAt: z.date(),
  Agreement: z.unknown()
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