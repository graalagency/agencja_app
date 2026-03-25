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
  termDate: z.literal(true).optional(),
  royaltyId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AgreementAdvanceMaxAggregateInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceMaxAggregateInputType>;
export const AgreementAdvanceMaxAggregateInputObjectZodSchema = makeSchema();
