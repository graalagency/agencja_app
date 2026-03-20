import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutTaxResidenceSendInputObjectSchema as ClientUpdateWithoutTaxResidenceSendInputObjectSchema } from './ClientUpdateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedUpdateWithoutTaxResidenceSendInput.schema';
import { ClientCreateWithoutTaxResidenceSendInputObjectSchema as ClientCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceSendInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutTaxResidenceSendInput>;
export const ClientUpsertWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
