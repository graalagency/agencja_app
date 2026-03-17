import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DictCurrencyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DictCurrencyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyOrderByWithRelationInput>;
export const DictCurrencyOrderByWithRelationInputObjectZodSchema = makeSchema();
