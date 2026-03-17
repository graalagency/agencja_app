import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutInvoiceInputObjectSchema as ClientCreateWithoutInvoiceInputObjectSchema } from './ClientCreateWithoutInvoiceInput.schema';
import { ClientUncheckedCreateWithoutInvoiceInputObjectSchema as ClientUncheckedCreateWithoutInvoiceInputObjectSchema } from './ClientUncheckedCreateWithoutInvoiceInput.schema';
import { ClientCreateOrConnectWithoutInvoiceInputObjectSchema as ClientCreateOrConnectWithoutInvoiceInputObjectSchema } from './ClientCreateOrConnectWithoutInvoiceInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutInvoiceInput>;
export const ClientCreateNestedOneWithoutInvoiceInputObjectZodSchema = makeSchema();
