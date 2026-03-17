import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencyOrderByWithRelationInputObjectSchema as DictCurrencyOrderByWithRelationInputObjectSchema } from './objects/DictCurrencyOrderByWithRelationInput.schema';
import { DictCurrencyWhereInputObjectSchema as DictCurrencyWhereInputObjectSchema } from './objects/DictCurrencyWhereInput.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';
import { DictCurrencyCountAggregateInputObjectSchema as DictCurrencyCountAggregateInputObjectSchema } from './objects/DictCurrencyCountAggregateInput.schema';

export const DictCurrencyCountSchema: z.ZodType<Prisma.DictCurrencyCountArgs> = z.object({ orderBy: z.union([DictCurrencyOrderByWithRelationInputObjectSchema, DictCurrencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCurrencyWhereInputObjectSchema.optional(), cursor: DictCurrencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCurrencyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyCountArgs>;

export const DictCurrencyCountZodSchema = z.object({ orderBy: z.union([DictCurrencyOrderByWithRelationInputObjectSchema, DictCurrencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCurrencyWhereInputObjectSchema.optional(), cursor: DictCurrencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCurrencyCountAggregateInputObjectSchema ]).optional() }).strict();