import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientContactUncheckedCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactUncheckedCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUncheckedCreateWithoutClientInput>;
export const ClientContactUncheckedCreateWithoutClientInputObjectZodSchema = makeSchema();
