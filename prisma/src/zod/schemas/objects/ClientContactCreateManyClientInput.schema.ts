import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientContactCreateManyClientInputObjectSchema: z.ZodType<Prisma.ClientContactCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateManyClientInput>;
export const ClientContactCreateManyClientInputObjectZodSchema = makeSchema();
