import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './objects/SubmissionEventInclude.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './objects/SubmissionEventWhereUniqueInput.schema';

export const SubmissionEventFindUniqueOrThrowSchema: z.ZodType<Prisma.SubmissionEventFindUniqueOrThrowArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), where: SubmissionEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubmissionEventFindUniqueOrThrowArgs>;

export const SubmissionEventFindUniqueOrThrowZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), where: SubmissionEventWhereUniqueInputObjectSchema }).strict();