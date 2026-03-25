import * as z from 'zod';
export const AgreementRoyRateUpsertResultSchema = z.object({
  id: z.number().int(),
  agreementId: z.number().int(),
  rightId: z.number().int(),
  step: z.number().int(),
  copiesMax: z.number().int().optional(),
  rate: z.number(),
  Agreement: z.unknown(),
  Right: z.unknown()
});