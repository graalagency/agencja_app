import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional()
}).strict();
export const DictCountryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictCountryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryAvgOrderByAggregateInput>;
export const DictCountryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
