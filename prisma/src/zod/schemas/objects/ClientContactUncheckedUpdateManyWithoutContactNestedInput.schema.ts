import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactCreateWithoutContactInputObjectSchema as ClientContactCreateWithoutContactInputObjectSchema } from './ClientContactCreateWithoutContactInput.schema';
import { ClientContactUncheckedCreateWithoutContactInputObjectSchema as ClientContactUncheckedCreateWithoutContactInputObjectSchema } from './ClientContactUncheckedCreateWithoutContactInput.schema';
import { ClientContactCreateOrConnectWithoutContactInputObjectSchema as ClientContactCreateOrConnectWithoutContactInputObjectSchema } from './ClientContactCreateOrConnectWithoutContactInput.schema';
import { ClientContactUpsertWithWhereUniqueWithoutContactInputObjectSchema as ClientContactUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './ClientContactUpsertWithWhereUniqueWithoutContactInput.schema';
import { ClientContactCreateManyContactInputEnvelopeObjectSchema as ClientContactCreateManyContactInputEnvelopeObjectSchema } from './ClientContactCreateManyContactInputEnvelope.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactUpdateWithWhereUniqueWithoutContactInputObjectSchema as ClientContactUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './ClientContactUpdateWithWhereUniqueWithoutContactInput.schema';
import { ClientContactUpdateManyWithWhereWithoutContactInputObjectSchema as ClientContactUpdateManyWithWhereWithoutContactInputObjectSchema } from './ClientContactUpdateManyWithWhereWithoutContactInput.schema';
import { ClientContactScalarWhereInputObjectSchema as ClientContactScalarWhereInputObjectSchema } from './ClientContactScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientContactCreateWithoutContactInputObjectSchema), z.lazy(() => ClientContactCreateWithoutContactInputObjectSchema).array(), z.lazy(() => ClientContactUncheckedCreateWithoutContactInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutContactInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientContactCreateOrConnectWithoutContactInputObjectSchema), z.lazy(() => ClientContactCreateOrConnectWithoutContactInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientContactUpsertWithWhereUniqueWithoutContactInputObjectSchema), z.lazy(() => ClientContactUpsertWithWhereUniqueWithoutContactInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientContactCreateManyContactInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientContactUpdateWithWhereUniqueWithoutContactInputObjectSchema), z.lazy(() => ClientContactUpdateWithWhereUniqueWithoutContactInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientContactUpdateManyWithWhereWithoutContactInputObjectSchema), z.lazy(() => ClientContactUpdateManyWithWhereWithoutContactInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientContactScalarWhereInputObjectSchema), z.lazy(() => ClientContactScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientContactUncheckedUpdateManyWithoutContactNestedInputObjectSchema: z.ZodType<Prisma.ClientContactUncheckedUpdateManyWithoutContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUncheckedUpdateManyWithoutContactNestedInput>;
export const ClientContactUncheckedUpdateManyWithoutContactNestedInputObjectZodSchema = makeSchema();
