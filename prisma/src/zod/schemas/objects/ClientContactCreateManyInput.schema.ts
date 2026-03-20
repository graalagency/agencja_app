import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId: z.number().int(),
  clientId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientContactCreateManyInputObjectSchema: z.ZodType<Prisma.ClientContactCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateManyInput>;
export const ClientContactCreateManyInputObjectZodSchema = makeSchema();
