import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountryOrderByWithRelationInputObjectSchema as DictCountryOrderByWithRelationInputObjectSchema } from './objects/DictCountryOrderByWithRelationInput.schema';
import { DictCountryWhereInputObjectSchema as DictCountryWhereInputObjectSchema } from './objects/DictCountryWhereInput.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';
import { DictCountryScalarFieldEnumSchema } from './enums/DictCountryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DictCountryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DictCountrySelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DictCountrySelect>;

export const DictCountryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    code: z.boolean().optional(),
    tax: z.boolean().optional(),
    eu: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DictCountryFindFirstOrThrowSchema: z.ZodType<Prisma.DictCountryFindFirstOrThrowArgs> = z.object({ select: DictCountryFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([DictCountryOrderByWithRelationInputObjectSchema, DictCountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCountryWhereInputObjectSchema.optional(), cursor: DictCountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCountryScalarFieldEnumSchema, DictCountryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryFindFirstOrThrowArgs>;

export const DictCountryFindFirstOrThrowZodSchema = z.object({ select: DictCountryFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([DictCountryOrderByWithRelationInputObjectSchema, DictCountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCountryWhereInputObjectSchema.optional(), cursor: DictCountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCountryScalarFieldEnumSchema, DictCountryScalarFieldEnumSchema.array()]).optional() }).strict();