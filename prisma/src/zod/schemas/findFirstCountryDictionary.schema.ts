import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionaryOrderByWithRelationInputObjectSchema as CountryDictionaryOrderByWithRelationInputObjectSchema } from './objects/CountryDictionaryOrderByWithRelationInput.schema';
import { CountryDictionaryWhereInputObjectSchema as CountryDictionaryWhereInputObjectSchema } from './objects/CountryDictionaryWhereInput.schema';
import { CountryDictionaryWhereUniqueInputObjectSchema as CountryDictionaryWhereUniqueInputObjectSchema } from './objects/CountryDictionaryWhereUniqueInput.schema';
import { CountryDictionaryScalarFieldEnumSchema } from './enums/CountryDictionaryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CountryDictionaryFindFirstSelectSchema: z.ZodType<Prisma.CountryDictionarySelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CountryDictionarySelect>;

export const CountryDictionaryFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const CountryDictionaryFindFirstSchema: z.ZodType<Prisma.CountryDictionaryFindFirstArgs> = z.object({ select: CountryDictionaryFindFirstSelectSchema.optional(),  orderBy: z.union([CountryDictionaryOrderByWithRelationInputObjectSchema, CountryDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryDictionaryWhereInputObjectSchema.optional(), cursor: CountryDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryDictionaryScalarFieldEnumSchema, CountryDictionaryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryFindFirstArgs>;

export const CountryDictionaryFindFirstZodSchema = z.object({ select: CountryDictionaryFindFirstSelectSchema.optional(),  orderBy: z.union([CountryDictionaryOrderByWithRelationInputObjectSchema, CountryDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryDictionaryWhereInputObjectSchema.optional(), cursor: CountryDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryDictionaryScalarFieldEnumSchema, CountryDictionaryScalarFieldEnumSchema.array()]).optional() }).strict();