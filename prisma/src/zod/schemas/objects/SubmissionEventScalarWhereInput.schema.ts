import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const submissioneventscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubmissionEventScalarWhereInputObjectSchema), z.lazy(() => SubmissionEventScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubmissionEventScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubmissionEventScalarWhereInputObjectSchema), z.lazy(() => SubmissionEventScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  submissionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  eventCode: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  eventDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  noOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SubmissionEventScalarWhereInputObjectSchema: z.ZodType<Prisma.SubmissionEventScalarWhereInput> = submissioneventscalarwhereinputSchema as unknown as z.ZodType<Prisma.SubmissionEventScalarWhereInput>;
export const SubmissionEventScalarWhereInputObjectZodSchema = submissioneventscalarwhereinputSchema;
