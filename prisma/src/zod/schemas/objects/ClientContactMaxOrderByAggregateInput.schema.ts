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
export const ClientContactMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactMaxOrderByAggregateInput>;
export const ClientContactMaxOrderByAggregateInputObjectZodSchema = makeSchema();
