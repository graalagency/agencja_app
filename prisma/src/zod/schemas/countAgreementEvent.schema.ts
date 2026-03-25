import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventOrderByWithRelationInputObjectSchema as AgreementEventOrderByWithRelationInputObjectSchema } from './objects/AgreementEventOrderByWithRelationInput.schema';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './objects/AgreementEventWhereInput.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './objects/AgreementEventWhereUniqueInput.schema';
import { AgreementEventCountAggregateInputObjectSchema as AgreementEventCountAggregateInputObjectSchema } from './objects/AgreementEventCountAggregateInput.schema';

export const AgreementEventCountSchema: z.ZodType<Prisma.AgreementEventCountArgs> = z.object({ orderBy: z.union([AgreementEventOrderByWithRelationInputObjectSchema, AgreementEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementEventWhereInputObjectSchema.optional(), cursor: AgreementEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgreementEventCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventCountArgs>;

export const AgreementEventCountZodSchema = z.object({ orderBy: z.union([AgreementEventOrderByWithRelationInputObjectSchema, AgreementEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementEventWhereInputObjectSchema.optional(), cursor: AgreementEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgreementEventCountAggregateInputObjectSchema ]).optional() }).strict();