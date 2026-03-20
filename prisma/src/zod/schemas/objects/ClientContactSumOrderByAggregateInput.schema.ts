import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const ClientContactSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactSumOrderByAggregateInput>;
export const ClientContactSumOrderByAggregateInputObjectZodSchema = makeSchema();
