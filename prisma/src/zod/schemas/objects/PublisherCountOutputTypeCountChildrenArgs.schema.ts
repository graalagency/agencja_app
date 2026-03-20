import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherCountOutputTypeCountChildrenArgsObjectSchema = makeSchema();
export const PublisherCountOutputTypeCountChildrenArgsObjectZodSchema = makeSchema();
