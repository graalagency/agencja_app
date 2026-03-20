import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './objects/PublisherContactSelect.schema';
import { PublisherContactIncludeObjectSchema as PublisherContactIncludeObjectSchema } from './objects/PublisherContactInclude.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './objects/PublisherContactWhereUniqueInput.schema';

export const PublisherContactFindUniqueOrThrowSchema: z.ZodType<Prisma.PublisherContactFindUniqueOrThrowArgs> = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), where: PublisherContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublisherContactFindUniqueOrThrowArgs>;

export const PublisherContactFindUniqueOrThrowZodSchema = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), where: PublisherContactWhereUniqueInputObjectSchema }).strict();