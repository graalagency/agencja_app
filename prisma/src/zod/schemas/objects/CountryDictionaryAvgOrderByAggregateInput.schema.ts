import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional()
}).strict();
export const CountryDictionaryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CountryDictionaryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionaryAvgOrderByAggregateInput>;
export const CountryDictionaryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
