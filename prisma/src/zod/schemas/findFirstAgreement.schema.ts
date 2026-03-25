import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementIncludeObjectSchema as AgreementIncludeObjectSchema } from './objects/AgreementInclude.schema';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './objects/AgreementOrderByWithRelationInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './objects/AgreementWhereInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';
import { AgreementScalarFieldEnumSchema } from './enums/AgreementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgreementFindFirstSelectSchema: z.ZodType<Prisma.AgreementSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    titleId: z.boolean().optional(),
    agrDate: z.boolean().optional(),
    validYY: z.boolean().optional(),
    pubTermMM: z.boolean().optional(),
    maxCopies: z.boolean().optional(),
    minCopies: z.boolean().optional(),
    copiesToOwner: z.boolean().optional(),
    copiesToGraal: z.boolean().optional(),
    currencyCode: z.boolean().optional(),
    commission: z.boolean().optional(),
    commissionMaterials: z.boolean().optional(),
    estimatedCopyPrice: z.boolean().optional(),
    graalShare: z.boolean().optional(),
    graalRepresent: z.boolean().optional(),
    languageCode: z.boolean().optional(),
    countryId: z.boolean().optional(),
    localTitle: z.boolean().optional(),
    localIsbn: z.boolean().optional(),
    localPubDate: z.boolean().optional(),
    clientReference: z.boolean().optional(),
    agrDoc: z.boolean().optional(),
    status: z.boolean().optional(),
    remarks: z.boolean().optional(),
    agentId: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    userMod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    Client: z.boolean().optional(),
    Title: z.boolean().optional(),
    Rights: z.boolean().optional(),
    Events: z.boolean().optional(),
    Advances: z.boolean().optional(),
    RoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgreementSelect>;

export const AgreementFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    titleId: z.boolean().optional(),
    agrDate: z.boolean().optional(),
    validYY: z.boolean().optional(),
    pubTermMM: z.boolean().optional(),
    maxCopies: z.boolean().optional(),
    minCopies: z.boolean().optional(),
    copiesToOwner: z.boolean().optional(),
    copiesToGraal: z.boolean().optional(),
    currencyCode: z.boolean().optional(),
    commission: z.boolean().optional(),
    commissionMaterials: z.boolean().optional(),
    estimatedCopyPrice: z.boolean().optional(),
    graalShare: z.boolean().optional(),
    graalRepresent: z.boolean().optional(),
    languageCode: z.boolean().optional(),
    countryId: z.boolean().optional(),
    localTitle: z.boolean().optional(),
    localIsbn: z.boolean().optional(),
    localPubDate: z.boolean().optional(),
    clientReference: z.boolean().optional(),
    agrDoc: z.boolean().optional(),
    status: z.boolean().optional(),
    remarks: z.boolean().optional(),
    agentId: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    userMod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    Client: z.boolean().optional(),
    Title: z.boolean().optional(),
    Rights: z.boolean().optional(),
    Events: z.boolean().optional(),
    Advances: z.boolean().optional(),
    RoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AgreementFindFirstSchema: z.ZodType<Prisma.AgreementFindFirstArgs> = z.object({ select: AgreementFindFirstSelectSchema.optional(), include: z.lazy(() => AgreementIncludeObjectSchema.optional()), orderBy: z.union([AgreementOrderByWithRelationInputObjectSchema, AgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementWhereInputObjectSchema.optional(), cursor: AgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementScalarFieldEnumSchema, AgreementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementFindFirstArgs>;

export const AgreementFindFirstZodSchema = z.object({ select: AgreementFindFirstSelectSchema.optional(), include: z.lazy(() => AgreementIncludeObjectSchema.optional()), orderBy: z.union([AgreementOrderByWithRelationInputObjectSchema, AgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementWhereInputObjectSchema.optional(), cursor: AgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementScalarFieldEnumSchema, AgreementScalarFieldEnumSchema.array()]).optional() }).strict();