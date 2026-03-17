import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './PublisherSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PublisherSelectObjectSchema).optional()
}).strict();
export const PublisherArgsObjectSchema = makeSchema();
export const PublisherArgsObjectZodSchema = makeSchema();
