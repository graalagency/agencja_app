import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DictLanguageCountOrderByAggregateInputObjectSchema as DictLanguageCountOrderByAggregateInputObjectSchema } from './DictLanguageCountOrderByAggregateInput.schema';
import { DictLanguageAvgOrderByAggregateInputObjectSchema as DictLanguageAvgOrderByAggregateInputObjectSchema } from './DictLanguageAvgOrderByAggregateInput.schema';
import { DictLanguageMaxOrderByAggregateInputObjectSchema as DictLanguageMaxOrderByAggregateInputObjectSchema } from './DictLanguageMaxOrderByAggregateInput.schema';
import { DictLanguageMinOrderByAggregateInputObjectSchema as DictLanguageMinOrderByAggregateInputObjectSchema } from './DictLanguageMinOrderByAggregateInput.schema';
import { DictLanguageSumOrderByAggregateInputObjectSchema as DictLanguageSumOrderByAggregateInputObjectSchema } from './DictLanguageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DictLanguageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DictLanguageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DictLanguageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DictLanguageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DictLanguageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DictLanguageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DictLanguageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguageOrderByWithAggregationInput>;
export const DictLanguageOrderByWithAggregationInputObjectZodSchema = makeSchema();
