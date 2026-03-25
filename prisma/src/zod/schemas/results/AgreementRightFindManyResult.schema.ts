import * as z from 'zod';
export const AgreementRightFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  agreementId: z.number().int(),
  rightFormId: z.number().int().optional(),
  priceTypeId: z.number().int().optional(),
  royPriceTypeId: z.number().int().optional(),
  royAccountIntervalId: z.number().int().optional(),
  distributionTypeId: z.number().int().optional(),
  Agreement: z.unknown(),
  RoyRates: z.array(z.unknown())
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