import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutAgreementsInputObjectSchema as ClientUpdateWithoutAgreementsInputObjectSchema } from './ClientUpdateWithoutAgreementsInput.schema';
import { ClientUncheckedUpdateWithoutAgreementsInputObjectSchema as ClientUncheckedUpdateWithoutAgreementsInputObjectSchema } from './ClientUncheckedUpdateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAgreementsInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAgreementsInput>;
export const ClientUpdateToOneWithWhereWithoutAgreementsInputObjectZodSchema = makeSchema();
