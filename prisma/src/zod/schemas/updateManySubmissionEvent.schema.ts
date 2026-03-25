import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventUpdateManyMutationInputObjectSchema as SubmissionEventUpdateManyMutationInputObjectSchema } from './objects/SubmissionEventUpdateManyMutationInput.schema';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './objects/SubmissionEventWhereInput.schema';

export const SubmissionEventUpdateManySchema: z.ZodType<Prisma.SubmissionEventUpdateManyArgs> = z.object({ data: SubmissionEventUpdateManyMutationInputObjectSchema, where: SubmissionEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventUpdateManyArgs>;

export const SubmissionEventUpdateManyZodSchema = z.object({ data: SubmissionEventUpdateManyMutationInputObjectSchema, where: SubmissionEventWhereInputObjectSchema.optional() }).strict();