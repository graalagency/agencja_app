import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactArgsObjectSchema as ContactArgsObjectSchema } from './ContactArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema'

const makeSchema = () => z.object({
  Contact: z.union([z.boolean(), z.lazy(() => ContactArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional()
}).strict();
export const PublisherContactIncludeObjectSchema: z.ZodType<Prisma.PublisherContactInclude> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactInclude>;
export const PublisherContactIncludeObjectZodSchema = makeSchema();
