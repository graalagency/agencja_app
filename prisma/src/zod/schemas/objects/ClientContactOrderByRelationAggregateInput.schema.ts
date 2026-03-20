import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ClientContactOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactOrderByRelationAggregateInput>;
export const ClientContactOrderByRelationAggregateInputObjectZodSchema = makeSchema();
