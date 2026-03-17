import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const PublisherSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublisherSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherSumOrderByAggregateInput>;
export const PublisherSumOrderByAggregateInputObjectZodSchema = makeSchema();
