import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional()
}).strict();
export const PublisherContactAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactAvgOrderByAggregateInput>;
export const PublisherContactAvgOrderByAggregateInputObjectZodSchema = makeSchema();
