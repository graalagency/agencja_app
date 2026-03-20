import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutParentInputObjectSchema as ClientCreateWithoutParentInputObjectSchema } from './ClientCreateWithoutParentInput.schema';
import { ClientUncheckedCreateWithoutParentInputObjectSchema as ClientUncheckedCreateWithoutParentInputObjectSchema } from './ClientUncheckedCreateWithoutParentInput.schema';
import { ClientCreateOrConnectWithoutParentInputObjectSchema as ClientCreateOrConnectWithoutParentInputObjectSchema } from './ClientCreateOrConnectWithoutParentInput.schema';
import { ClientCreateManyParentInputEnvelopeObjectSchema as ClientCreateManyParentInputEnvelopeObjectSchema } from './ClientCreateManyParentInputEnvelope.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutParentInputObjectSchema), z.lazy(() => ClientCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ClientUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ClientCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientCreateManyParentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientWhereUniqueInputObjectSchema), z.lazy(() => ClientWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientUncheckedCreateNestedManyWithoutParentInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateNestedManyWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateNestedManyWithoutParentInput>;
export const ClientUncheckedCreateNestedManyWithoutParentInputObjectZodSchema = makeSchema();
