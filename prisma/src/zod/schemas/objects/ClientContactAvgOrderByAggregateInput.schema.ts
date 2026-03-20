import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const ClientContactAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactAvgOrderByAggregateInput>;
export const ClientContactAvgOrderByAggregateInputObjectZodSchema = makeSchema();
