import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertIncludeObjectSchema as TaxResidenceCertIncludeObjectSchema } from './objects/TaxResidenceCertInclude.schema';
import { TaxResidenceCertOrderByWithRelationInputObjectSchema as TaxResidenceCertOrderByWithRelationInputObjectSchema } from './objects/TaxResidenceCertOrderByWithRelationInput.schema';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './objects/TaxResidenceCertWhereInput.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './objects/TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertScalarFieldEnumSchema } from './enums/TaxResidenceCertScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaxResidenceCertFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TaxResidenceCertSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    validDate: z.boolean().optional(),
    requestDate: z.boolean().optional(),
    receiveDate: z.boolean().optional(),
    hasCert: z.boolean().optional(),
    notes: z.boolean().optional(),
    fileData: z.boolean().optional(),
    fileName: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Client: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    SendLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertSelect>;

export const TaxResidenceCertFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    validDate: z.boolean().optional(),
    requestDate: z.boolean().optional(),
    receiveDate: z.boolean().optional(),
    hasCert: z.boolean().optional(),
    notes: z.boolean().optional(),
    fileData: z.boolean().optional(),
    fileName: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Client: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    SendLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaxResidenceCertFindFirstOrThrowSchema: z.ZodType<Prisma.TaxResidenceCertFindFirstOrThrowArgs> = z.object({ select: TaxResidenceCertFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TaxResidenceCertIncludeObjectSchema.optional()), orderBy: z.union([TaxResidenceCertOrderByWithRelationInputObjectSchema, TaxResidenceCertOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaxResidenceCertWhereInputObjectSchema.optional(), cursor: TaxResidenceCertWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaxResidenceCertScalarFieldEnumSchema, TaxResidenceCertScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertFindFirstOrThrowArgs>;

export const TaxResidenceCertFindFirstOrThrowZodSchema = z.object({ select: TaxResidenceCertFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TaxResidenceCertIncludeObjectSchema.optional()), orderBy: z.union([TaxResidenceCertOrderByWithRelationInputObjectSchema, TaxResidenceCertOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaxResidenceCertWhereInputObjectSchema.optional(), cursor: TaxResidenceCertWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaxResidenceCertScalarFieldEnumSchema, TaxResidenceCertScalarFieldEnumSchema.array()]).optional() }).strict();