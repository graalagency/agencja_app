import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LanguageDictionaryCountOrderByAggregateInputObjectSchema as LanguageDictionaryCountOrderByAggregateInputObjectSchema } from './LanguageDictionaryCountOrderByAggregateInput.schema';
import { LanguageDictionaryAvgOrderByAggregateInputObjectSchema as LanguageDictionaryAvgOrderByAggregateInputObjectSchema } from './LanguageDictionaryAvgOrderByAggregateInput.schema';
import { LanguageDictionaryMaxOrderByAggregateInputObjectSchema as LanguageDictionaryMaxOrderByAggregateInputObjectSchema } from './LanguageDictionaryMaxOrderByAggregateInput.schema';
import { LanguageDictionaryMinOrderByAggregateInputObjectSchema as LanguageDictionaryMinOrderByAggregateInputObjectSchema } from './LanguageDictionaryMinOrderByAggregateInput.schema';
import { LanguageDictionarySumOrderByAggregateInputObjectSchema as LanguageDictionarySumOrderByAggregateInputObjectSchema } from './LanguageDictionarySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => LanguageDictionaryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LanguageDictionaryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LanguageDictionaryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LanguageDictionaryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LanguageDictionarySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LanguageDictionaryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryOrderByWithAggregationInput>;
export const LanguageDictionaryOrderByWithAggregationInputObjectZodSchema = makeSchema();
