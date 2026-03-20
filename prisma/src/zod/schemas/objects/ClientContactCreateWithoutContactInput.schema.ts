import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutClientContactInputObjectSchema as ClientCreateNestedOneWithoutClientContactInputObjectSchema } from './ClientCreateNestedOneWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutClientContactInputObjectSchema)
}).strict();
export const ClientContactCreateWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactCreateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateWithoutContactInput>;
export const ClientContactCreateWithoutContactInputObjectZodSchema = makeSchema();
