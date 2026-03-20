import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutTitleInputObjectSchema as ClientCreateWithoutTitleInputObjectSchema } from './ClientCreateWithoutTitleInput.schema';
import { ClientUncheckedCreateWithoutTitleInputObjectSchema as ClientUncheckedCreateWithoutTitleInputObjectSchema } from './ClientUncheckedCreateWithoutTitleInput.schema';
import { ClientCreateOrConnectWithoutTitleInputObjectSchema as ClientCreateOrConnectWithoutTitleInputObjectSchema } from './ClientCreateOrConnectWithoutTitleInput.schema';
import { ClientUpsertWithoutTitleInputObjectSchema as ClientUpsertWithoutTitleInputObjectSchema } from './ClientUpsertWithoutTitleInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutTitleInputObjectSchema as ClientUpdateToOneWithWhereWithoutTitleInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutTitleInput.schema';
import { ClientUpdateWithoutTitleInputObjectSchema as ClientUpdateWithoutTitleInputObjectSchema } from './ClientUpdateWithoutTitleInput.schema';
import { ClientUncheckedUpdateWithoutTitleInputObjectSchema as ClientUncheckedUpdateWithoutTitleInputObjectSchema } from './ClientUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTitleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutTitleInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutTitleInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutTitleInputObjectSchema), z.lazy(() => ClientUpdateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTitleInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutTitleNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutTitleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutTitleNestedInput>;
export const ClientUpdateOneWithoutTitleNestedInputObjectZodSchema = makeSchema();
