import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './objects/PublisherContactSelect.schema';
import { PublisherContactUpdateManyMutationInputObjectSchema as PublisherContactUpdateManyMutationInputObjectSchema } from './objects/PublisherContactUpdateManyMutationInput.schema';
import { PublisherContactWhereInputObjectSchema as PublisherContactWhereInputObjectSchema } from './objects/PublisherContactWhereInput.schema';

export const PublisherContactUpdateManyAndReturnSchema: z.ZodType<Prisma.PublisherContactUpdateManyAndReturnArgs> = z.object({ select: PublisherContactSelectObjectSchema.optional(), data: PublisherContactUpdateManyMutationInputObjectSchema, where: PublisherContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublisherContactUpdateManyAndReturnArgs>;

export const PublisherContactUpdateManyAndReturnZodSchema = z.object({ select: PublisherContactSelectObjectSchema.optional(), data: PublisherContactUpdateManyMutationInputObjectSchema, where: PublisherContactWhereInputObjectSchema.optional() }).strict();