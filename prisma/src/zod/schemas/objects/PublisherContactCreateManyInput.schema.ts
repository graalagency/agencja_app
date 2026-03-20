import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  publisherId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PublisherContactCreateManyInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateManyInput>;
export const PublisherContactCreateManyInputObjectZodSchema = makeSchema();
