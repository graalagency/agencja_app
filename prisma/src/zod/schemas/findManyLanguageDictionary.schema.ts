import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionaryOrderByWithRelationInputObjectSchema as LanguageDictionaryOrderByWithRelationInputObjectSchema } from './objects/LanguageDictionaryOrderByWithRelationInput.schema';
import { LanguageDictionaryWhereInputObjectSchema as LanguageDictionaryWhereInputObjectSchema } from './objects/LanguageDictionaryWhereInput.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';
import { LanguageDictionaryScalarFieldEnumSchema } from './enums/LanguageDictionaryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LanguageDictionaryFindManySelectSchema: z.ZodType<Prisma.LanguageDictionarySelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LanguageDictionarySelect>;

export const LanguageDictionaryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const LanguageDictionaryFindManySchema: z.ZodType<Prisma.LanguageDictionaryFindManyArgs> = z.object({ select: LanguageDictionaryFindManySelectSchema.optional(),  orderBy: z.union([LanguageDictionaryOrderByWithRelationInputObjectSchema, LanguageDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageDictionaryWhereInputObjectSchema.optional(), cursor: LanguageDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageDictionaryScalarFieldEnumSchema, LanguageDictionaryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryFindManyArgs>;

export const LanguageDictionaryFindManyZodSchema = z.object({ select: LanguageDictionaryFindManySelectSchema.optional(),  orderBy: z.union([LanguageDictionaryOrderByWithRelationInputObjectSchema, LanguageDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageDictionaryWhereInputObjectSchema.optional(), cursor: LanguageDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageDictionaryScalarFieldEnumSchema, LanguageDictionaryScalarFieldEnumSchema.array()]).optional() }).strict();