import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleOrderByWithRelationInputObjectSchema as TitleOrderByWithRelationInputObjectSchema } from './objects/TitleOrderByWithRelationInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';
import { TitleCountAggregateInputObjectSchema as TitleCountAggregateInputObjectSchema } from './objects/TitleCountAggregateInput.schema';

export const TitleCountSchema: z.ZodType<Prisma.TitleCountArgs> = z.object({ orderBy: z.union([TitleOrderByWithRelationInputObjectSchema, TitleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleWhereInputObjectSchema.optional(), cursor: TitleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TitleCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TitleCountArgs>;

export const TitleCountZodSchema = z.object({ orderBy: z.union([TitleOrderByWithRelationInputObjectSchema, TitleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleWhereInputObjectSchema.optional(), cursor: TitleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TitleCountAggregateInputObjectSchema ]).optional() }).strict();