import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './objects/PublisherOrderByWithRelationInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './objects/PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';
import { PublisherCountAggregateInputObjectSchema as PublisherCountAggregateInputObjectSchema } from './objects/PublisherCountAggregateInput.schema';

export const PublisherCountSchema: z.ZodType<Prisma.PublisherCountArgs> = z.object({ orderBy: z.union([PublisherOrderByWithRelationInputObjectSchema, PublisherOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherWhereInputObjectSchema.optional(), cursor: PublisherWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PublisherCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PublisherCountArgs>;

export const PublisherCountZodSchema = z.object({ orderBy: z.union([PublisherOrderByWithRelationInputObjectSchema, PublisherOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherWhereInputObjectSchema.optional(), cursor: PublisherWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PublisherCountAggregateInputObjectSchema ]).optional() }).strict();