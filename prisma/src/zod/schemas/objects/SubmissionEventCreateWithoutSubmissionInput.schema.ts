import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date(),
  noOfCopies: z.number().int().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const SubmissionEventCreateWithoutSubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventCreateWithoutSubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCreateWithoutSubmissionInput>;
export const SubmissionEventCreateWithoutSubmissionInputObjectZodSchema = makeSchema();
