import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherIncludeObjectSchema as PublisherIncludeObjectSchema } from './objects/PublisherInclude.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './objects/PublisherOrderByWithRelationInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './objects/PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';
import { PublisherScalarFieldEnumSchema } from './enums/PublisherScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PublisherFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PublisherSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    name: z.boolean().optional(),
    abbreviation: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    fax: z.boolean().optional(),
    www: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    address: z.boolean().optional(),
    address2: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    country: z.boolean().optional(),
    language: z.boolean().optional(),
    legalForm: z.boolean().optional(),
    nip: z.boolean().optional(),
    vatId: z.boolean().optional(),
    regon: z.boolean().optional(),
    jurisdiction: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    bankAccount: z.boolean().optional(),
    bankName: z.boolean().optional(),
    bankAddress: z.boolean().optional(),
    bankRoutingNo: z.boolean().optional(),
    bankAccountName: z.boolean().optional(),
    commission: z.boolean().optional(),
    commissionForeign: z.boolean().optional(),
    commissionMaterials: z.boolean().optional(),
    repModeId: z.boolean().optional(),
    parentId: z.boolean().optional(),
    Parent: z.boolean().optional(),
    Children: z.boolean().optional(),
    PublisherContact: z.boolean().optional(),
    TaxResidenceCert: z.boolean().optional(),
    TaxResidenceSend: z.boolean().optional(),
    Title: z.boolean().optional(),
    Agreements: z.boolean().optional(),
    Submissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PublisherSelect>;

export const PublisherFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    name: z.boolean().optional(),
    abbreviation: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    fax: z.boolean().optional(),
    www: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    address: z.boolean().optional(),
    address2: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    country: z.boolean().optional(),
    language: z.boolean().optional(),
    legalForm: z.boolean().optional(),
    nip: z.boolean().optional(),
    vatId: z.boolean().optional(),
    regon: z.boolean().optional(),
    jurisdiction: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    bankAccount: z.boolean().optional(),
    bankName: z.boolean().optional(),
    bankAddress: z.boolean().optional(),
    bankRoutingNo: z.boolean().optional(),
    bankAccountName: z.boolean().optional(),
    commission: z.boolean().optional(),
    commissionForeign: z.boolean().optional(),
    commissionMaterials: z.boolean().optional(),
    repModeId: z.boolean().optional(),
    parentId: z.boolean().optional(),
    Parent: z.boolean().optional(),
    Children: z.boolean().optional(),
    PublisherContact: z.boolean().optional(),
    TaxResidenceCert: z.boolean().optional(),
    TaxResidenceSend: z.boolean().optional(),
    Title: z.boolean().optional(),
    Agreements: z.boolean().optional(),
    Submissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PublisherFindFirstOrThrowSchema: z.ZodType<Prisma.PublisherFindFirstOrThrowArgs> = z.object({ select: PublisherFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PublisherIncludeObjectSchema.optional()), orderBy: z.union([PublisherOrderByWithRelationInputObjectSchema, PublisherOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherWhereInputObjectSchema.optional(), cursor: PublisherWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublisherScalarFieldEnumSchema, PublisherScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PublisherFindFirstOrThrowArgs>;

export const PublisherFindFirstOrThrowZodSchema = z.object({ select: PublisherFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PublisherIncludeObjectSchema.optional()), orderBy: z.union([PublisherOrderByWithRelationInputObjectSchema, PublisherOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherWhereInputObjectSchema.optional(), cursor: PublisherWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublisherScalarFieldEnumSchema, PublisherScalarFieldEnumSchema.array()]).optional() }).strict();