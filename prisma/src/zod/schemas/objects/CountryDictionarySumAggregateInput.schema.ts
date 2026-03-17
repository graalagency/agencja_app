import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tax: z.literal(true).optional()
}).strict();
export const CountryDictionarySumAggregateInputObjectSchema: z.ZodType<Prisma.CountryDictionarySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionarySumAggregateInputType>;
export const CountryDictionarySumAggregateInputObjectZodSchema = makeSchema();
