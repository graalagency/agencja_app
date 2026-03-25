import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionArgsObjectSchema as SubmissionArgsObjectSchema } from './SubmissionArgs.schema'

const makeSchema = () => z.object({
  Submission: z.union([z.boolean(), z.lazy(() => SubmissionArgsObjectSchema)]).optional()
}).strict();
export const SubmissionEventIncludeObjectSchema: z.ZodType<Prisma.SubmissionEventInclude> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventInclude>;
export const SubmissionEventIncludeObjectZodSchema = makeSchema();
