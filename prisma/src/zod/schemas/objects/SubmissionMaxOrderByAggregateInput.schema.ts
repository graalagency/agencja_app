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
  submDate: SortOrderSchema.optional(),
  sentDate: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  returnDate: SortOrderSchema.optional(),
  noOfCopies: SortOrderSchema.optional(),
  trackingNo: SortOrderSchema.optional(),
  exclusive: SortOrderSchema.optional(),
  submNr: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  remarks: SortOrderSchema.optional(),
  userMod: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SubmissionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionMaxOrderByAggregateInput>;
export const SubmissionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
