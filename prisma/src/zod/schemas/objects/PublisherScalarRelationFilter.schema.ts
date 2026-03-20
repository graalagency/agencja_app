import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherScalarRelationFilterObjectSchema: z.ZodType<Prisma.PublisherScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PublisherScalarRelationFilter>;
export const PublisherScalarRelationFilterObjectZodSchema = makeSchema();
