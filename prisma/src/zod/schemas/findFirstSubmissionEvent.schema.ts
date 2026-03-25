import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventIncludeObjectSchema as SubmissionEventIncludeObjectSchema } from './objects/SubmissionEventInclude.schema';
import { SubmissionEventOrderByWithRelationInputObjectSchema as SubmissionEventOrderByWithRelationInputObjectSchema } from './objects/SubmissionEventOrderByWithRelationInput.schema';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './objects/SubmissionEventWhereInput.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './objects/SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventScalarFieldEnumSchema } from './enums/SubmissionEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubmissionEventFindFirstSelectSchema: z.ZodType<Prisma.SubmissionEventSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    submissionId: z.boolean().optional(),
    eventCode: z.boolean().optional(),
    eventDate: z.boolean().optional(),
    noOfCopies: z.boolean().optional(),
    endDate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Submission: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SubmissionEventSelect>;

export const SubmissionEventFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    submissionId: z.boolean().optional(),
    eventCode: z.boolean().optional(),
    eventDate: z.boolean().optional(),
    noOfCopies: z.boolean().optional(),
    endDate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Submission: z.boolean().optional()
  }).strict();

export const SubmissionEventFindFirstSchema: z.ZodType<Prisma.SubmissionEventFindFirstArgs> = z.object({ select: SubmissionEventFindFirstSelectSchema.optional(), include: z.lazy(() => SubmissionEventIncludeObjectSchema.optional()), orderBy: z.union([SubmissionEventOrderByWithRelationInputObjectSchema, SubmissionEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionEventWhereInputObjectSchema.optional(), cursor: SubmissionEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubmissionEventScalarFieldEnumSchema, SubmissionEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventFindFirstArgs>;

export const SubmissionEventFindFirstZodSchema = z.object({ select: SubmissionEventFindFirstSelectSchema.optional(), include: z.lazy(() => SubmissionEventIncludeObjectSchema.optional()), orderBy: z.union([SubmissionEventOrderByWithRelationInputObjectSchema, SubmissionEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionEventWhereInputObjectSchema.optional(), cursor: SubmissionEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubmissionEventScalarFieldEnumSchema, SubmissionEventScalarFieldEnumSchema.array()]).optional() }).strict();