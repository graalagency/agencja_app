import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  titleId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  order: SortOrderSchema.optional()
}).strict();
export const TitleAuthorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorSumOrderByAggregateInput>;
export const TitleAuthorSumOrderByAggregateInputObjectZodSchema = makeSchema();
