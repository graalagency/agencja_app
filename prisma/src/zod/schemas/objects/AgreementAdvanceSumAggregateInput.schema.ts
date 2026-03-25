import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  agreementId: z.literal(true).optional(),
  instalment: z.literal(true).optional(),
  advTermId: z.literal(true).optional(),
  advTypeId: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  royaltyId: z.literal(true).optional()
}).strict();
export const AgreementAdvanceSumAggregateInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceSumAggregateInputType>;
export const AgreementAdvanceSumAggregateInputObjectZodSchema = makeSchema();
