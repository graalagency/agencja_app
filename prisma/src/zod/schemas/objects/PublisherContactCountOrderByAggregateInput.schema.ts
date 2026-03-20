import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const PublisherContactCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCountOrderByAggregateInput>;
export const PublisherContactCountOrderByAggregateInputObjectZodSchema = makeSchema();
