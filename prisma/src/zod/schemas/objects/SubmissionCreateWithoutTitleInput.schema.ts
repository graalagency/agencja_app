import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateNestedOneWithoutSubmissionsInputObjectSchema as PublisherCreateNestedOneWithoutSubmissionsInputObjectSchema } from './PublisherCreateNestedOneWithoutSubmissionsInput.schema';
import { SubmissionEventCreateNestedManyWithoutSubmissionInputObjectSchema as SubmissionEventCreateNestedManyWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateNestedManyWithoutSubmissionInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  contactId: z.number().int().optional().nullable(),
  copyTypeId: z.number().int().optional().nullable(),
  submSentTypeId: z.number().int().optional().nullable(),
  submDate: z.coerce.date(),
  sentDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  returnDate: z.coerce.date().optional().nullable(),
  noOfCopies: z.number().int().optional().nullable(),
  trackingNo: z.string().max(30).optional().nullable(),
  exclusive: z.boolean().optional(),
  submNr: z.number().int().optional().nullable(),
  status: z.string().max(1).optional().nullable(),
  remarks: z.string().max(1000).optional().nullable(),
  userMod: z.string().max(30).optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutSubmissionsInputObjectSchema).optional(),
  Events: z.lazy(() => SubmissionEventCreateNestedManyWithoutSubmissionInputObjectSchema).optional()
}).strict();
export const SubmissionCreateWithoutTitleInputObjectSchema: z.ZodType<Prisma.SubmissionCreateWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateWithoutTitleInput>;
export const SubmissionCreateWithoutTitleInputObjectZodSchema = makeSchema();
