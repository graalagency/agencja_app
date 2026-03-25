import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  titleId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
  contactId: z.number().int().optional().nullable(),
  copyTypeId: z.number().int().optional().nullable(),
  submSentTypeId: z.number().int().optional().nullable(),
  submDate: z.coerce.date(),
  sentDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  returnDate: z.coerce.date().optional().nullable(),
  noOfCopies: z.number().int().optional().nullable(),
  trackingNo: z.string().optional().nullable(),
  exclusive: z.boolean().optional(),
  submNr: z.number().int().optional().nullable(),
  status: z.string().optional().nullable(),
  remarks: z.string().optional().nullable(),
  userMod: z.string().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SubmissionUncheckedCreateWithoutEventsInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedCreateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedCreateWithoutEventsInput>;
export const SubmissionUncheckedCreateWithoutEventsInputObjectZodSchema = makeSchema();
