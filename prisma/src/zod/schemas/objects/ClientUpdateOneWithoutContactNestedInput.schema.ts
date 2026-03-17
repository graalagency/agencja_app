import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutContactInputObjectSchema as ClientCreateWithoutContactInputObjectSchema } from './ClientCreateWithoutContactInput.schema';
import { ClientUncheckedCreateWithoutContactInputObjectSchema as ClientUncheckedCreateWithoutContactInputObjectSchema } from './ClientUncheckedCreateWithoutContactInput.schema';
import { ClientCreateOrConnectWithoutContactInputObjectSchema as ClientCreateOrConnectWithoutContactInputObjectSchema } from './ClientCreateOrConnectWithoutContactInput.schema';
import { ClientUpsertWithoutContactInputObjectSchema as ClientUpsertWithoutContactInputObjectSchema } from './ClientUpsertWithoutContactInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutContactInputObjectSchema as ClientUpdateToOneWithWhereWithoutContactInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutContactInput.schema';
import { ClientUpdateWithoutContactInputObjectSchema as ClientUpdateWithoutContactInputObjectSchema } from './ClientUpdateWithoutContactInput.schema';
import { ClientUncheckedUpdateWithoutContactInputObjectSchema as ClientUncheckedUpdateWithoutContactInputObjectSchema } from './ClientUncheckedUpdateWithoutContactInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutContactInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutContactInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutContactInputObjectSchema), z.lazy(() => ClientUpdateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutContactInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutContactNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutContactNestedInput>;
export const ClientUpdateOneWithoutContactNestedInputObjectZodSchema = makeSchema();
