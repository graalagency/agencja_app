import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactCreateWithoutContactInputObjectSchema as PublisherContactCreateWithoutContactInputObjectSchema } from './PublisherContactCreateWithoutContactInput.schema';
import { PublisherContactUncheckedCreateWithoutContactInputObjectSchema as PublisherContactUncheckedCreateWithoutContactInputObjectSchema } from './PublisherContactUncheckedCreateWithoutContactInput.schema';
import { PublisherContactCreateOrConnectWithoutContactInputObjectSchema as PublisherContactCreateOrConnectWithoutContactInputObjectSchema } from './PublisherContactCreateOrConnectWithoutContactInput.schema';
import { PublisherContactUpsertWithWhereUniqueWithoutContactInputObjectSchema as PublisherContactUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './PublisherContactUpsertWithWhereUniqueWithoutContactInput.schema';
import { PublisherContactCreateManyContactInputEnvelopeObjectSchema as PublisherContactCreateManyContactInputEnvelopeObjectSchema } from './PublisherContactCreateManyContactInputEnvelope.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactUpdateWithWhereUniqueWithoutContactInputObjectSchema as PublisherContactUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './PublisherContactUpdateWithWhereUniqueWithoutContactInput.schema';
import { PublisherContactUpdateManyWithWhereWithoutContactInputObjectSchema as PublisherContactUpdateManyWithWhereWithoutContactInputObjectSchema } from './PublisherContactUpdateManyWithWhereWithoutContactInput.schema';
import { PublisherContactScalarWhereInputObjectSchema as PublisherContactScalarWhereInputObjectSchema } from './PublisherContactScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherContactCreateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactCreateWithoutContactInputObjectSchema).array(), z.lazy(() => PublisherContactUncheckedCreateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutContactInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublisherContactCreateOrConnectWithoutContactInputObjectSchema), z.lazy(() => PublisherContactCreateOrConnectWithoutContactInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PublisherContactUpsertWithWhereUniqueWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUpsertWithWhereUniqueWithoutContactInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublisherContactCreateManyContactInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PublisherContactUpdateWithWhereUniqueWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUpdateWithWhereUniqueWithoutContactInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PublisherContactUpdateManyWithWhereWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUpdateManyWithWhereWithoutContactInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PublisherContactScalarWhereInputObjectSchema), z.lazy(() => PublisherContactScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PublisherContactUncheckedUpdateManyWithoutContactNestedInputObjectSchema: z.ZodType<Prisma.PublisherContactUncheckedUpdateManyWithoutContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUncheckedUpdateManyWithoutContactNestedInput>;
export const PublisherContactUncheckedUpdateManyWithoutContactNestedInputObjectZodSchema = makeSchema();
