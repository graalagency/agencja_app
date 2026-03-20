import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleOrderByWithRelationInputObjectSchema as TitleOrderByWithRelationInputObjectSchema } from './objects/TitleOrderByWithRelationInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';
import { TitleCountAggregateInputObjectSchema as TitleCountAggregateInputObjectSchema } from './objects/TitleCountAggregateInput.schema';
import { TitleMinAggregateInputObjectSchema as TitleMinAggregateInputObjectSchema } from './objects/TitleMinAggregateInput.schema';
import { TitleMaxAggregateInputObjectSchema as TitleMaxAggregateInputObjectSchema } from './objects/TitleMaxAggregateInput.schema';
import { TitleAvgAggregateInputObjectSchema as TitleAvgAggregateInputObjectSchema } from './objects/TitleAvgAggregateInput.schema';
import { TitleSumAggregateInputObjectSchema as TitleSumAggregateInputObjectSchema } from './objects/TitleSumAggregateInput.schema';

export const TitleAggregateSchema: z.ZodType<Prisma.TitleAggregateArgs> = z.object({ orderBy: z.union([TitleOrderByWithRelationInputObjectSchema, TitleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleWhereInputObjectSchema.optional(), cursor: TitleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TitleCountAggregateInputObjectSchema ]).optional(), _min: TitleMinAggregateInputObjectSchema.optional(), _max: TitleMaxAggregateInputObjectSchema.optional(), _avg: TitleAvgAggregateInputObjectSchema.optional(), _sum: TitleSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleAggregateArgs>;

export const TitleAggregateZodSchema = z.object({ orderBy: z.union([TitleOrderByWithRelationInputObjectSchema, TitleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleWhereInputObjectSchema.optional(), cursor: TitleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TitleCountAggregateInputObjectSchema ]).optional(), _min: TitleMinAggregateInputObjectSchema.optional(), _max: TitleMaxAggregateInputObjectSchema.optional(), _avg: TitleAvgAggregateInputObjectSchema.optional(), _sum: TitleSumAggregateInputObjectSchema.optional() }).strict();