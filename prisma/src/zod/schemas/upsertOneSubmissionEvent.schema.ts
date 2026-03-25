import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './objects/SubmissionEventInclude.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './objects/SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventCreateInputObjectSchema as SubmissionEventCreateInputObjectSchema } from './objects/SubmissionEventCreateInput.schema';
import { SubmissionEventUncheckedCreateInputObjectSchema as SubmissionEventUncheckedCreateInputObjectSchema } from './objects/SubmissionEventUncheckedCreateInput.schema';
import { SubmissionEventUpdateInputObjectSchema as SubmissionEventUpdateInputObjectSchema } from './objects/SubmissionEventUpdateInput.schema';
import { SubmissionEventUncheckedUpdateInputObjectSchema as SubmissionEventUncheckedUpdateInputObjectSchema } from './objects/SubmissionEventUncheckedUpdateInput.schema';

export const SubmissionEventUpsertOneSchema: z.ZodType<Prisma.SubmissionEventUpsertArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), where: SubmissionEventWhereUniqueInputObjectSchema, create: z.union([ SubmissionEventCreateInputObjectSchema, SubmissionEventUncheckedCreateInputObjectSchema ]), update: z.union([ SubmissionEventUpdateInputObjectSchema, SubmissionEventUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SubmissionEventUpsertArgs>;

export const SubmissionEventUpsertOneZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), where: SubmissionEventWhereUniqueInputObjectSchema, create: z.union([ SubmissionEventCreateInputObjectSchema, SubmissionEventUncheckedCreateInputObjectSchema ]), update: z.union([ SubmissionEventUpdateInputObjectSchema, SubmissionEventUncheckedUpdateInputObjectSchema ]) }).strict();