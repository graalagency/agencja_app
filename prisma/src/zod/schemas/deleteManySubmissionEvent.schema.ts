import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './objects/SubmissionEventWhereInput.schema';

export const SubmissionEventDeleteManySchema: z.ZodType<Prisma.SubmissionEventDeleteManyArgs> = z.object({ where: SubmissionEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventDeleteManyArgs>;

export const SubmissionEventDeleteManyZodSchema = z.object({ where: SubmissionEventWhereInputObjectSchema.optional() }).strict();