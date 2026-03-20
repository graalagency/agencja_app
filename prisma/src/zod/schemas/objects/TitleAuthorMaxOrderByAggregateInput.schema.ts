import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  titleId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  isMain: SortOrderSchema.optional(),
  order: SortOrderSchema.optional()
}).strict();
export const TitleAuthorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorMaxOrderByAggregateInput>;
export const TitleAuthorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
