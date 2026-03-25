import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightOrderByWithRelationInputObjectSchema as AgreementRightOrderByWithRelationInputObjectSchema } from './objects/AgreementRightOrderByWithRelationInput.schema';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './objects/AgreementRightWhereInput.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';
import { AgreementRightCountAggregateInputObjectSchema as AgreementRightCountAggregateInputObjectSchema } from './objects/AgreementRightCountAggregateInput.schema';

export const AgreementRightCountSchema: z.ZodType<Prisma.AgreementRightCountArgs> = z.object({ orderBy: z.union([AgreementRightOrderByWithRelationInputObjectSchema, AgreementRightOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementRightWhereInputObjectSchema.optional(), cursor: AgreementRightWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgreementRightCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightCountArgs>;

export const AgreementRightCountZodSchema = z.object({ orderBy: z.union([AgreementRightOrderByWithRelationInputObjectSchema, AgreementRightOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementRightWhereInputObjectSchema.optional(), cursor: AgreementRightWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgreementRightCountAggregateInputObjectSchema ]).optional() }).strict();