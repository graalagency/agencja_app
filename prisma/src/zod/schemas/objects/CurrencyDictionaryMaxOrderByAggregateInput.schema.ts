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
export const CurrencyDictionaryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryMaxOrderByAggregateInput>;
export const CurrencyDictionaryMaxOrderByAggregateInputObjectZodSchema = makeSchema();
