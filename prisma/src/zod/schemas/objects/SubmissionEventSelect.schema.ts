import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionArgsObjectSchema as SubmissionArgsObjectSchema } from './SubmissionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  submissionId: z.boolean().optional(),
  eventCode: z.boolean().optional(),
  eventDate: z.boolean().optional(),
  noOfCopies: z.boolean().optional(),
  endDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Submission: z.union([z.boolean(), z.lazy(() => SubmissionArgsObjectSchema)]).optional()
}).strict();
export const SubmissionEventSelectObjectSchema: z.ZodType<Prisma.SubmissionEventSelect> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventSelect>;
export const SubmissionEventSelectObjectZodSchema = makeSchema();
