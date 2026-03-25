import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventSelectObjectSchema as SubmissionEventSelectObjectSchema } from './objects/SubmissionEventSelect.schema';
import { SubmissionEventCreateManyInputObjectSchema as SubmissionEventCreateManyInputObjectSchema } from './objects/SubmissionEventCreateManyInput.schema';

export const SubmissionEventCreateManyAndReturnSchema: z.ZodType<Prisma.SubmissionEventCreateManyAndReturnArgs> = z.object({ select: SubmissionEventSelectObjectSchema.optional(), data: z.union([ SubmissionEventCreateManyInputObjectSchema, z.array(SubmissionEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventCreateManyAndReturnArgs>;

export const SubmissionEventCreateManyAndReturnZodSchema = z.object({ select: SubmissionEventSelectObjectSchema.optional(), data: z.union([ SubmissionEventCreateManyInputObjectSchema, z.array(SubmissionEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();