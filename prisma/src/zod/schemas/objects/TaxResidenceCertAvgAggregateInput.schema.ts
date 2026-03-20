import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional()
}).strict();
export const TaxResidenceCertAvgAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertAvgAggregateInputType>;
export const TaxResidenceCertAvgAggregateInputObjectZodSchema = makeSchema();
