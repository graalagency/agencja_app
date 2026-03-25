import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateNestedOneWithoutEventsInputObjectSchema as SubmissionCreateNestedOneWithoutEventsInputObjectSchema } from './SubmissionCreateNestedOneWithoutEventsInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date(),
  noOfCopies: z.number().int().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  Submission: z.lazy(() => SubmissionCreateNestedOneWithoutEventsInputObjectSchema)
}).strict();
export const SubmissionEventCreateInputObjectSchema: z.ZodType<Prisma.SubmissionEventCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCreateInput>;
export const SubmissionEventCreateInputObjectZodSchema = makeSchema();
