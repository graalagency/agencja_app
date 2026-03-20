import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional()
}).strict();
export const TaxResidenceCertSumAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertSumAggregateInputType>;
export const TaxResidenceCertSumAggregateInputObjectZodSchema = makeSchema();
