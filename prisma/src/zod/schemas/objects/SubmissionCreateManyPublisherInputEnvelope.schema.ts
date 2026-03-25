import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateManyPublisherInputObjectSchema as SubmissionCreateManyPublisherInputObjectSchema } from './SubmissionCreateManyPublisherInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubmissionCreateManyPublisherInputObjectSchema), z.lazy(() => SubmissionCreateManyPublisherInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubmissionCreateManyPublisherInputEnvelopeObjectSchema: z.ZodType<Prisma.SubmissionCreateManyPublisherInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateManyPublisherInputEnvelope>;
export const SubmissionCreateManyPublisherInputEnvelopeObjectZodSchema = makeSchema();
