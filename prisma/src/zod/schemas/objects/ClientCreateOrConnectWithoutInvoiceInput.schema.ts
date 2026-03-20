import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutInvoiceInputObjectSchema as ClientCreateWithoutInvoiceInputObjectSchema } from './ClientCreateWithoutInvoiceInput.schema';
import { ClientUncheckedCreateWithoutInvoiceInputObjectSchema as ClientUncheckedCreateWithoutInvoiceInputObjectSchema } from './ClientUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutInvoiceInput>;
export const ClientCreateOrConnectWithoutInvoiceInputObjectZodSchema = makeSchema();
