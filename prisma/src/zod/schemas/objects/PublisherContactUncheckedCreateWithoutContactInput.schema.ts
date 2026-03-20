import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  publisherId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PublisherContactUncheckedCreateWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactUncheckedCreateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUncheckedCreateWithoutContactInput>;
export const PublisherContactUncheckedCreateWithoutContactInputObjectZodSchema = makeSchema();
