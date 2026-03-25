import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightOrderByWithRelationInputObjectSchema as AgreementRightOrderByWithRelationInputObjectSchema } from './objects/AgreementRightOrderByWithRelationInput.schema';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './objects/AgreementRightWhereInput.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';
import { AgreementRightScalarFieldEnumSchema } from './enums/AgreementRightScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgreementRightFindFirstSelectSchema: z.ZodType<Prisma.AgreementRightSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    rightFormId: z.boolean().optional(),
    priceTypeId: z.boolean().optional(),
    royPriceTypeId: z.boolean().optional(),
    royAccountIntervalId: z.boolean().optional(),
    distributionTypeId: z.boolean().optional(),
    Agreement: z.boolean().optional(),
    RoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgreementRightSelect>;

export const AgreementRightFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    rightFormId: z.boolean().optional(),
    priceTypeId: z.boolean().optional(),
    royPriceTypeId: z.boolean().optional(),
    royAccountIntervalId: z.boolean().optional(),
    distributionTypeId: z.boolean().optional(),
    Agreement: z.boolean().optional(),
    RoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AgreementRightFindFirstSchema: z.ZodType<Prisma.AgreementRightFindFirstArgs> = z.object({ select: AgreementRightFindFirstSelectSchema.optional(), include: z.lazy(() => AgreementRightIncludeObjectSchema.optional()), orderBy: z.union([AgreementRightOrderByWithRelationInputObjectSchema, AgreementRightOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementRightWhereInputObjectSchema.optional(), cursor: AgreementRightWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementRightScalarFieldEnumSchema, AgreementRightScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightFindFirstArgs>;

export const AgreementRightFindFirstZodSchema = z.object({ select: AgreementRightFindFirstSelectSchema.optional(), include: z.lazy(() => AgreementRightIncludeObjectSchema.optional()), orderBy: z.union([AgreementRightOrderByWithRelationInputObjectSchema, AgreementRightOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementRightWhereInputObjectSchema.optional(), cursor: AgreementRightWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementRightScalarFieldEnumSchema, AgreementRightScalarFieldEnumSchema.array()]).optional() }).strict();