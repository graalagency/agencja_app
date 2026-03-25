import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  submissionId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  noOfCopies: SortOrderSchema.optional()
}).strict();
export const SubmissionEventSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionEventSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventSumOrderByAggregateInput>;
export const SubmissionEventSumOrderByAggregateInputObjectZodSchema = makeSchema();
