import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageOrderByWithRelationInputObjectSchema as DictLanguageOrderByWithRelationInputObjectSchema } from './objects/DictLanguageOrderByWithRelationInput.schema';
import { DictLanguageWhereInputObjectSchema as DictLanguageWhereInputObjectSchema } from './objects/DictLanguageWhereInput.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';
import { DictLanguageScalarFieldEnumSchema } from './enums/DictLanguageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DictLanguageFindManySelectSchema: z.ZodType<Prisma.DictLanguageSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DictLanguageSelect>;

export const DictLanguageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DictLanguageFindManySchema: z.ZodType<Prisma.DictLanguageFindManyArgs> = z.object({ select: DictLanguageFindManySelectSchema.optional(),  orderBy: z.union([DictLanguageOrderByWithRelationInputObjectSchema, DictLanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictLanguageWhereInputObjectSchema.optional(), cursor: DictLanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictLanguageScalarFieldEnumSchema, DictLanguageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageFindManyArgs>;

export const DictLanguageFindManyZodSchema = z.object({ select: DictLanguageFindManySelectSchema.optional(),  orderBy: z.union([DictLanguageOrderByWithRelationInputObjectSchema, DictLanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictLanguageWhereInputObjectSchema.optional(), cursor: DictLanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictLanguageScalarFieldEnumSchema, DictLanguageScalarFieldEnumSchema.array()]).optional() }).strict();