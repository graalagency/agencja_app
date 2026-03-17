import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DictLanguageMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictLanguageMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguageMaxAggregateInputType>;
export const DictLanguageMaxAggregateInputObjectZodSchema = makeSchema();
