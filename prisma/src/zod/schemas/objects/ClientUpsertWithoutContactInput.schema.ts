import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutContactInputObjectSchema as ClientUpdateWithoutContactInputObjectSchema } from './ClientUpdateWithoutContactInput.schema';
import { ClientUncheckedUpdateWithoutContactInputObjectSchema as ClientUncheckedUpdateWithoutContactInputObjectSchema } from './ClientUncheckedUpdateWithoutContactInput.schema';
import { ClientCreateWithoutContactInputObjectSchema as ClientCreateWithoutContactInputObjectSchema } from './ClientCreateWithoutContactInput.schema';
import { ClientUncheckedCreateWithoutContactInputObjectSchema as ClientUncheckedCreateWithoutContactInputObjectSchema } from './ClientUncheckedCreateWithoutContactInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutContactInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutContactInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutContactInput>;
export const ClientUpsertWithoutContactInputObjectZodSchema = makeSchema();
