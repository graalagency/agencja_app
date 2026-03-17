import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DictLanguageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DictLanguageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguageAvgOrderByAggregateInput>;
export const DictLanguageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
