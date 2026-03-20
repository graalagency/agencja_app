import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  some: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  none: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherListRelationFilterObjectSchema: z.ZodType<Prisma.PublisherListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PublisherListRelationFilter>;
export const PublisherListRelationFilterObjectZodSchema = makeSchema();
