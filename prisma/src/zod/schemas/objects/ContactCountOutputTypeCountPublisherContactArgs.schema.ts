import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereInputObjectSchema as PublisherContactWhereInputObjectSchema } from './PublisherContactWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereInputObjectSchema).optional()
}).strict();
export const ContactCountOutputTypeCountPublisherContactArgsObjectSchema = makeSchema();
export const ContactCountOutputTypeCountPublisherContactArgsObjectZodSchema = makeSchema();
