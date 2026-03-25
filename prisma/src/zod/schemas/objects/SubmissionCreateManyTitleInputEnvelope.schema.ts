import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateManyTitleInputObjectSchema as SubmissionCreateManyTitleInputObjectSchema } from './SubmissionCreateManyTitleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubmissionCreateManyTitleInputObjectSchema), z.lazy(() => SubmissionCreateManyTitleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubmissionCreateManyTitleInputEnvelopeObjectSchema: z.ZodType<Prisma.SubmissionCreateManyTitleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateManyTitleInputEnvelope>;
export const SubmissionCreateManyTitleInputEnvelopeObjectZodSchema = makeSchema();
