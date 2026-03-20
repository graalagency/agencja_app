import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutTaxResidenceCertInputObjectSchema as ClientUpdateWithoutTaxResidenceCertInputObjectSchema } from './ClientUpdateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedUpdateWithoutTaxResidenceCertInput.schema';
import { ClientCreateWithoutTaxResidenceCertInputObjectSchema as ClientCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceCertInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutTaxResidenceCertInput>;
export const ClientUpsertWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
