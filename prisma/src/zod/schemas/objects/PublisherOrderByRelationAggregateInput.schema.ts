import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PublisherOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PublisherOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherOrderByRelationAggregateInput>;
export const PublisherOrderByRelationAggregateInputObjectZodSchema = makeSchema();
