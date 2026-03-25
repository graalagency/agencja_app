import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutAgreementsInputObjectSchema as ClientCreateWithoutAgreementsInputObjectSchema } from './ClientCreateWithoutAgreementsInput.schema';
import { ClientUncheckedCreateWithoutAgreementsInputObjectSchema as ClientUncheckedCreateWithoutAgreementsInputObjectSchema } from './ClientUncheckedCreateWithoutAgreementsInput.schema';
import { ClientCreateOrConnectWithoutAgreementsInputObjectSchema as ClientCreateOrConnectWithoutAgreementsInputObjectSchema } from './ClientCreateOrConnectWithoutAgreementsInput.schema';
import { ClientUpsertWithoutAgreementsInputObjectSchema as ClientUpsertWithoutAgreementsInputObjectSchema } from './ClientUpsertWithoutAgreementsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutAgreementsInputObjectSchema as ClientUpdateToOneWithWhereWithoutAgreementsInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutAgreementsInput.schema';
import { ClientUpdateWithoutAgreementsInputObjectSchema as ClientUpdateWithoutAgreementsInputObjectSchema } from './ClientUpdateWithoutAgreementsInput.schema';
import { ClientUncheckedUpdateWithoutAgreementsInputObjectSchema as ClientUncheckedUpdateWithoutAgreementsInputObjectSchema } from './ClientUncheckedUpdateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAgreementsInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutAgreementsNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutAgreementsNestedInput>;
export const ClientUpdateOneWithoutAgreementsNestedInputObjectZodSchema = makeSchema();
