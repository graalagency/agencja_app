import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LanguageDictionarySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LanguageDictionarySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionarySumOrderByAggregateInput>;
export const LanguageDictionarySumOrderByAggregateInputObjectZodSchema = makeSchema();
