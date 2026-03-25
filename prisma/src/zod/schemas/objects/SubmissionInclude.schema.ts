import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleArgsObjectSchema as TitleArgsObjectSchema } from './TitleArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { SubmissionEventFindManySchema as SubmissionEventFindManySchema } from '../findManySubmissionEvent.schema';
import { SubmissionCountOutputTypeArgsObjectSchema as SubmissionCountOutputTypeArgsObjectSchema } from './SubmissionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Title: z.union([z.boolean(), z.lazy(() => TitleArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  Events: z.union([z.boolean(), z.lazy(() => SubmissionEventFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SubmissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SubmissionIncludeObjectSchema: z.ZodType<Prisma.SubmissionInclude> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionInclude>;
export const SubmissionIncludeObjectZodSchema = makeSchema();
