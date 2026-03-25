import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  agreementId: z.literal(true).optional(),
  rightId: z.literal(true).optional(),
  step: z.literal(true).optional(),
  copiesMax: z.literal(true).optional(),
  rate: z.literal(true).optional()
}).strict();
export const AgreementRoyRateMaxAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateMaxAggregateInputType>;
export const AgreementRoyRateMaxAggregateInputObjectZodSchema = makeSchema();
