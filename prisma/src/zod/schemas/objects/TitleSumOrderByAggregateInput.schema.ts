import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  edition: SortOrderSchema.optional(),
  pages: SortOrderSchema.optional(),
  volume: SortOrderSchema.optional(),
  totalVolumes: SortOrderSchema.optional()
}).strict();
export const TitleSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TitleSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleSumOrderByAggregateInput>;
export const TitleSumOrderByAggregateInputObjectZodSchema = makeSchema();
