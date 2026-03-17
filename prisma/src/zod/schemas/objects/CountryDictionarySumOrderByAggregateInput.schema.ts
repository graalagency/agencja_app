import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional()
}).strict();
export const CountryDictionarySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CountryDictionarySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionarySumOrderByAggregateInput>;
export const CountryDictionarySumOrderByAggregateInputObjectZodSchema = makeSchema();
