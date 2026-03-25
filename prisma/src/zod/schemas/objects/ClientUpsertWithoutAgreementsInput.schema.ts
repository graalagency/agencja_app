import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutAgreementsInputObjectSchema as ClientUpdateWithoutAgreementsInputObjectSchema } from './ClientUpdateWithoutAgreementsInput.schema';
import { ClientUncheckedUpdateWithoutAgreementsInputObjectSchema as ClientUncheckedUpdateWithoutAgreementsInputObjectSchema } from './ClientUncheckedUpdateWithoutAgreementsInput.schema';
import { ClientCreateWithoutAgreementsInputObjectSchema as ClientCreateWithoutAgreementsInputObjectSchema } from './ClientCreateWithoutAgreementsInput.schema';
import { ClientUncheckedCreateWithoutAgreementsInputObjectSchema as ClientUncheckedCreateWithoutAgreementsInputObjectSchema } from './ClientUncheckedCreateWithoutAgreementsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAgreementsInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutAgreementsInput>;
export const ClientUpsertWithoutAgreementsInputObjectZodSchema = makeSchema();
