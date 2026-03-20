import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateNestedOneWithoutClientContactInputObjectSchema as ContactCreateNestedOneWithoutClientContactInputObjectSchema } from './ContactCreateNestedOneWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Contact: z.lazy(() => ContactCreateNestedOneWithoutClientContactInputObjectSchema)
}).strict();
export const ClientContactCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateWithoutClientInput>;
export const ClientContactCreateWithoutClientInputObjectZodSchema = makeSchema();
