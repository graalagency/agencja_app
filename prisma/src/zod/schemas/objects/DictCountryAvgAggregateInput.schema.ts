import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tax: z.literal(true).optional()
}).strict();
export const DictCountryAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCountryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryAvgAggregateInputType>;
export const DictCountryAvgAggregateInputObjectZodSchema = makeSchema();
