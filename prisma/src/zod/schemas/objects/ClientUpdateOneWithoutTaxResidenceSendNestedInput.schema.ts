import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutTaxResidenceSendInputObjectSchema as ClientCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceSendInput.schema';
import { ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema as ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateOrConnectWithoutTaxResidenceSendInput.schema';
import { ClientUpsertWithoutTaxResidenceSendInputObjectSchema as ClientUpsertWithoutTaxResidenceSendInputObjectSchema } from './ClientUpsertWithoutTaxResidenceSendInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema as ClientUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutTaxResidenceSendInput.schema';
import { ClientUpdateWithoutTaxResidenceSendInputObjectSchema as ClientUpdateWithoutTaxResidenceSendInputObjectSchema } from './ClientUpdateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedUpdateWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutTaxResidenceSendInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUpdateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutTaxResidenceSendNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutTaxResidenceSendNestedInput>;
export const ClientUpdateOneWithoutTaxResidenceSendNestedInputObjectZodSchema = makeSchema();
