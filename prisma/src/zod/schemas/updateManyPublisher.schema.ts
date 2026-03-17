import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherUpdateManyMutationInputObjectSchema as PublisherUpdateManyMutationInputObjectSchema } from './objects/PublisherUpdateManyMutationInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './objects/PublisherWhereInput.schema';

export const PublisherUpdateManySchema: z.ZodType<Prisma.PublisherUpdateManyArgs> = z.object({ data: PublisherUpdateManyMutationInputObjectSchema, where: PublisherWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublisherUpdateManyArgs>;

export const PublisherUpdateManyZodSchema = z.object({ data: PublisherUpdateManyMutationInputObjectSchema, where: PublisherWhereInputObjectSchema.optional() }).strict();