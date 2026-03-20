import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutParentInputObjectSchema as ClientCreateWithoutParentInputObjectSchema } from './ClientCreateWithoutParentInput.schema';
import { ClientUncheckedCreateWithoutParentInputObjectSchema as ClientUncheckedCreateWithoutParentInputObjectSchema } from './ClientUncheckedCreateWithoutParentInput.schema';
import { ClientCreateOrConnectWithoutParentInputObjectSchema as ClientCreateOrConnectWithoutParentInputObjectSchema } from './ClientCreateOrConnectWithoutParentInput.schema';
import { ClientUpsertWithWhereUniqueWithoutParentInputObjectSchema as ClientUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './ClientUpsertWithWhereUniqueWithoutParentInput.schema';
import { ClientCreateManyParentInputEnvelopeObjectSchema as ClientCreateManyParentInputEnvelopeObjectSchema } from './ClientCreateManyParentInputEnvelope.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithWhereUniqueWithoutParentInputObjectSchema as ClientUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './ClientUpdateWithWhereUniqueWithoutParentInput.schema';
import { ClientUpdateManyWithWhereWithoutParentInputObjectSchema as ClientUpdateManyWithWhereWithoutParentInputObjectSchema } from './ClientUpdateManyWithWhereWithoutParentInput.schema';
import { ClientScalarWhereInputObjectSchema as ClientScalarWhereInputObjectSchema } from './ClientScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutParentInputObjectSchema), z.lazy(() => ClientCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ClientUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ClientCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientUpsertWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ClientUpsertWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientCreateManyParentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientWhereUniqueInputObjectSchema), z.lazy(() => ClientWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientWhereUniqueInputObjectSchema), z.lazy(() => ClientWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientWhereUniqueInputObjectSchema), z.lazy(() => ClientWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientWhereUniqueInputObjectSchema), z.lazy(() => ClientWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientUpdateWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ClientUpdateWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientUpdateManyWithWhereWithoutParentInputObjectSchema), z.lazy(() => ClientUpdateManyWithWhereWithoutParentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientScalarWhereInputObjectSchema), z.lazy(() => ClientScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientUncheckedUpdateManyWithoutParentNestedInputObjectSchema: z.ZodType<Prisma.ClientUncheckedUpdateManyWithoutParentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedUpdateManyWithoutParentNestedInput>;
export const ClientUncheckedUpdateManyWithoutParentNestedInputObjectZodSchema = makeSchema();
