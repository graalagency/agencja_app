import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TitleCountOrderByAggregateInputObjectSchema as TitleCountOrderByAggregateInputObjectSchema } from './TitleCountOrderByAggregateInput.schema';
import { TitleAvgOrderByAggregateInputObjectSchema as TitleAvgOrderByAggregateInputObjectSchema } from './TitleAvgOrderByAggregateInput.schema';
import { TitleMaxOrderByAggregateInputObjectSchema as TitleMaxOrderByAggregateInputObjectSchema } from './TitleMaxOrderByAggregateInput.schema';
import { TitleMinOrderByAggregateInputObjectSchema as TitleMinOrderByAggregateInputObjectSchema } from './TitleMinOrderByAggregateInput.schema';
import { TitleSumOrderByAggregateInputObjectSchema as TitleSumOrderByAggregateInputObjectSchema } from './TitleSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: SortOrderSchema.optional(),
  isbn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  languageCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  classCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  edition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pages: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copyrightYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copyrightOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  keywords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  volume: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  totalVolumes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isHit: SortOrderSchema.optional(),
  isCollection: SortOrderSchema.optional(),
  isCD: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateOfReceipt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TitleCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TitleAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TitleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TitleMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TitleSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TitleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TitleOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleOrderByWithAggregationInput>;
export const TitleOrderByWithAggregationInputObjectZodSchema = makeSchema();
