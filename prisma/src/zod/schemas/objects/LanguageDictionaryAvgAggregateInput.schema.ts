import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LanguageDictionaryAvgAggregateInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryAvgAggregateInputType>;
export const LanguageDictionaryAvgAggregateInputObjectZodSchema = makeSchema();
