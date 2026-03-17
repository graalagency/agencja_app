import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherCreateManyInputObjectSchema as PublisherCreateManyInputObjectSchema } from './objects/PublisherCreateManyInput.schema';

export const PublisherCreateManyAndReturnSchema: z.ZodType<Prisma.PublisherCreateManyAndReturnArgs> = z.object({ select: PublisherSelectObjectSchema.optional(), data: z.union([ PublisherCreateManyInputObjectSchema, z.array(PublisherCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PublisherCreateManyAndReturnArgs>;

export const PublisherCreateManyAndReturnZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(), data: z.union([ PublisherCreateManyInputObjectSchema, z.array(PublisherCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();