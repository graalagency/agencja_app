import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactUpdateManyMutationInputObjectSchema as PublisherContactUpdateManyMutationInputObjectSchema } from './objects/PublisherContactUpdateManyMutationInput.schema';
import { PublisherContactWhereInputObjectSchema as PublisherContactWhereInputObjectSchema } from './objects/PublisherContactWhereInput.schema';

export const PublisherContactUpdateManySchema: z.ZodType<Prisma.PublisherContactUpdateManyArgs> = z.object({ data: PublisherContactUpdateManyMutationInputObjectSchema, where: PublisherContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublisherContactUpdateManyArgs>;

export const PublisherContactUpdateManyZodSchema = z.object({ data: PublisherContactUpdateManyMutationInputObjectSchema, where: PublisherContactWhereInputObjectSchema.optional() }).strict();