import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './PublisherSelect.schema';
import { PublisherIncludeObjectSchema as PublisherIncludeObjectSchema } from './PublisherInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PublisherSelectObjectSchema).optional(),
  include: z.lazy(() => PublisherIncludeObjectSchema).optional()
}).strict();
export const PublisherArgsObjectSchema = makeSchema();
export const PublisherArgsObjectZodSchema = makeSchema();
