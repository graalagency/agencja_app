import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleArgsObjectSchema as TitleArgsObjectSchema } from './TitleArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { SubmissionEventFindManySchema as SubmissionEventFindManySchema } from '../findManySubmissionEvent.schema';
import { SubmissionCountOutputTypeArgsObjectSchema as SubmissionCountOutputTypeArgsObjectSchema } from './SubmissionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  titleId: z.boolean().optional(),
  publisherId: z.boolean().optional(),
  contactId: z.boolean().optional(),
  copyTypeId: z.boolean().optional(),
  submSentTypeId: z.boolean().optional(),
  submDate: z.boolean().optional(),
  sentDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  returnDate: z.boolean().optional(),
  noOfCopies: z.boolean().optional(),
  trackingNo: z.boolean().optional(),
  exclusive: z.boolean().optional(),
  submNr: z.boolean().optional(),
  status: z.boolean().optional(),
  remarks: z.boolean().optional(),
  userMod: z.boolean().optional(),
  dateMod: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  Events: z.union([z.boolean(), z.lazy(() => SubmissionEventFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SubmissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SubmissionSelectObjectSchema: z.ZodType<Prisma.SubmissionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionSelect>;
export const SubmissionSelectObjectZodSchema = makeSchema();
