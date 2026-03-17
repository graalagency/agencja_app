import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DictCurrencySumAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrencySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencySumAggregateInputType>;
export const DictCurrencySumAggregateInputObjectZodSchema = makeSchema();
