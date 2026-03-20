import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutTaxResidenceCertInputObjectSchema as ClientCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutTaxResidenceCertInput>;
export const ClientCreateOrConnectWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
