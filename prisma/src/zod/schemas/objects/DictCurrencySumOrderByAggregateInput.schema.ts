import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DictCurrencySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrencySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencySumOrderByAggregateInput>;
export const DictCurrencySumOrderByAggregateInputObjectZodSchema = makeSchema();
