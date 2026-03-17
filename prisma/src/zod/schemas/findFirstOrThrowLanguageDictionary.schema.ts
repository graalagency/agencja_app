import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionaryOrderByWithRelationInputObjectSchema as LanguageDictionaryOrderByWithRelationInputObjectSchema } from './objects/LanguageDictionaryOrderByWithRelationInput.schema';
import { LanguageDictionaryWhereInputObjectSchema as LanguageDictionaryWhereInputObjectSchema } from './objects/LanguageDictionaryWhereInput.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';
import { LanguageDictionaryScalarFieldEnumSchema } from './enums/LanguageDictionaryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LanguageDictionaryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LanguageDictionarySelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LanguageDictionarySelect>;

export const LanguageDictionaryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const LanguageDictionaryFindFirstOrThrowSchema: z.ZodType<Prisma.LanguageDictionaryFindFirstOrThrowArgs> = z.object({ select: LanguageDictionaryFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([LanguageDictionaryOrderByWithRelationInputObjectSchema, LanguageDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageDictionaryWhereInputObjectSchema.optional(), cursor: LanguageDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageDictionaryScalarFieldEnumSchema, LanguageDictionaryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryFindFirstOrThrowArgs>;

export const LanguageDictionaryFindFirstOrThrowZodSchema = z.object({ select: LanguageDictionaryFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([LanguageDictionaryOrderByWithRelationInputObjectSchema, LanguageDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageDictionaryWhereInputObjectSchema.optional(), cursor: LanguageDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageDictionaryScalarFieldEnumSchema, LanguageDictionaryScalarFieldEnumSchema.array()]).optional() }).strict();