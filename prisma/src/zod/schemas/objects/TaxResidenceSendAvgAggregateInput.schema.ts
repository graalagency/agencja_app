import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  certId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional()
}).strict();
export const TaxResidenceSendAvgAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendAvgAggregateInputType>;
export const TaxResidenceSendAvgAggregateInputObjectZodSchema = makeSchema();
