import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencyOrderByWithRelationInputObjectSchema as DictCurrencyOrderByWithRelationInputObjectSchema } from './objects/DictCurrencyOrderByWithRelationInput.schema';
import { DictCurrencyWhereInputObjectSchema as DictCurrencyWhereInputObjectSchema } from './objects/DictCurrencyWhereInput.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';
import { DictCurrencyScalarFieldEnumSchema } from './enums/DictCurrencyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DictCurrencyFindManySelectSchema: z.ZodType<Prisma.DictCurrencySelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DictCurrencySelect>;

export const DictCurrencyFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DictCurrencyFindManySchema: z.ZodType<Prisma.DictCurrencyFindManyArgs> = z.object({ select: DictCurrencyFindManySelectSchema.optional(),  orderBy: z.union([DictCurrencyOrderByWithRelationInputObjectSchema, DictCurrencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCurrencyWhereInputObjectSchema.optional(), cursor: DictCurrencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCurrencyScalarFieldEnumSchema, DictCurrencyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyFindManyArgs>;

export const DictCurrencyFindManyZodSchema = z.object({ select: DictCurrencyFindManySelectSchema.optional(),  orderBy: z.union([DictCurrencyOrderByWithRelationInputObjectSchema, DictCurrencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCurrencyWhereInputObjectSchema.optional(), cursor: DictCurrencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCurrencyScalarFieldEnumSchema, DictCurrencyScalarFieldEnumSchema.array()]).optional() }).strict();