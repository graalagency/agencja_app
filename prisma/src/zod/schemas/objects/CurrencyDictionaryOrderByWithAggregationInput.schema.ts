import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CurrencyDictionaryCountOrderByAggregateInputObjectSchema as CurrencyDictionaryCountOrderByAggregateInputObjectSchema } from './CurrencyDictionaryCountOrderByAggregateInput.schema';
import { CurrencyDictionaryAvgOrderByAggregateInputObjectSchema as CurrencyDictionaryAvgOrderByAggregateInputObjectSchema } from './CurrencyDictionaryAvgOrderByAggregateInput.schema';
import { CurrencyDictionaryMaxOrderByAggregateInputObjectSchema as CurrencyDictionaryMaxOrderByAggregateInputObjectSchema } from './CurrencyDictionaryMaxOrderByAggregateInput.schema';
import { CurrencyDictionaryMinOrderByAggregateInputObjectSchema as CurrencyDictionaryMinOrderByAggregateInputObjectSchema } from './CurrencyDictionaryMinOrderByAggregateInput.schema';
import { CurrencyDictionarySumOrderByAggregateInputObjectSchema as CurrencyDictionarySumOrderByAggregateInputObjectSchema } from './CurrencyDictionarySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CurrencyDictionaryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CurrencyDictionaryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CurrencyDictionaryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CurrencyDictionaryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CurrencyDictionarySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CurrencyDictionaryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryOrderByWithAggregationInput>;
export const CurrencyDictionaryOrderByWithAggregationInputObjectZodSchema = makeSchema();
