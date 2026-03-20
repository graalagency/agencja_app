import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherIncludeObjectSchema as PublisherIncludeObjectSchema } from './objects/PublisherInclude.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';

export const PublisherFindUniqueOrThrowSchema: z.ZodType<Prisma.PublisherFindUniqueOrThrowArgs> = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), where: PublisherWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublisherFindUniqueOrThrowArgs>;

export const PublisherFindUniqueOrThrowZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), where: PublisherWhereUniqueInputObjectSchema }).strict();