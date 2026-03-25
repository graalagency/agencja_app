import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SubmissionEventOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionEventOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventOrderByRelationAggregateInput>;
export const SubmissionEventOrderByRelationAggregateInputObjectZodSchema = makeSchema();
