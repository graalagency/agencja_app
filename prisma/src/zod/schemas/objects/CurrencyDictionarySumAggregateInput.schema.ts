import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CurrencyDictionarySumAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionarySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionarySumAggregateInputType>;
export const CurrencyDictionarySumAggregateInputObjectZodSchema = makeSchema();
