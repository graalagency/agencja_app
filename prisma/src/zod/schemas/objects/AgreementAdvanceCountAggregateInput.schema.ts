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
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AgreementAdvanceCountAggregateInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceCountAggregateInputType>;
export const AgreementAdvanceCountAggregateInputObjectZodSchema = makeSchema();
