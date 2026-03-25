import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './SubmissionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SubmissionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SubmissionWhereInputObjectSchema).optional()
}).strict();
export const SubmissionScalarRelationFilterObjectSchema: z.ZodType<Prisma.SubmissionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionScalarRelationFilter>;
export const SubmissionScalarRelationFilterObjectZodSchema = makeSchema();
