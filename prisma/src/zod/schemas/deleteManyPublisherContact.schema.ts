import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactWhereInputObjectSchema as PublisherContactWhereInputObjectSchema } from './objects/PublisherContactWhereInput.schema';

export const PublisherContactDeleteManySchema: z.ZodType<Prisma.PublisherContactDeleteManyArgs> = z.object({ where: PublisherContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublisherContactDeleteManyArgs>;

export const PublisherContactDeleteManyZodSchema = z.object({ where: PublisherContactWhereInputObjectSchema.optional() }).strict();