import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  titleId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  order: SortOrderSchema.optional()
}).strict();
export const TitleAuthorAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorAvgOrderByAggregateInput>;
export const TitleAuthorAvgOrderByAggregateInputObjectZodSchema = makeSchema();
