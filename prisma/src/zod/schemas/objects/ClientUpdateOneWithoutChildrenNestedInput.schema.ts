import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutChildrenInputObjectSchema as ClientCreateWithoutChildrenInputObjectSchema } from './ClientCreateWithoutChildrenInput.schema';
import { ClientUncheckedCreateWithoutChildrenInputObjectSchema as ClientUncheckedCreateWithoutChildrenInputObjectSchema } from './ClientUncheckedCreateWithoutChildrenInput.schema';
import { ClientCreateOrConnectWithoutChildrenInputObjectSchema as ClientCreateOrConnectWithoutChildrenInputObjectSchema } from './ClientCreateOrConnectWithoutChildrenInput.schema';
import { ClientUpsertWithoutChildrenInputObjectSchema as ClientUpsertWithoutChildrenInputObjectSchema } from './ClientUpsertWithoutChildrenInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutChildrenInputObjectSchema as ClientUpdateToOneWithWhereWithoutChildrenInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutChildrenInput.schema';
import { ClientUpdateWithoutChildrenInputObjectSchema as ClientUpdateWithoutChildrenInputObjectSchema } from './ClientUpdateWithoutChildrenInput.schema';
import { ClientUncheckedUpdateWithoutChildrenInputObjectSchema as ClientUncheckedUpdateWithoutChildrenInputObjectSchema } from './ClientUncheckedUpdateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutChildrenInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutChildrenInputObjectSchema), z.lazy(() => ClientUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutChildrenInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutChildrenNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutChildrenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutChildrenNestedInput>;
export const ClientUpdateOneWithoutChildrenNestedInputObjectZodSchema = makeSchema();
