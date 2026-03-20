import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherUpdateManyMutationInputObjectSchema as PublisherUpdateManyMutationInputObjectSchema } from './objects/PublisherUpdateManyMutationInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './objects/PublisherWhereInput.schema';

export const PublisherUpdateManyAndReturnSchema: z.ZodType<Prisma.PublisherUpdateManyAndReturnArgs> = z.object({ select: PublisherSelectObjectSchema.optional(), data: PublisherUpdateManyMutationInputObjectSchema, where: PublisherWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublisherUpdateManyAndReturnArgs>;

export const PublisherUpdateManyAndReturnZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(), data: PublisherUpdateManyMutationInputObjectSchema, where: PublisherWhereInputObjectSchema.optional() }).strict();