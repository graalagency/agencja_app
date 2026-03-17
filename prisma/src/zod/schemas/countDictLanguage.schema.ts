import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageOrderByWithRelationInputObjectSchema as DictLanguageOrderByWithRelationInputObjectSchema } from './objects/DictLanguageOrderByWithRelationInput.schema';
import { DictLanguageWhereInputObjectSchema as DictLanguageWhereInputObjectSchema } from './objects/DictLanguageWhereInput.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';
import { DictLanguageCountAggregateInputObjectSchema as DictLanguageCountAggregateInputObjectSchema } from './objects/DictLanguageCountAggregateInput.schema';

export const DictLanguageCountSchema: z.ZodType<Prisma.DictLanguageCountArgs> = z.object({ orderBy: z.union([DictLanguageOrderByWithRelationInputObjectSchema, DictLanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictLanguageWhereInputObjectSchema.optional(), cursor: DictLanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictLanguageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageCountArgs>;

export const DictLanguageCountZodSchema = z.object({ orderBy: z.union([DictLanguageOrderByWithRelationInputObjectSchema, DictLanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictLanguageWhereInputObjectSchema.optional(), cursor: DictLanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictLanguageCountAggregateInputObjectSchema ]).optional() }).strict();