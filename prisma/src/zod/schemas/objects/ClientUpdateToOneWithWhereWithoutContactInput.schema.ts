import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutContactInputObjectSchema as ClientUpdateWithoutContactInputObjectSchema } from './ClientUpdateWithoutContactInput.schema';
import { ClientUncheckedUpdateWithoutContactInputObjectSchema as ClientUncheckedUpdateWithoutContactInputObjectSchema } from './ClientUncheckedUpdateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutContactInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutContactInput>;
export const ClientUpdateToOneWithWhereWithoutContactInputObjectZodSchema = makeSchema();
