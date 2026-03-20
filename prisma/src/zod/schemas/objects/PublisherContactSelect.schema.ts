import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactArgsObjectSchema as ContactArgsObjectSchema } from './ContactArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  publisherId: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Contact: z.union([z.boolean(), z.lazy(() => ContactArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional()
}).strict();
export const PublisherContactSelectObjectSchema: z.ZodType<Prisma.PublisherContactSelect> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactSelect>;
export const PublisherContactSelectObjectZodSchema = makeSchema();
