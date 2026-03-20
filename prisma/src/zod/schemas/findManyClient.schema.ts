import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientIncludeObjectSchema as ClientIncludeObjectSchema } from './objects/ClientInclude.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './objects/ClientOrderByWithRelationInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './objects/ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './objects/ClientWhereUniqueInput.schema';
import { ClientScalarFieldEnumSchema } from './enums/ClientScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientFindManySelectSchema: z.ZodType<Prisma.ClientSelect> = z.object({
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
    Author: z.boolean().optional(),
    ClientContact: z.boolean().optional(),
    Document: z.boolean().optional(),
    Invoice: z.boolean().optional(),
    TaxResidenceCert: z.boolean().optional(),
    TaxResidenceSend: z.boolean().optional(),
    Title: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientSelect>;

export const ClientFindManySelectZodSchema = z.object({
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
    Author: z.boolean().optional(),
    ClientContact: z.boolean().optional(),
    Document: z.boolean().optional(),
    Invoice: z.boolean().optional(),
    TaxResidenceCert: z.boolean().optional(),
    TaxResidenceSend: z.boolean().optional(),
    Title: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ClientFindManySchema: z.ZodType<Prisma.ClientFindManyArgs> = z.object({ select: ClientFindManySelectSchema.optional(), include: z.lazy(() => ClientIncludeObjectSchema.optional()), orderBy: z.union([ClientOrderByWithRelationInputObjectSchema, ClientOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientWhereInputObjectSchema.optional(), cursor: ClientWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientFindManyArgs>;

export const ClientFindManyZodSchema = z.object({ select: ClientFindManySelectSchema.optional(), include: z.lazy(() => ClientIncludeObjectSchema.optional()), orderBy: z.union([ClientOrderByWithRelationInputObjectSchema, ClientOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientWhereInputObjectSchema.optional(), cursor: ClientWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array()]).optional() }).strict();