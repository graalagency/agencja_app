import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  titleId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  copyTypeId: z.literal(true).optional(),
  submSentTypeId: z.literal(true).optional(),
  noOfCopies: z.literal(true).optional(),
  submNr: z.literal(true).optional()
}).strict();
export const SubmissionSumAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionSumAggregateInputType>;
export const SubmissionSumAggregateInputObjectZodSchema = makeSchema();
