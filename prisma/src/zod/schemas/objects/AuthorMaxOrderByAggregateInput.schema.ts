import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  suffix: SortOrderSchema.optional(),
  penName: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  personalEmail: SortOrderSchema.optional(),
  workEmail: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const AuthorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorMaxOrderByAggregateInput>;
export const AuthorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
