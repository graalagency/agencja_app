import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactCreateWithoutClientInputObjectSchema as ClientContactCreateWithoutClientInputObjectSchema } from './ClientContactCreateWithoutClientInput.schema';
import { ClientContactUncheckedCreateWithoutClientInputObjectSchema as ClientContactUncheckedCreateWithoutClientInputObjectSchema } from './ClientContactUncheckedCreateWithoutClientInput.schema';
import { ClientContactCreateOrConnectWithoutClientInputObjectSchema as ClientContactCreateOrConnectWithoutClientInputObjectSchema } from './ClientContactCreateOrConnectWithoutClientInput.schema';
import { ClientContactUpsertWithWhereUniqueWithoutClientInputObjectSchema as ClientContactUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './ClientContactUpsertWithWhereUniqueWithoutClientInput.schema';
import { ClientContactCreateManyClientInputEnvelopeObjectSchema as ClientContactCreateManyClientInputEnvelopeObjectSchema } from './ClientContactCreateManyClientInputEnvelope.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactUpdateWithWhereUniqueWithoutClientInputObjectSchema as ClientContactUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './ClientContactUpdateWithWhereUniqueWithoutClientInput.schema';
import { ClientContactUpdateManyWithWhereWithoutClientInputObjectSchema as ClientContactUpdateManyWithWhereWithoutClientInputObjectSchema } from './ClientContactUpdateManyWithWhereWithoutClientInput.schema';
import { ClientContactScalarWhereInputObjectSchema as ClientContactScalarWhereInputObjectSchema } from './ClientContactScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientContactCreateWithoutClientInputObjectSchema), z.lazy(() => ClientContactCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ClientContactUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientContactCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ClientContactCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientContactUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ClientContactUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientContactCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientContactUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ClientContactUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientContactUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => ClientContactUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientContactScalarWhereInputObjectSchema), z.lazy(() => ClientContactScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientContactUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateManyWithoutClientNestedInput>;
export const ClientContactUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
