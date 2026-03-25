import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  submissionId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  eventDate: SortOrderSchema.optional(),
  noOfCopies: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const SubmissionEventMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionEventMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventMaxOrderByAggregateInput>;
export const SubmissionEventMaxOrderByAggregateInputObjectZodSchema = makeSchema();
