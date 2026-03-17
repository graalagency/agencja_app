import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CurrencyDictionaryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryAvgOrderByAggregateInput>;
export const CurrencyDictionaryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
