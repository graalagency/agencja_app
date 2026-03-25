import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './objects/SubmissionEventInclude.schema';
import { SubmissionEventUpdateInputObjectSchema as SubmissionEventUpdateInputObjectSchema } from './objects/SubmissionEventUpdateInput.schema';
import { SubmissionEventUncheckedUpdateInputObjectSchema as SubmissionEventUncheckedUpdateInputObjectSchema } from './objects/SubmissionEventUncheckedUpdateInput.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './objects/SubmissionEventWhereUniqueInput.schema';

export const SubmissionEventUpdateOneSchema: z.ZodType<Prisma.SubmissionEventUpdateArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), data: z.union([SubmissionEventUpdateInputObjectSchema, SubmissionEventUncheckedUpdateInputObjectSchema]), where: SubmissionEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubmissionEventUpdateArgs>;

export const SubmissionEventUpdateOneZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), data: z.union([SubmissionEventUpdateInputObjectSchema, SubmissionEventUncheckedUpdateInputObjectSchema]), where: SubmissionEventWhereUniqueInputObjectSchema }).strict();