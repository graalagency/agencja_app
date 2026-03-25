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
  submDate: z.literal(true).optional(),
  sentDate: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  returnDate: z.literal(true).optional(),
  noOfCopies: z.literal(true).optional(),
  trackingNo: z.literal(true).optional(),
  exclusive: z.literal(true).optional(),
  submNr: z.literal(true).optional(),
  status: z.literal(true).optional(),
  remarks: z.literal(true).optional(),
  userMod: z.literal(true).optional(),
  dateMod: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SubmissionMinAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionMinAggregateInputType>;
export const SubmissionMinAggregateInputObjectZodSchema = makeSchema();
