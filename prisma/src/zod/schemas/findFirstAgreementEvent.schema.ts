import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventIncludeObjectSchema as AgreementEventIncludeObjectSchema } from './objects/AgreementEventInclude.schema';
import { AgreementEventOrderByWithRelationInputObjectSchema as AgreementEventOrderByWithRelationInputObjectSchema } from './objects/AgreementEventOrderByWithRelationInput.schema';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './objects/AgreementEventWhereInput.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './objects/AgreementEventWhereUniqueInput.schema';
import { AgreementEventScalarFieldEnumSchema } from './enums/AgreementEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgreementEventFindFirstSelectSchema: z.ZodType<Prisma.AgreementEventSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    eventCode: z.boolean().optional(),
    eventDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    noOfCopies: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    userMod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Agreement: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgreementEventSelect>;

export const AgreementEventFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    eventCode: z.boolean().optional(),
    eventDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    noOfCopies: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    userMod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Agreement: z.boolean().optional()
  }).strict();

export const AgreementEventFindFirstSchema: z.ZodType<Prisma.AgreementEventFindFirstArgs> = z.object({ select: AgreementEventFindFirstSelectSchema.optional(), include: z.lazy(() => AgreementEventIncludeObjectSchema.optional()), orderBy: z.union([AgreementEventOrderByWithRelationInputObjectSchema, AgreementEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementEventWhereInputObjectSchema.optional(), cursor: AgreementEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementEventScalarFieldEnumSchema, AgreementEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventFindFirstArgs>;

export const AgreementEventFindFirstZodSchema = z.object({ select: AgreementEventFindFirstSelectSchema.optional(), include: z.lazy(() => AgreementEventIncludeObjectSchema.optional()), orderBy: z.union([AgreementEventOrderByWithRelationInputObjectSchema, AgreementEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementEventWhereInputObjectSchema.optional(), cursor: AgreementEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementEventScalarFieldEnumSchema, AgreementEventScalarFieldEnumSchema.array()]).optional() }).strict();