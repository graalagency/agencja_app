import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './objects/PublisherWhereInput.schema';

export const PublisherDeleteManySchema: z.ZodType<Prisma.PublisherDeleteManyArgs> = z.object({ where: PublisherWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublisherDeleteManyArgs>;

export const PublisherDeleteManyZodSchema = z.object({ where: PublisherWhereInputObjectSchema.optional() }).strict();