import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional()
}).strict();
export const PublisherContactSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactSumOrderByAggregateInput>;
export const PublisherContactSumOrderByAggregateInputObjectZodSchema = makeSchema();
