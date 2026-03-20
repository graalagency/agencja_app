import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorOrderByWithRelationInputObjectSchema as TitleAuthorOrderByWithRelationInputObjectSchema } from './objects/TitleAuthorOrderByWithRelationInput.schema';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './objects/TitleAuthorWhereInput.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './objects/TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorCountAggregateInputObjectSchema as TitleAuthorCountAggregateInputObjectSchema } from './objects/TitleAuthorCountAggregateInput.schema';

export const TitleAuthorCountSchema: z.ZodType<Prisma.TitleAuthorCountArgs> = z.object({ orderBy: z.union([TitleAuthorOrderByWithRelationInputObjectSchema, TitleAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleAuthorWhereInputObjectSchema.optional(), cursor: TitleAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TitleAuthorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorCountArgs>;

export const TitleAuthorCountZodSchema = z.object({ orderBy: z.union([TitleAuthorOrderByWithRelationInputObjectSchema, TitleAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleAuthorWhereInputObjectSchema.optional(), cursor: TitleAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TitleAuthorCountAggregateInputObjectSchema ]).optional() }).strict();