import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountryOrderByWithRelationInputObjectSchema as DictCountryOrderByWithRelationInputObjectSchema } from './objects/DictCountryOrderByWithRelationInput.schema';
import { DictCountryWhereInputObjectSchema as DictCountryWhereInputObjectSchema } from './objects/DictCountryWhereInput.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';
import { DictCountryCountAggregateInputObjectSchema as DictCountryCountAggregateInputObjectSchema } from './objects/DictCountryCountAggregateInput.schema';

export const DictCountryCountSchema: z.ZodType<Prisma.DictCountryCountArgs> = z.object({ orderBy: z.union([DictCountryOrderByWithRelationInputObjectSchema, DictCountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCountryWhereInputObjectSchema.optional(), cursor: DictCountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCountryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryCountArgs>;

export const DictCountryCountZodSchema = z.object({ orderBy: z.union([DictCountryOrderByWithRelationInputObjectSchema, DictCountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DictCountryWhereInputObjectSchema.optional(), cursor: DictCountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCountryCountAggregateInputObjectSchema ]).optional() }).strict();