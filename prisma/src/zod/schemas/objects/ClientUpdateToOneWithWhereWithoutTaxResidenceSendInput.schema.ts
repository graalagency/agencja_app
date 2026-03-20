import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutTaxResidenceSendInputObjectSchema as ClientUpdateWithoutTaxResidenceSendInputObjectSchema } from './ClientUpdateWithoutTaxResidenceSendInput.schema';
import { ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema as ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema } from './ClientUncheckedUpdateWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutTaxResidenceSendInput>;
export const ClientUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
