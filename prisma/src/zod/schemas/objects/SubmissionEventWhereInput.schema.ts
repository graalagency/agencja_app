import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { SubmissionScalarRelationFilterObjectSchema as SubmissionScalarRelationFilterObjectSchema } from './SubmissionScalarRelationFilter.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './SubmissionWhereInput.schema'

const submissioneventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubmissionEventWhereInputObjectSchema), z.lazy(() => SubmissionEventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubmissionEventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubmissionEventWhereInputObjectSchema), z.lazy(() => SubmissionEventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  submissionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  eventCode: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  eventDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  noOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Submission: z.union([z.lazy(() => SubmissionScalarRelationFilterObjectSchema), z.lazy(() => SubmissionWhereInputObjectSchema)]).optional()
}).strict();
export const SubmissionEventWhereInputObjectSchema: z.ZodType<Prisma.SubmissionEventWhereInput> = submissioneventwhereinputSchema as unknown as z.ZodType<Prisma.SubmissionEventWhereInput>;
export const SubmissionEventWhereInputObjectZodSchema = submissioneventwhereinputSchema;
