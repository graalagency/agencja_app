import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  submissionId: z.literal(true).optional(),
  eventCode: z.literal(true).optional(),
  eventDate: z.literal(true).optional(),
  noOfCopies: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SubmissionEventCountAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionEventCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCountAggregateInputType>;
export const SubmissionEventCountAggregateInputObjectZodSchema = makeSchema();
