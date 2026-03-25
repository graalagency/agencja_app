import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './objects/AgreementOrderByWithRelationInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './objects/AgreementWhereInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';
import { AgreementCountAggregateInputObjectSchema as AgreementCountAggregateInputObjectSchema } from './objects/AgreementCountAggregateInput.schema';

export const AgreementCountSchema: z.ZodType<Prisma.AgreementCountArgs> = z.object({ orderBy: z.union([AgreementOrderByWithRelationInputObjectSchema, AgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementWhereInputObjectSchema.optional(), cursor: AgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgreementCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementCountArgs>;

export const AgreementCountZodSchema = z.object({ orderBy: z.union([AgreementOrderByWithRelationInputObjectSchema, AgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementWhereInputObjectSchema.optional(), cursor: AgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgreementCountAggregateInputObjectSchema ]).optional() }).strict();