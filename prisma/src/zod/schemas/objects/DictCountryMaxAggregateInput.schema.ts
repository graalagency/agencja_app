import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  code: z.literal(true).optional(),
  tax: z.literal(true).optional(),
  eu: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DictCountryMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictCountryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryMaxAggregateInputType>;
export const DictCountryMaxAggregateInputObjectZodSchema = makeSchema();
