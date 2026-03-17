import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CurrencyDictionaryMinAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryMinAggregateInputType>;
export const CurrencyDictionaryMinAggregateInputObjectZodSchema = makeSchema();
