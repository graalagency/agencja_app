import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  titleId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  copyTypeId: SortOrderSchema.optional(),
  submSentTypeId: SortOrderSchema.optional(),
  noOfCopies: SortOrderSchema.optional(),
  submNr: SortOrderSchema.optional()
}).strict();
export const SubmissionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionSumOrderByAggregateInput>;
export const SubmissionSumOrderByAggregateInputObjectZodSchema = makeSchema();
