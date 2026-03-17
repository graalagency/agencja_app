import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional()
}).strict();
export const DictCountrySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictCountrySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountrySumOrderByAggregateInput>;
export const DictCountrySumOrderByAggregateInputObjectZodSchema = makeSchema();
