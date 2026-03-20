import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutTaxResidenceSendInputObjectSchema as ClientCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceSendInput.schema';
import { ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema as ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateOrConnectWithoutTaxResidenceSendInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutTaxResidenceSendInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutTaxResidenceSendInput>;
export const ClientCreateNestedOneWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
