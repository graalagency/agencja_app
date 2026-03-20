import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactOrderByWithRelationInputObjectSchema as ClientContactOrderByWithRelationInputObjectSchema } from './objects/ClientContactOrderByWithRelationInput.schema';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './objects/ClientContactWhereInput.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './objects/ClientContactWhereUniqueInput.schema';
import { ClientContactCountAggregateInputObjectSchema as ClientContactCountAggregateInputObjectSchema } from './objects/ClientContactCountAggregateInput.schema';

export const ClientContactCountSchema: z.ZodType<Prisma.ClientContactCountArgs> = z.object({ orderBy: z.union([ClientContactOrderByWithRelationInputObjectSchema, ClientContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientContactWhereInputObjectSchema.optional(), cursor: ClientContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientContactCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactCountArgs>;

export const ClientContactCountZodSchema = z.object({ orderBy: z.union([ClientContactOrderByWithRelationInputObjectSchema, ClientContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientContactWhereInputObjectSchema.optional(), cursor: ClientContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientContactCountAggregateInputObjectSchema ]).optional() }).strict();