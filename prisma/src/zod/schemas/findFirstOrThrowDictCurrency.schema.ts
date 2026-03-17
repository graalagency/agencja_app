import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencyOrderByWithRelationInputObjectSchema as DictCurrencyOrderByWithRelationInputObjectSchema } from './objects/DictCurrencyOrderByWithRelationInput.schema';
import { DictCurrencyWhereInputObjectSchema as DictCurrencyWhereInputObjectSchema } from './objects/DictCurrencyWhereInput.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';
import { DictCurrencyScalarFieldEnumSchema } from './enums/DictCurrencyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DictCurrencyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DictCurrencySelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DictCurrencySelect>;

export const DictCurrencyFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DictCurrencyFindFirstOrThrowSchema: z.ZodType<Prisma.DictCurrencyFindFirstOrThrowArgs> = z.object({ select: DictCurrencyFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([DictCurrencyOrderByWithRelationInputObjectSchema, DictCurrencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCurrencyWhereInputObjectSchema.optional(), cursor: DictCurrencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCurrencyScalarFieldEnumSchema, DictCurrencyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyFindFirstOrThrowArgs>;

export const DictCurrencyFindFirstOrThrowZodSchema = z.object({ select: DictCurrencyFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([DictCurrencyOrderByWithRelationInputObjectSchema, DictCurrencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCurrencyWhereInputObjectSchema.optional(), cursor: DictCurrencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCurrencyScalarFieldEnumSchema, DictCurrencyScalarFieldEnumSchema.array()]).optional() }).strict();