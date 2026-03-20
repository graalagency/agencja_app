import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  publisherId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PublisherContactUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PublisherContactUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUncheckedCreateInput>;
export const PublisherContactUncheckedCreateInputObjectZodSchema = makeSchema();
