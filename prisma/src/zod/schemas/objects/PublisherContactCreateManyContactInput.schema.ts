import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  publisherId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PublisherContactCreateManyContactInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateManyContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateManyContactInput>;
export const PublisherContactCreateManyContactInputObjectZodSchema = makeSchema();
