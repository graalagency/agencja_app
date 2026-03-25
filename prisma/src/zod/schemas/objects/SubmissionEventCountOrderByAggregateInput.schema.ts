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
export const SubmissionEventCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionEventCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCountOrderByAggregateInput>;
export const SubmissionEventCountOrderByAggregateInputObjectZodSchema = makeSchema();
