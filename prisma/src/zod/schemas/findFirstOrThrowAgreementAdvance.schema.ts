import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceIncludeObjectSchema as AgreementAdvanceIncludeObjectSchema } from './objects/AgreementAdvanceInclude.schema';
import { AgreementAdvanceOrderByWithRelationInputObjectSchema as AgreementAdvanceOrderByWithRelationInputObjectSchema } from './objects/AgreementAdvanceOrderByWithRelationInput.schema';
import { AgreementAdvanceWhereInputObjectSchema as AgreementAdvanceWhereInputObjectSchema } from './objects/AgreementAdvanceWhereInput.schema';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './objects/AgreementAdvanceWhereUniqueInput.schema';
import { AgreementAdvanceScalarFieldEnumSchema } from './enums/AgreementAdvanceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgreementAdvanceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AgreementAdvanceSelect> = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    instalment: z.boolean().optional(),
    advTermId: z.boolean().optional(),
    advTypeId: z.boolean().optional(),
    amount: z.boolean().optional(),
    termDate: z.boolean().optional(),
    royaltyId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Agreement: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceSelect>;

export const AgreementAdvanceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sourceId: z.boolean().optional(),
    agreementId: z.boolean().optional(),
    instalment: z.boolean().optional(),
    advTermId: z.boolean().optional(),
    advTypeId: z.boolean().optional(),
    amount: z.boolean().optional(),
    termDate: z.boolean().optional(),
    royaltyId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Agreement: z.boolean().optional()
  }).strict();

export const AgreementAdvanceFindFirstOrThrowSchema: z.ZodType<Prisma.AgreementAdvanceFindFirstOrThrowArgs> = z.object({ select: AgreementAdvanceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AgreementAdvanceIncludeObjectSchema.optional()), orderBy: z.union([AgreementAdvanceOrderByWithRelationInputObjectSchema, AgreementAdvanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementAdvanceWhereInputObjectSchema.optional(), cursor: AgreementAdvanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementAdvanceScalarFieldEnumSchema, AgreementAdvanceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceFindFirstOrThrowArgs>;

export const AgreementAdvanceFindFirstOrThrowZodSchema = z.object({ select: AgreementAdvanceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AgreementAdvanceIncludeObjectSchema.optional()), orderBy: z.union([AgreementAdvanceOrderByWithRelationInputObjectSchema, AgreementAdvanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementAdvanceWhereInputObjectSchema.optional(), cursor: AgreementAdvanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementAdvanceScalarFieldEnumSchema, AgreementAdvanceScalarFieldEnumSchema.array()]).optional() }).strict();