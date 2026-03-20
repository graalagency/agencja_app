import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClientContactCountOrderByAggregateInputObjectSchema as ClientContactCountOrderByAggregateInputObjectSchema } from './ClientContactCountOrderByAggregateInput.schema';
import { ClientContactAvgOrderByAggregateInputObjectSchema as ClientContactAvgOrderByAggregateInputObjectSchema } from './ClientContactAvgOrderByAggregateInput.schema';
import { ClientContactMaxOrderByAggregateInputObjectSchema as ClientContactMaxOrderByAggregateInputObjectSchema } from './ClientContactMaxOrderByAggregateInput.schema';
import { ClientContactMinOrderByAggregateInputObjectSchema as ClientContactMinOrderByAggregateInputObjectSchema } from './ClientContactMinOrderByAggregateInput.schema';
import { ClientContactSumOrderByAggregateInputObjectSchema as ClientContactSumOrderByAggregateInputObjectSchema } from './ClientContactSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ClientContactCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClientContactAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClientContactMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClientContactMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClientContactSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClientContactOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClientContactOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactOrderByWithAggregationInput>;
export const ClientContactOrderByWithAggregationInputObjectZodSchema = makeSchema();
