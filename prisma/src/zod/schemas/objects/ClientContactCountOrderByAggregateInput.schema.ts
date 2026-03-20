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
export const ClientContactCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCountOrderByAggregateInput>;
export const ClientContactCountOrderByAggregateInputObjectZodSchema = makeSchema();
