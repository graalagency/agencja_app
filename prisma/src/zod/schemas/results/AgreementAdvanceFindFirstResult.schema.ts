import * as z from 'zod';
export const AgreementAdvanceFindFirstResultSchema = z.nullable(z.object({
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
}));