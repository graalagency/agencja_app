import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutAgreementsInputObjectSchema as ClientCreateWithoutAgreementsInputObjectSchema } from './ClientCreateWithoutAgreementsInput.schema';
import { ClientUncheckedCreateWithoutAgreementsInputObjectSchema as ClientUncheckedCreateWithoutAgreementsInputObjectSchema } from './ClientUncheckedCreateWithoutAgreementsInput.schema';
import { ClientCreateOrConnectWithoutAgreementsInputObjectSchema as ClientCreateOrConnectWithoutAgreementsInputObjectSchema } from './ClientCreateOrConnectWithoutAgreementsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutAgreementsInput>;
export const ClientCreateNestedOneWithoutAgreementsInputObjectZodSchema = makeSchema();
