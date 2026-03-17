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
export const DictCountryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictCountryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryCountOrderByAggregateInput>;
export const DictCountryCountOrderByAggregateInputObjectZodSchema = makeSchema();
