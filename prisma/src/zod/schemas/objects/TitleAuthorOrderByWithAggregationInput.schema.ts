import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TitleAuthorCountOrderByAggregateInputObjectSchema as TitleAuthorCountOrderByAggregateInputObjectSchema } from './TitleAuthorCountOrderByAggregateInput.schema';
import { TitleAuthorAvgOrderByAggregateInputObjectSchema as TitleAuthorAvgOrderByAggregateInputObjectSchema } from './TitleAuthorAvgOrderByAggregateInput.schema';
import { TitleAuthorMaxOrderByAggregateInputObjectSchema as TitleAuthorMaxOrderByAggregateInputObjectSchema } from './TitleAuthorMaxOrderByAggregateInput.schema';
import { TitleAuthorMinOrderByAggregateInputObjectSchema as TitleAuthorMinOrderByAggregateInputObjectSchema } from './TitleAuthorMinOrderByAggregateInput.schema';
import { TitleAuthorSumOrderByAggregateInputObjectSchema as TitleAuthorSumOrderByAggregateInputObjectSchema } from './TitleAuthorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  titleId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  isMain: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  _count: z.lazy(() => TitleAuthorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TitleAuthorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TitleAuthorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TitleAuthorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TitleAuthorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TitleAuthorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TitleAuthorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorOrderByWithAggregationInput>;
export const TitleAuthorOrderByWithAggregationInputObjectZodSchema = makeSchema();
