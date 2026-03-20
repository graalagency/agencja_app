import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TitleAuthorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorOrderByRelationAggregateInput>;
export const TitleAuthorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
