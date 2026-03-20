import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './objects/PublisherContactSelect.schema';
import { PublisherContactCreateManyInputObjectSchema as PublisherContactCreateManyInputObjectSchema } from './objects/PublisherContactCreateManyInput.schema';

export const PublisherContactCreateManyAndReturnSchema: z.ZodType<Prisma.PublisherContactCreateManyAndReturnArgs> = z.object({ select: PublisherContactSelectObjectSchema.optional(), data: z.union([ PublisherContactCreateManyInputObjectSchema, z.array(PublisherContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PublisherContactCreateManyAndReturnArgs>;

export const PublisherContactCreateManyAndReturnZodSchema = z.object({ select: PublisherContactSelectObjectSchema.optional(), data: z.union([ PublisherContactCreateManyInputObjectSchema, z.array(PublisherContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();