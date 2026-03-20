import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutInvoiceInputObjectSchema as ClientUpdateWithoutInvoiceInputObjectSchema } from './ClientUpdateWithoutInvoiceInput.schema';
import { ClientUncheckedUpdateWithoutInvoiceInputObjectSchema as ClientUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ClientUncheckedUpdateWithoutInvoiceInput.schema';
import { ClientCreateWithoutInvoiceInputObjectSchema as ClientCreateWithoutInvoiceInputObjectSchema } from './ClientCreateWithoutInvoiceInput.schema';
import { ClientUncheckedCreateWithoutInvoiceInputObjectSchema as ClientUncheckedCreateWithoutInvoiceInputObjectSchema } from './ClientUncheckedCreateWithoutInvoiceInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoiceInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutInvoiceInput>;
export const ClientUpsertWithoutInvoiceInputObjectZodSchema = makeSchema();
