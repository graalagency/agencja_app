import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCountOutputTypeSelectObjectSchema as SubmissionCountOutputTypeSelectObjectSchema } from './SubmissionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SubmissionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SubmissionCountOutputTypeArgsObjectSchema = makeSchema();
export const SubmissionCountOutputTypeArgsObjectZodSchema = makeSchema();
