import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubmissionOrderByWithRelationInputObjectSchema as SubmissionOrderByWithRelationInputObjectSchema } from './SubmissionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submissionId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  eventDate: SortOrderSchema.optional(),
  noOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  Submission: z.lazy(() => SubmissionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SubmissionEventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SubmissionEventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventOrderByWithRelationInput>;
export const SubmissionEventOrderByWithRelationInputObjectZodSchema = makeSchema();
