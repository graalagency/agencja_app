import * as z from 'zod';
export const AgreementRightUpdateResultSchema = z.nullable(z.object({
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
}));