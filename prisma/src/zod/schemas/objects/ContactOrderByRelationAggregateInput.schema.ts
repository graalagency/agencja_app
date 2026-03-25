import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ContactOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ContactOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactOrderByRelationAggregateInput>;
export const ContactOrderByRelationAggregateInputObjectZodSchema = makeSchema();
