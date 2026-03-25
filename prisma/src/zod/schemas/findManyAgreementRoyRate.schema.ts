import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './objects/AgreementRoyRateInclude.schema';
import { AgreementRoyRateOrderByWithRelationInputObjectSchema as AgreementRoyRateOrderByWithRelationInputObjectSchema } from './objects/AgreementRoyRateOrderByWithRelationInput.schema';
import { AgreementRoyRateWhereInputObjectSchema as AgreementRoyRateWhereInputObjectSchema } from './objects/AgreementRoyRateWhereInput.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './objects/AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateScalarFieldEnumSchema } from './enums/AgreementRoyRateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgreementRoyRateFindManySelectSchema: z.ZodType<Prisma.AgreementRoyRateSelect> = z.object({
    id: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    rightId: z.boolean().optional(),
    step: z.boolean().optional(),
    copiesMax: z.boolean().optional(),
    rate: z.boolean().optional(),
    Agreement: z.boolean().optional(),
    Right: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateSelect>;

export const AgreementRoyRateFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    rightId: z.boolean().optional(),
    step: z.boolean().optional(),
    copiesMax: z.boolean().optional(),
    rate: z.boolean().optional(),
    Agreement: z.boolean().optional(),
    Right: z.boolean().optional()
  }).strict();

export const AgreementRoyRateFindManySchema: z.ZodType<Prisma.AgreementRoyRateFindManyArgs> = z.object({ select: AgreementRoyRateFindManySelectSchema.optional(), include: z.lazy(() => AgreementRoyRateIncludeObjectSchema.optional()), orderBy: z.union([AgreementRoyRateOrderByWithRelationInputObjectSchema, AgreementRoyRateOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementRoyRateWhereInputObjectSchema.optional(), cursor: AgreementRoyRateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementRoyRateScalarFieldEnumSchema, AgreementRoyRateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateFindManyArgs>;

export const AgreementRoyRateFindManyZodSchema = z.object({ select: AgreementRoyRateFindManySelectSchema.optional(), include: z.lazy(() => AgreementRoyRateIncludeObjectSchema.optional()), orderBy: z.union([AgreementRoyRateOrderByWithRelationInputObjectSchema, AgreementRoyRateOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementRoyRateWhereInputObjectSchema.optional(), cursor: AgreementRoyRateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementRoyRateScalarFieldEnumSchema, AgreementRoyRateScalarFieldEnumSchema.array()]).optional() }).strict();