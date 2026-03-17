import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LanguageDictionarySumAggregateInputObjectSchema: z.ZodType<Prisma.LanguageDictionarySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionarySumAggregateInputType>;
export const LanguageDictionarySumAggregateInputObjectZodSchema = makeSchema();
