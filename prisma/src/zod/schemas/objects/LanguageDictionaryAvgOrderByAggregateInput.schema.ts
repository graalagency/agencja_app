import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LanguageDictionaryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryAvgOrderByAggregateInput>;
export const LanguageDictionaryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
