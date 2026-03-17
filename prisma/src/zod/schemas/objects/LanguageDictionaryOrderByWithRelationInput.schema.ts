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
export const LanguageDictionaryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryOrderByWithRelationInput>;
export const LanguageDictionaryOrderByWithRelationInputObjectZodSchema = makeSchema();
