import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherCreateManyInputObjectSchema as PublisherCreateManyInputObjectSchema } from './objects/PublisherCreateManyInput.schema';

export const PublisherCreateManySchema: z.ZodType<Prisma.PublisherCreateManyArgs> = z.object({ data: z.union([ PublisherCreateManyInputObjectSchema, z.array(PublisherCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PublisherCreateManyArgs>;

export const PublisherCreateManyZodSchema = z.object({ data: z.union([ PublisherCreateManyInputObjectSchema, z.array(PublisherCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();