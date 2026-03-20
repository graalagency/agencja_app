import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutTaxResidenceCertInputObjectSchema as ClientCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedCreateWithoutTaxResidenceCertInput.schema';
import { ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema as ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateOrConnectWithoutTaxResidenceCertInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutTaxResidenceCertInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutTaxResidenceCertInput>;
export const ClientCreateNestedOneWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
