import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutAgreementsInputObjectSchema as ClientCreateWithoutAgreementsInputObjectSchema } from './ClientCreateWithoutAgreementsInput.schema';
import { ClientUncheckedCreateWithoutAgreementsInputObjectSchema as ClientUncheckedCreateWithoutAgreementsInputObjectSchema } from './ClientUncheckedCreateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAgreementsInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutAgreementsInput>;
export const ClientCreateOrConnectWithoutAgreementsInputObjectZodSchema = makeSchema();
