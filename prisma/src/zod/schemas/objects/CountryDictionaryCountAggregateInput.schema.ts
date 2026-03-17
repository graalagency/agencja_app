import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  code: z.literal(true).optional(),
  tax: z.literal(true).optional(),
  eu: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CountryDictionaryCountAggregateInputObjectSchema: z.ZodType<Prisma.CountryDictionaryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionaryCountAggregateInputType>;
export const CountryDictionaryCountAggregateInputObjectZodSchema = makeSchema();
