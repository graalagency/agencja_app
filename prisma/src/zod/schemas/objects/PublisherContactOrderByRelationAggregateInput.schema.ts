import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PublisherContactOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactOrderByRelationAggregateInput>;
export const PublisherContactOrderByRelationAggregateInputObjectZodSchema = makeSchema();
