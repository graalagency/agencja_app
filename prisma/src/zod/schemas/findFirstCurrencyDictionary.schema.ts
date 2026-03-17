import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionaryOrderByWithRelationInputObjectSchema as CurrencyDictionaryOrderByWithRelationInputObjectSchema } from './objects/CurrencyDictionaryOrderByWithRelationInput.schema';
import { CurrencyDictionaryWhereInputObjectSchema as CurrencyDictionaryWhereInputObjectSchema } from './objects/CurrencyDictionaryWhereInput.schema';
import { CurrencyDictionaryWhereUniqueInputObjectSchema as CurrencyDictionaryWhereUniqueInputObjectSchema } from './objects/CurrencyDictionaryWhereUniqueInput.schema';
import { CurrencyDictionaryScalarFieldEnumSchema } from './enums/CurrencyDictionaryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CurrencyDictionaryFindFirstSelectSchema: z.ZodType<Prisma.CurrencyDictionarySelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionarySelect>;

export const CurrencyDictionaryFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const CurrencyDictionaryFindFirstSchema: z.ZodType<Prisma.CurrencyDictionaryFindFirstArgs> = z.object({ select: CurrencyDictionaryFindFirstSelectSchema.optional(),  orderBy: z.union([CurrencyDictionaryOrderByWithRelationInputObjectSchema, CurrencyDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CurrencyDictionaryWhereInputObjectSchema.optional(), cursor: CurrencyDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CurrencyDictionaryScalarFieldEnumSchema, CurrencyDictionaryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryFindFirstArgs>;

export const CurrencyDictionaryFindFirstZodSchema = z.object({ select: CurrencyDictionaryFindFirstSelectSchema.optional(),  orderBy: z.union([CurrencyDictionaryOrderByWithRelationInputObjectSchema, CurrencyDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CurrencyDictionaryWhereInputObjectSchema.optional(), cursor: CurrencyDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CurrencyDictionaryScalarFieldEnumSchema, CurrencyDictionaryScalarFieldEnumSchema.array()]).optional() }).strict();