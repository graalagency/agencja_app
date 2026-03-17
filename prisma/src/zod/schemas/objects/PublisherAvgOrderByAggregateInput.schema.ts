import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const PublisherAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublisherAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherAvgOrderByAggregateInput>;
export const PublisherAvgOrderByAggregateInputObjectZodSchema = makeSchema();
