import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PublisherContactCreateManyPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateManyPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateManyPublisherInput>;
export const PublisherContactCreateManyPublisherInputObjectZodSchema = makeSchema();
