import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ClientContactMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactMinOrderByAggregateInput>;
export const ClientContactMinOrderByAggregateInputObjectZodSchema = makeSchema();
