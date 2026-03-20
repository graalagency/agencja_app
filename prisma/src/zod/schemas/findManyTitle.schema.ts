import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './objects/TitleInclude.schema';
import { TitleOrderByWithRelationInputObjectSchema as TitleOrderByWithRelationInputObjectSchema } from './objects/TitleOrderByWithRelationInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';
import { TitleScalarFieldEnumSchema } from './enums/TitleScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TitleFindManySelectSchema: z.ZodType<Prisma.TitleSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    title: z.boolean().optional(),
    isbn: z.boolean().optional(),
    languageCode: z.boolean().optional(),
    classCode: z.boolean().optional(),
    edition: z.boolean().optional(),
    pages: z.boolean().optional(),
    copyrightYear: z.boolean().optional(),
    copyrightOwner: z.boolean().optional(),
    keywords: z.boolean().optional(),
    volume: z.boolean().optional(),
    totalVolumes: z.boolean().optional(),
    isHit: z.boolean().optional(),
    isCollection: z.boolean().optional(),
    isCD: z.boolean().optional(),
    notes: z.boolean().optional(),
    dateOfReceipt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Client: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    TitleAuthors: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TitleSelect>;

export const TitleFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    title: z.boolean().optional(),
    isbn: z.boolean().optional(),
    languageCode: z.boolean().optional(),
    classCode: z.boolean().optional(),
    edition: z.boolean().optional(),
    pages: z.boolean().optional(),
    copyrightYear: z.boolean().optional(),
    copyrightOwner: z.boolean().optional(),
    keywords: z.boolean().optional(),
    volume: z.boolean().optional(),
    totalVolumes: z.boolean().optional(),
    isHit: z.boolean().optional(),
    isCollection: z.boolean().optional(),
    isCD: z.boolean().optional(),
    notes: z.boolean().optional(),
    dateOfReceipt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Client: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    TitleAuthors: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TitleFindManySchema: z.ZodType<Prisma.TitleFindManyArgs> = z.object({ select: TitleFindManySelectSchema.optional(), include: z.lazy(() => TitleIncludeObjectSchema.optional()), orderBy: z.union([TitleOrderByWithRelationInputObjectSchema, TitleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleWhereInputObjectSchema.optional(), cursor: TitleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TitleScalarFieldEnumSchema, TitleScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TitleFindManyArgs>;

export const TitleFindManyZodSchema = z.object({ select: TitleFindManySelectSchema.optional(), include: z.lazy(() => TitleIncludeObjectSchema.optional()), orderBy: z.union([TitleOrderByWithRelationInputObjectSchema, TitleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleWhereInputObjectSchema.optional(), cursor: TitleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TitleScalarFieldEnumSchema, TitleScalarFieldEnumSchema.array()]).optional() }).strict();