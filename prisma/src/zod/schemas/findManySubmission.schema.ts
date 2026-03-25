import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionOrderByWithRelationInputObjectSchema as SubmissionOrderByWithRelationInputObjectSchema } from './objects/SubmissionOrderByWithRelationInput.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './objects/SubmissionWhereInput.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';
import { SubmissionScalarFieldEnumSchema } from './enums/SubmissionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubmissionFindManySelectSchema: z.ZodType<Prisma.SubmissionSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    titleId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    contactId: z.boolean().optional(),
    copyTypeId: z.boolean().optional(),
    submSentTypeId: z.boolean().optional(),
    submDate: z.boolean().optional(),
    sentDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    returnDate: z.boolean().optional(),
    noOfCopies: z.boolean().optional(),
    trackingNo: z.boolean().optional(),
    exclusive: z.boolean().optional(),
    submNr: z.boolean().optional(),
    status: z.boolean().optional(),
    remarks: z.boolean().optional(),
    userMod: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Title: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    Events: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SubmissionSelect>;

export const SubmissionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    titleId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    contactId: z.boolean().optional(),
    copyTypeId: z.boolean().optional(),
    submSentTypeId: z.boolean().optional(),
    submDate: z.boolean().optional(),
    sentDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    returnDate: z.boolean().optional(),
    noOfCopies: z.boolean().optional(),
    trackingNo: z.boolean().optional(),
    exclusive: z.boolean().optional(),
    submNr: z.boolean().optional(),
    status: z.boolean().optional(),
    remarks: z.boolean().optional(),
    userMod: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Title: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    Events: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SubmissionFindManySchema: z.ZodType<Prisma.SubmissionFindManyArgs> = z.object({ select: SubmissionFindManySelectSchema.optional(), include: z.lazy(() => SubmissionIncludeObjectSchema.optional()), orderBy: z.union([SubmissionOrderByWithRelationInputObjectSchema, SubmissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionWhereInputObjectSchema.optional(), cursor: SubmissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubmissionScalarFieldEnumSchema, SubmissionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionFindManyArgs>;

export const SubmissionFindManyZodSchema = z.object({ select: SubmissionFindManySelectSchema.optional(), include: z.lazy(() => SubmissionIncludeObjectSchema.optional()), orderBy: z.union([SubmissionOrderByWithRelationInputObjectSchema, SubmissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionWhereInputObjectSchema.optional(), cursor: SubmissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubmissionScalarFieldEnumSchema, SubmissionScalarFieldEnumSchema.array()]).optional() }).strict();