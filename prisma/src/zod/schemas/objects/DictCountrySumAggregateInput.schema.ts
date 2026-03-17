import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tax: z.literal(true).optional()
}).strict();
export const DictCountrySumAggregateInputObjectSchema: z.ZodType<Prisma.DictCountrySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountrySumAggregateInputType>;
export const DictCountrySumAggregateInputObjectZodSchema = makeSchema();
