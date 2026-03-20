import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PublisherWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => PublisherWhereInputObjectSchema).optional().nullable()
}).strict();
export const PublisherNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.PublisherNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PublisherNullableScalarRelationFilter>;
export const PublisherNullableScalarRelationFilterObjectZodSchema = makeSchema();
