import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PublisherCountOrderByAggregateInputObjectSchema as PublisherCountOrderByAggregateInputObjectSchema } from './PublisherCountOrderByAggregateInput.schema';
import { PublisherAvgOrderByAggregateInputObjectSchema as PublisherAvgOrderByAggregateInputObjectSchema } from './PublisherAvgOrderByAggregateInput.schema';
import { PublisherMaxOrderByAggregateInputObjectSchema as PublisherMaxOrderByAggregateInputObjectSchema } from './PublisherMaxOrderByAggregateInput.schema';
import { PublisherMinOrderByAggregateInputObjectSchema as PublisherMinOrderByAggregateInputObjectSchema } from './PublisherMinOrderByAggregateInput.schema';
import { PublisherSumOrderByAggregateInputObjectSchema as PublisherSumOrderByAggregateInputObjectSchema } from './PublisherSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankAccount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  legalForm: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postalCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  regon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PublisherCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PublisherAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PublisherMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PublisherMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PublisherSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PublisherOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PublisherOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherOrderByWithAggregationInput>;
export const PublisherOrderByWithAggregationInputObjectZodSchema = makeSchema();
