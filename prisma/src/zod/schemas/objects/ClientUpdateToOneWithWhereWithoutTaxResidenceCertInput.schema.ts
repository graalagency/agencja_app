import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutTaxResidenceCertInputObjectSchema as ClientUpdateWithoutTaxResidenceCertInputObjectSchema } from './ClientUpdateWithoutTaxResidenceCertInput.schema';
import { ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema as ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema } from './ClientUncheckedUpdateWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutTaxResidenceCertInput>;
export const ClientUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
