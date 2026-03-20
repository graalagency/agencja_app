import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherIncludeObjectSchema as PublisherIncludeObjectSchema } from './objects/PublisherInclude.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';

export const PublisherDeleteOneSchema: z.ZodType<Prisma.PublisherDeleteArgs> = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), where: PublisherWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublisherDeleteArgs>;

export const PublisherDeleteOneZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), where: PublisherWhereUniqueInputObjectSchema }).strict();