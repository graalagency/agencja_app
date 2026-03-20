import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutTaxResidenceSendInputObjectSchema as ClientCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutTaxResidenceSendInput>;
export const ClientCreateOrConnectWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
