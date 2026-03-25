import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './SubmissionEventSelect.schema';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './SubmissionEventInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SubmissionEventSelectObjectSchema).optional(),
  include: z.lazy(() => SubmissionEventIncludeObjectSchema).optional()
}).strict();
export const SubmissionEventArgsObjectSchema = makeSchema();
export const SubmissionEventArgsObjectZodSchema = makeSchema();
