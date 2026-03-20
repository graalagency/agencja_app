import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PublisherContactCountOrderByAggregateInputObjectSchema as PublisherContactCountOrderByAggregateInputObjectSchema } from './PublisherContactCountOrderByAggregateInput.schema';
import { PublisherContactAvgOrderByAggregateInputObjectSchema as PublisherContactAvgOrderByAggregateInputObjectSchema } from './PublisherContactAvgOrderByAggregateInput.schema';
import { PublisherContactMaxOrderByAggregateInputObjectSchema as PublisherContactMaxOrderByAggregateInputObjectSchema } from './PublisherContactMaxOrderByAggregateInput.schema';
import { PublisherContactMinOrderByAggregateInputObjectSchema as PublisherContactMinOrderByAggregateInputObjectSchema } from './PublisherContactMinOrderByAggregateInput.schema';
import { PublisherContactSumOrderByAggregateInputObjectSchema as PublisherContactSumOrderByAggregateInputObjectSchema } from './PublisherContactSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PublisherContactCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PublisherContactAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PublisherContactMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PublisherContactMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PublisherContactSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PublisherContactOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PublisherContactOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactOrderByWithAggregationInput>;
export const PublisherContactOrderByWithAggregationInputObjectZodSchema = makeSchema();
