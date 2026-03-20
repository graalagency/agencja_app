import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  certId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional()
}).strict();
export const TaxResidenceSendSumAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendSumAggregateInputType>;
export const TaxResidenceSendSumAggregateInputObjectZodSchema = makeSchema();
