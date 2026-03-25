import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './SubmissionEventWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SubmissionEventWhereInputObjectSchema).optional(),
  some: z.lazy(() => SubmissionEventWhereInputObjectSchema).optional(),
  none: z.lazy(() => SubmissionEventWhereInputObjectSchema).optional()
}).strict();
export const SubmissionEventListRelationFilterObjectSchema: z.ZodType<Prisma.SubmissionEventListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventListRelationFilter>;
export const SubmissionEventListRelationFilterObjectZodSchema = makeSchema();
