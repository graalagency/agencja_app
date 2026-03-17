import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionaryOrderByWithRelationInputObjectSchema as CountryDictionaryOrderByWithRelationInputObjectSchema } from './objects/CountryDictionaryOrderByWithRelationInput.schema';
import { CountryDictionaryWhereInputObjectSchema as CountryDictionaryWhereInputObjectSchema } from './objects/CountryDictionaryWhereInput.schema';
import { CountryDictionaryWhereUniqueInputObjectSchema as CountryDictionaryWhereUniqueInputObjectSchema } from './objects/CountryDictionaryWhereUniqueInput.schema';
import { CountryDictionaryScalarFieldEnumSchema } from './enums/CountryDictionaryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CountryDictionaryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CountryDictionarySelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CountryDictionarySelect>;

export const CountryDictionaryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const CountryDictionaryFindFirstOrThrowSchema: z.ZodType<Prisma.CountryDictionaryFindFirstOrThrowArgs> = z.object({ select: CountryDictionaryFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([CountryDictionaryOrderByWithRelationInputObjectSchema, CountryDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryDictionaryWhereInputObjectSchema.optional(), cursor: CountryDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryDictionaryScalarFieldEnumSchema, CountryDictionaryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryFindFirstOrThrowArgs>;

export const CountryDictionaryFindFirstOrThrowZodSchema = z.object({ select: CountryDictionaryFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([CountryDictionaryOrderByWithRelationInputObjectSchema, CountryDictionaryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryDictionaryWhereInputObjectSchema.optional(), cursor: CountryDictionaryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryDictionaryScalarFieldEnumSchema, CountryDictionaryScalarFieldEnumSchema.array()]).optional() }).strict();