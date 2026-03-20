import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendOrderByWithRelationInputObjectSchema as TaxResidenceSendOrderByWithRelationInputObjectSchema } from './objects/TaxResidenceSendOrderByWithRelationInput.schema';
import { TaxResidenceSendWhereInputObjectSchema as TaxResidenceSendWhereInputObjectSchema } from './objects/TaxResidenceSendWhereInput.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './objects/TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendScalarFieldEnumSchema } from './enums/TaxResidenceSendScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaxResidenceSendFindFirstSelectSchema: z.ZodType<Prisma.TaxResidenceSendSelect> = z.object({
    id: z.boolean().optional(),
    certId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    dateSend: z.boolean().optional(),
    sendOrig: z.boolean().optional(),
    sendCopy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Cert: z.boolean().optional(),
    Client: z.boolean().optional(),
    Publisher: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendSelect>;

export const TaxResidenceSendFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    certId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    dateSend: z.boolean().optional(),
    sendOrig: z.boolean().optional(),
    sendCopy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Cert: z.boolean().optional(),
    Client: z.boolean().optional(),
    Publisher: z.boolean().optional()
  }).strict();

export const TaxResidenceSendFindFirstSchema: z.ZodType<Prisma.TaxResidenceSendFindFirstArgs> = z.object({ select: TaxResidenceSendFindFirstSelectSchema.optional(), include: z.lazy(() => TaxResidenceSendIncludeObjectSchema.optional()), orderBy: z.union([TaxResidenceSendOrderByWithRelationInputObjectSchema, TaxResidenceSendOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaxResidenceSendWhereInputObjectSchema.optional(), cursor: TaxResidenceSendWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaxResidenceSendScalarFieldEnumSchema, TaxResidenceSendScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendFindFirstArgs>;

export const TaxResidenceSendFindFirstZodSchema = z.object({ select: TaxResidenceSendFindFirstSelectSchema.optional(), include: z.lazy(() => TaxResidenceSendIncludeObjectSchema.optional()), orderBy: z.union([TaxResidenceSendOrderByWithRelationInputObjectSchema, TaxResidenceSendOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaxResidenceSendWhereInputObjectSchema.optional(), cursor: TaxResidenceSendWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaxResidenceSendScalarFieldEnumSchema, TaxResidenceSendScalarFieldEnumSchema.array()]).optional() }).strict();