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
export const TitleAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TitleAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAvgOrderByAggregateInput>;
export const TitleAvgOrderByAggregateInputObjectZodSchema = makeSchema();
