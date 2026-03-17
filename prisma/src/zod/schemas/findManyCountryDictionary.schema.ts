import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionaryOrderByWithRelationInputObjectSchema as CountryDictionaryOrderByWithRelationInputObjectSchema } from './objects/CountryDictionaryOrderByWithRelationInput.schema';
import { CountryDictionaryWhereInputObjectSchema as CountryDictionaryWhereInputObjectSchema } from './objects/CountryDictionaryWhereInput.schema';
import { CountryDictionaryWhereUniqueInputObjectSchema as CountryDictionaryWhereUniqueInputObjectSchema } from './objects/CountryDictionaryWhereUniqueInput.schema';
import { CountryDictionaryScalarFieldEnumSchema } from './enums/CountryDictionaryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CountryDictionaryFindManySelectSchema: z.ZodType<Prisma.CountryDictionarySelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CountryDictionarySelect>;

export const CountryDictionaryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const CountryDictionaryFindManySchema: z.ZodType<Prisma.CountryDictionaryFindManyArgs> = z.object({ select: CountryDictionaryFindManySelectSchema.optional(),  orderBy: z.union([CountryDictionaryOrderByWithRelationInputObjectSchema, CountryDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryDictionaryWhereInputObjectSchema.optional(), cursor: CountryDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryDictionaryScalarFieldEnumSchema, CountryDictionaryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryFindManyArgs>;

export const CountryDictionaryFindManyZodSchema = z.object({ select: CountryDictionaryFindManySelectSchema.optional(),  orderBy: z.union([CountryDictionaryOrderByWithRelationInputObjectSchema, CountryDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryDictionaryWhereInputObjectSchema.optional(), cursor: CountryDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryDictionaryScalarFieldEnumSchema, CountryDictionaryScalarFieldEnumSchema.array()]).optional() }).strict();