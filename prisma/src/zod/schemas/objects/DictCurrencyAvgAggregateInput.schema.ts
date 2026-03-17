import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DictCurrencyAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrencyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyAvgAggregateInputType>;
export const DictCurrencyAvgAggregateInputObjectZodSchema = makeSchema();
