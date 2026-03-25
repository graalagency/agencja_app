import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './objects/SubmissionEventInclude.schema';
import { SubmissionEventCreateInputObjectSchema as SubmissionEventCreateInputObjectSchema } from './objects/SubmissionEventCreateInput.schema';
import { SubmissionEventUncheckedCreateInputObjectSchema as SubmissionEventUncheckedCreateInputObjectSchema } from './objects/SubmissionEventUncheckedCreateInput.schema';

export const SubmissionEventCreateOneSchema: z.ZodType<Prisma.SubmissionEventCreateArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), data: z.union([SubmissionEventCreateInputObjectSchema, SubmissionEventUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SubmissionEventCreateArgs>;

export const SubmissionEventCreateOneZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), include: SubmissionEventIncludeObjectSchema.optional(), data: z.union([SubmissionEventCreateInputObjectSchema, SubmissionEventUncheckedCreateInputObjectSchema]) }).strict();