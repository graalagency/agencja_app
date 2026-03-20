import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';
import { TitleOrderByWithAggregationInputObjectSchema as TitleOrderByWithAggregationInputObjectSchema } from './objects/TitleOrderByWithAggregationInput.schema';
import { TitleScalarWhereWithAggregatesInputObjectSchema as TitleScalarWhereWithAggregatesInputObjectSchema } from './objects/TitleScalarWhereWithAggregatesInput.schema';
import { TitleScalarFieldEnumSchema } from './enums/TitleScalarFieldEnum.schema';
import { TitleCountAggregateInputObjectSchema as TitleCountAggregateInputObjectSchema } from './objects/TitleCountAggregateInput.schema';
import { TitleMinAggregateInputObjectSchema as TitleMinAggregateInputObjectSchema } from './objects/TitleMinAggregateInput.schema';
import { TitleMaxAggregateInputObjectSchema as TitleMaxAggregateInputObjectSchema } from './objects/TitleMaxAggregateInput.schema';
import { TitleAvgAggregateInputObjectSchema as TitleAvgAggregateInputObjectSchema } from './objects/TitleAvgAggregateInput.schema';
import { TitleSumAggregateInputObjectSchema as TitleSumAggregateInputObjectSchema } from './objects/TitleSumAggregateInput.schema';

export const TitleGroupBySchema: z.ZodType<Prisma.TitleGroupByArgs> = z.object({ where: TitleWhereInputObjectSchema.optional(), orderBy: z.union([TitleOrderByWithAggregationInputObjectSchema, TitleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TitleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TitleScalarFieldEnumSchema), _count: z.union([ z.literal(true), TitleCountAggregateInputObjectSchema ]).optional(), _min: TitleMinAggregateInputObjectSchema.optional(), _max: TitleMaxAggregateInputObjectSchema.optional(), _avg: TitleAvgAggregateInputObjectSchema.optional(), _sum: TitleSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleGroupByArgs>;

export const TitleGroupByZodSchema = z.object({ where: TitleWhereInputObjectSchema.optional(), orderBy: z.union([TitleOrderByWithAggregationInputObjectSchema, TitleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TitleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TitleScalarFieldEnumSchema), _count: z.union([ z.literal(true), TitleCountAggregateInputObjectSchema ]).optional(), _min: TitleMinAggregateInputObjectSchema.optional(), _max: TitleMaxAggregateInputObjectSchema.optional(), _avg: TitleAvgAggregateInputObjectSchema.optional(), _sum: TitleSumAggregateInputObjectSchema.optional() }).strict();