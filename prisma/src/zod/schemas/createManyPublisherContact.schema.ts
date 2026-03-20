import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactCreateManyInputObjectSchema as PublisherContactCreateManyInputObjectSchema } from './objects/PublisherContactCreateManyInput.schema';

export const PublisherContactCreateManySchema: z.ZodType<Prisma.PublisherContactCreateManyArgs> = z.object({ data: z.union([ PublisherContactCreateManyInputObjectSchema, z.array(PublisherContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PublisherContactCreateManyArgs>;

export const PublisherContactCreateManyZodSchema = z.object({ data: z.union([ PublisherContactCreateManyInputObjectSchema, z.array(PublisherContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();