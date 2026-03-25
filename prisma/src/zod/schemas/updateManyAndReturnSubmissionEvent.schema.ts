import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventUpdateManyMutationInputObjectSchema as SubmissionEventUpdateManyMutationInputObjectSchema } from './objects/SubmissionEventUpdateManyMutationInput.schema';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './objects/SubmissionEventWhereInput.schema';

export const SubmissionEventUpdateManyAndReturnSchema: z.ZodType<Prisma.SubmissionEventUpdateManyAndReturnArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), data: SubmissionEventUpdateManyMutationInputObjectSchema, where: SubmissionEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventUpdateManyAndReturnArgs>;

export const SubmissionEventUpdateManyAndReturnZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), data: SubmissionEventUpdateManyMutationInputObjectSchema, where: SubmissionEventWhereInputObjectSchema.optional() }).strict();