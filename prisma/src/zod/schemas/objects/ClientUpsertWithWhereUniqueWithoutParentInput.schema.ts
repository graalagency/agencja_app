import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutParentInputObjectSchema as ClientUpdateWithoutParentInputObjectSchema } from './ClientUpdateWithoutParentInput.schema';
import { ClientUncheckedUpdateWithoutParentInputObjectSchema as ClientUncheckedUpdateWithoutParentInputObjectSchema } from './ClientUncheckedUpdateWithoutParentInput.schema';
import { ClientCreateWithoutParentInputObjectSchema as ClientCreateWithoutParentInputObjectSchema } from './ClientCreateWithoutParentInput.schema';
import { ClientUncheckedCreateWithoutParentInputObjectSchema as ClientUncheckedCreateWithoutParentInputObjectSchema } from './ClientUncheckedCreateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientUpdateWithoutParentInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutParentInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutParentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const ClientUpsertWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithWhereUniqueWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithWhereUniqueWithoutParentInput>;
export const ClientUpsertWithWhereUniqueWithoutParentInputObjectZodSchema = makeSchema();
