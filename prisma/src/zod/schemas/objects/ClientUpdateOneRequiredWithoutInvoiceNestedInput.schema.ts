import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutInvoiceInputObjectSchema as ClientCreateWithoutInvoiceInputObjectSchema } from './ClientCreateWithoutInvoiceInput.schema';
import { ClientUncheckedCreateWithoutInvoiceInputObjectSchema as ClientUncheckedCreateWithoutInvoiceInputObjectSchema } from './ClientUncheckedCreateWithoutInvoiceInput.schema';
import { ClientCreateOrConnectWithoutInvoiceInputObjectSchema as ClientCreateOrConnectWithoutInvoiceInputObjectSchema } from './ClientCreateOrConnectWithoutInvoiceInput.schema';
import { ClientUpsertWithoutInvoiceInputObjectSchema as ClientUpsertWithoutInvoiceInputObjectSchema } from './ClientUpsertWithoutInvoiceInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutInvoiceInputObjectSchema as ClientUpdateToOneWithWhereWithoutInvoiceInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutInvoiceInput.schema';
import { ClientUpdateWithoutInvoiceInputObjectSchema as ClientUpdateWithoutInvoiceInputObjectSchema } from './ClientUpdateWithoutInvoiceInput.schema';
import { ClientUncheckedUpdateWithoutInvoiceInputObjectSchema as ClientUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ClientUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutInvoiceInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutInvoiceInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutInvoiceNestedInput>;
export const ClientUpdateOneRequiredWithoutInvoiceNestedInputObjectZodSchema = makeSchema();
