import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './objects/SubmissionEventInclude.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './objects/SubmissionEventWhereUniqueInput.schema';

export const SubmissionEventDeleteOneSchema: z.ZodType<Prisma.SubmissionEventDeleteArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), where: SubmissionEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubmissionEventDeleteArgs>;

export const SubmissionEventDeleteOneZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), where: SubmissionEventWhereUniqueInputObjectSchema }).strict();