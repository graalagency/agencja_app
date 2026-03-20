import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientContactCreateManyContactInputObjectSchema: z.ZodType<Prisma.ClientContactCreateManyContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateManyContactInput>;
export const ClientContactCreateManyContactInputObjectZodSchema = makeSchema();
