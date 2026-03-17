import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CurrencyDictionarySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionarySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionarySumOrderByAggregateInput>;
export const CurrencyDictionarySumOrderByAggregateInputObjectZodSchema = makeSchema();
