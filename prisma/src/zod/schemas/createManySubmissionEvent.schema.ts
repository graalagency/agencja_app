import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventCreateManyInputObjectSchema as SubmissionEventCreateManyInputObjectSchema } from './objects/SubmissionEventCreateManyInput.schema';

export const SubmissionEventCreateManySchema: z.ZodType<Prisma.SubmissionEventCreateManyArgs> = z.object({ data: z.union([ SubmissionEventCreateManyInputObjectSchema, z.array(SubmissionEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventCreateManyArgs>;

export const SubmissionEventCreateManyZodSchema = z.object({ data: z.union([ SubmissionEventCreateManyInputObjectSchema, z.array(SubmissionEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();