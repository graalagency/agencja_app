import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TitleOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TitleOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleOrderByRelationAggregateInput>;
export const TitleOrderByRelationAggregateInputObjectZodSchema = makeSchema();
