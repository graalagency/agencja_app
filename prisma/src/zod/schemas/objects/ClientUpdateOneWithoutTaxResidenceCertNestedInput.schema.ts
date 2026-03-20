import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutTaxResidenceCertInputObjectSchema as ClientCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceCertInput.schema';
import { ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema as ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateOrConnectWithoutTaxResidenceCertInput.schema';
import { ClientUpsertWithoutTaxResidenceCertInputObjectSchema as ClientUpsertWithoutTaxResidenceCertInputObjectSchema } from './ClientUpsertWithoutTaxResidenceCertInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema as ClientUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutTaxResidenceCertInput.schema';
import { ClientUpdateWithoutTaxResidenceCertInputObjectSchema as ClientUpdateWithoutTaxResidenceCertInputObjectSchema } from './ClientUpdateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedUpdateWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutTaxResidenceCertInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUpdateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutTaxResidenceCertNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutTaxResidenceCertNestedInput>;
export const ClientUpdateOneWithoutTaxResidenceCertNestedInputObjectZodSchema = makeSchema();
