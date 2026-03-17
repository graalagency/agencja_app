import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DictLanguageAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictLanguageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguageAvgAggregateInputType>;
export const DictLanguageAvgAggregateInputObjectZodSchema = makeSchema();
