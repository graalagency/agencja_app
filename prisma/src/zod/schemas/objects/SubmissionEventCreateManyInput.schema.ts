import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  submissionId: z.number().int(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date(),
  noOfCopies: z.number().int().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const SubmissionEventCreateManyInputObjectSchema: z.ZodType<Prisma.SubmissionEventCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCreateManyInput>;
export const SubmissionEventCreateManyInputObjectZodSchema = makeSchema();
