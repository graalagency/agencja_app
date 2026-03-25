import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventCreateManySubmissionInputObjectSchema as SubmissionEventCreateManySubmissionInputObjectSchema } from './SubmissionEventCreateManySubmissionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubmissionEventCreateManySubmissionInputObjectSchema), z.lazy(() => SubmissionEventCreateManySubmissionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema: z.ZodType<Prisma.SubmissionEventCreateManySubmissionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCreateManySubmissionInputEnvelope>;
export const SubmissionEventCreateManySubmissionInputEnvelopeObjectZodSchema = makeSchema();
