import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date(),
  noOfCopies: z.number().int().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const SubmissionEventCreateManySubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventCreateManySubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCreateManySubmissionInput>;
export const SubmissionEventCreateManySubmissionInputObjectZodSchema = makeSchema();
