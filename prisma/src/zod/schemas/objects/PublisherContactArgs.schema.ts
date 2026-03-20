import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './PublisherContactSelect.schema';
import { PublisherContactIncludeObjectSchema as PublisherContactIncludeObjectSchema } from './PublisherContactInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PublisherContactSelectObjectSchema).optional(),
  include: z.lazy(() => PublisherContactIncludeObjectSchema).optional()
}).strict();
export const PublisherContactArgsObjectSchema = makeSchema();
export const PublisherContactArgsObjectZodSchema = makeSchema();
