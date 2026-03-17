import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';

export const PublisherFindUniqueSchema: z.ZodType<Prisma.PublisherFindUniqueArgs> = z.object({ select: PublisherSelectObjectSchema.optional(),  where: PublisherWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublisherFindUniqueArgs>;

export const PublisherFindUniqueZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(),  where: PublisherWhereUniqueInputObjectSchema }).strict();