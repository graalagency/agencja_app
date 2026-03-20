import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateNestedOneWithoutClientContactInputObjectSchema as ContactCreateNestedOneWithoutClientContactInputObjectSchema } from './ContactCreateNestedOneWithoutClientContactInput.schema';
import { ClientCreateNestedOneWithoutClientContactInputObjectSchema as ClientCreateNestedOneWithoutClientContactInputObjectSchema } from './ClientCreateNestedOneWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Contact: z.lazy(() => ContactCreateNestedOneWithoutClientContactInputObjectSchema),
  Client: z.lazy(() => ClientCreateNestedOneWithoutClientContactInputObjectSchema)
}).strict();
export const ClientContactCreateInputObjectSchema: z.ZodType<Prisma.ClientContactCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateInput>;
export const ClientContactCreateInputObjectZodSchema = makeSchema();
