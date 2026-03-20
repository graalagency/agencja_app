import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereInputObjectSchema as PublisherContactWhereInputObjectSchema } from './PublisherContactWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PublisherContactWhereInputObjectSchema).optional(),
  some: z.lazy(() => PublisherContactWhereInputObjectSchema).optional(),
  none: z.lazy(() => PublisherContactWhereInputObjectSchema).optional()
}).strict();
export const PublisherContactListRelationFilterObjectSchema: z.ZodType<Prisma.PublisherContactListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactListRelationFilter>;
export const PublisherContactListRelationFilterObjectZodSchema = makeSchema();
