import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { TitleNullableScalarRelationFilterObjectSchema as TitleNullableScalarRelationFilterObjectSchema } from './TitleNullableScalarRelationFilter.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { PublisherNullableScalarRelationFilterObjectSchema as PublisherNullableScalarRelationFilterObjectSchema } from './PublisherNullableScalarRelationFilter.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { SubmissionEventListRelationFilterObjectSchema as SubmissionEventListRelationFilterObjectSchema } from './SubmissionEventListRelationFilter.schema'

const submissionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubmissionWhereInputObjectSchema), z.lazy(() => SubmissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubmissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubmissionWhereInputObjectSchema), z.lazy(() => SubmissionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  titleId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publisherId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  contactId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  copyTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  submSentTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  submDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sentDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  returnDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  noOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  trackingNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  exclusive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  submNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  userMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  dateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Title: z.union([z.lazy(() => TitleNullableScalarRelationFilterObjectSchema), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  Publisher: z.union([z.lazy(() => PublisherNullableScalarRelationFilterObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  Events: z.lazy(() => SubmissionEventListRelationFilterObjectSchema).optional()
}).strict();
export const SubmissionWhereInputObjectSchema: z.ZodType<Prisma.SubmissionWhereInput> = submissionwhereinputSchema as unknown as z.ZodType<Prisma.SubmissionWhereInput>;
export const SubmissionWhereInputObjectZodSchema = submissionwhereinputSchema;
