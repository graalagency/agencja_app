import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CurrencyDictionaryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryMinOrderByAggregateInput>;
export const CurrencyDictionaryMinOrderByAggregateInputObjectZodSchema = makeSchema();
