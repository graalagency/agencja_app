import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional(),
  eu: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DictCountryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictCountryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryMinOrderByAggregateInput>;
export const DictCountryMinOrderByAggregateInputObjectZodSchema = makeSchema();
