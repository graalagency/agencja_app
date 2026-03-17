import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DictCurrencyCountOrderByAggregateInputObjectSchema as DictCurrencyCountOrderByAggregateInputObjectSchema } from './DictCurrencyCountOrderByAggregateInput.schema';
import { DictCurrencyAvgOrderByAggregateInputObjectSchema as DictCurrencyAvgOrderByAggregateInputObjectSchema } from './DictCurrencyAvgOrderByAggregateInput.schema';
import { DictCurrencyMaxOrderByAggregateInputObjectSchema as DictCurrencyMaxOrderByAggregateInputObjectSchema } from './DictCurrencyMaxOrderByAggregateInput.schema';
import { DictCurrencyMinOrderByAggregateInputObjectSchema as DictCurrencyMinOrderByAggregateInputObjectSchema } from './DictCurrencyMinOrderByAggregateInput.schema';
import { DictCurrencySumOrderByAggregateInputObjectSchema as DictCurrencySumOrderByAggregateInputObjectSchema } from './DictCurrencySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DictCurrencyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DictCurrencyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DictCurrencyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DictCurrencyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DictCurrencySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DictCurrencyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DictCurrencyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyOrderByWithAggregationInput>;
export const DictCurrencyOrderByWithAggregationInputObjectZodSchema = makeSchema();
