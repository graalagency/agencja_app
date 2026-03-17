import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CountryDictionaryCountOrderByAggregateInputObjectSchema as CountryDictionaryCountOrderByAggregateInputObjectSchema } from './CountryDictionaryCountOrderByAggregateInput.schema';
import { CountryDictionaryAvgOrderByAggregateInputObjectSchema as CountryDictionaryAvgOrderByAggregateInputObjectSchema } from './CountryDictionaryAvgOrderByAggregateInput.schema';
import { CountryDictionaryMaxOrderByAggregateInputObjectSchema as CountryDictionaryMaxOrderByAggregateInputObjectSchema } from './CountryDictionaryMaxOrderByAggregateInput.schema';
import { CountryDictionaryMinOrderByAggregateInputObjectSchema as CountryDictionaryMinOrderByAggregateInputObjectSchema } from './CountryDictionaryMinOrderByAggregateInput.schema';
import { CountryDictionarySumOrderByAggregateInputObjectSchema as CountryDictionarySumOrderByAggregateInputObjectSchema } from './CountryDictionarySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional(),
  eu: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CountryDictionaryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CountryDictionaryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CountryDictionaryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CountryDictionaryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CountryDictionarySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CountryDictionaryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CountryDictionaryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionaryOrderByWithAggregationInput>;
export const CountryDictionaryOrderByWithAggregationInputObjectZodSchema = makeSchema();
