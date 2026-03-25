import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  submissionId: z.literal(true).optional(),
  eventCode: z.literal(true).optional(),
  noOfCopies: z.literal(true).optional()
}).strict();
export const SubmissionEventAvgAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionEventAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventAvgAggregateInputType>;
export const SubmissionEventAvgAggregateInputObjectZodSchema = makeSchema();
