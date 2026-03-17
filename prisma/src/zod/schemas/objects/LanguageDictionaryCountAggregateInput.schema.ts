import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LanguageDictionaryCountAggregateInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryCountAggregateInputType>;
export const LanguageDictionaryCountAggregateInputObjectZodSchema = makeSchema();
