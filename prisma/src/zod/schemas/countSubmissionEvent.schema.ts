import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionEventOrderByWithRelationInputObjectSchema as SubmissionEventOrderByWithRelationInputObjectSchema } from './objects/SubmissionEventOrderByWithRelationInput.schema';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './objects/SubmissionEventWhereInput.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './objects/SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventCountAggregateInputObjectSchema as SubmissionEventCountAggregateInputObjectSchema } from './objects/SubmissionEventCountAggregateInput.schema';

export const SubmissionEventCountSchema: z.ZodType<Prisma.SubmissionEventCountArgs> = z.object({ orderBy: z.union([SubmissionEventOrderByWithRelationInputObjectSchema, SubmissionEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionEventWhereInputObjectSchema.optional(), cursor: SubmissionEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubmissionEventCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionEventCountArgs>;

export const SubmissionEventCountZodSchema = z.object({ orderBy: z.union([SubmissionEventOrderByWithRelationInputObjectSchema, SubmissionEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionEventWhereInputObjectSchema.optional(), cursor: SubmissionEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubmissionEventCountAggregateInputObjectSchema ]).optional() }).strict();