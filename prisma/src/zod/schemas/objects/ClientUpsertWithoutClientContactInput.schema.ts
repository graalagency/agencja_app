import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutClientContactInputObjectSchema as ClientUpdateWithoutClientContactInputObjectSchema } from './ClientUpdateWithoutClientContactInput.schema';
import { ClientUncheckedUpdateWithoutClientContactInputObjectSchema as ClientUncheckedUpdateWithoutClientContactInputObjectSchema } from './ClientUncheckedUpdateWithoutClientContactInput.schema';
import { ClientCreateWithoutClientContactInputObjectSchema as ClientCreateWithoutClientContactInputObjectSchema } from './ClientCreateWithoutClientContactInput.schema';
import { ClientUncheckedCreateWithoutClientContactInputObjectSchema as ClientUncheckedCreateWithoutClientContactInputObjectSchema } from './ClientUncheckedCreateWithoutClientContactInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutClientContactInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutClientContactInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutClientContactInput>;
export const ClientUpsertWithoutClientContactInputObjectZodSchema = makeSchema();
