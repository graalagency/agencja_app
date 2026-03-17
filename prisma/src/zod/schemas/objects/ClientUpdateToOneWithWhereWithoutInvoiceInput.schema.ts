import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutInvoiceInputObjectSchema as ClientUpdateWithoutInvoiceInputObjectSchema } from './ClientUpdateWithoutInvoiceInput.schema';
import { ClientUncheckedUpdateWithoutInvoiceInputObjectSchema as ClientUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ClientUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutInvoiceInput>;
export const ClientUpdateToOneWithWhereWithoutInvoiceInputObjectZodSchema = makeSchema();
