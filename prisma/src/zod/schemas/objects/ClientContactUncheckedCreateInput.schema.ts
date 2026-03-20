import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  clientId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientContactUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ClientContactUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUncheckedCreateInput>;
export const ClientContactUncheckedCreateInputObjectZodSchema = makeSchema();
