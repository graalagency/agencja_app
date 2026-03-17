import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DictCurrencyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrencyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyAvgOrderByAggregateInput>;
export const DictCurrencyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
