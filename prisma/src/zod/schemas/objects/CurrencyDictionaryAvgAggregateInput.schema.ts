import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CurrencyDictionaryAvgAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryAvgAggregateInputType>;
export const CurrencyDictionaryAvgAggregateInputObjectZodSchema = makeSchema();
