import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCountOutputTypeSelectObjectSchema as PublisherCountOutputTypeSelectObjectSchema } from './PublisherCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PublisherCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PublisherCountOutputTypeArgsObjectSchema = makeSchema();
export const PublisherCountOutputTypeArgsObjectZodSchema = makeSchema();
