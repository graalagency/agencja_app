import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutParentInputObjectSchema as PublisherCreateWithoutParentInputObjectSchema } from './PublisherCreateWithoutParentInput.schema';
import { PublisherUncheckedCreateWithoutParentInputObjectSchema as PublisherUncheckedCreateWithoutParentInputObjectSchema } from './PublisherUncheckedCreateWithoutParentInput.schema';
import { PublisherCreateOrConnectWithoutParentInputObjectSchema as PublisherCreateOrConnectWithoutParentInputObjectSchema } from './PublisherCreateOrConnectWithoutParentInput.schema';
import { PublisherUpsertWithWhereUniqueWithoutParentInputObjectSchema as PublisherUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './PublisherUpsertWithWhereUniqueWithoutParentInput.schema';
import { PublisherCreateManyParentInputEnvelopeObjectSchema as PublisherCreateManyParentInputEnvelopeObjectSchema } from './PublisherCreateManyParentInputEnvelope.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateWithWhereUniqueWithoutParentInputObjectSchema as PublisherUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './PublisherUpdateWithWhereUniqueWithoutParentInput.schema';
import { PublisherUpdateManyWithWhereWithoutParentInputObjectSchema as PublisherUpdateManyWithWhereWithoutParentInputObjectSchema } from './PublisherUpdateManyWithWhereWithoutParentInput.schema';
import { PublisherScalarWhereInputObjectSchema as PublisherScalarWhereInputObjectSchema } from './PublisherScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutParentInputObjectSchema), z.lazy(() => PublisherCreateWithoutParentInputObjectSchema).array(), z.lazy(() => PublisherUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublisherCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => PublisherCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PublisherUpsertWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => PublisherUpsertWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublisherCreateManyParentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PublisherWhereUniqueInputObjectSchema), z.lazy(() => PublisherWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PublisherWhereUniqueInputObjectSchema), z.lazy(() => PublisherWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PublisherWhereUniqueInputObjectSchema), z.lazy(() => PublisherWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PublisherWhereUniqueInputObjectSchema), z.lazy(() => PublisherWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PublisherUpdateWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => PublisherUpdateWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PublisherUpdateManyWithWhereWithoutParentInputObjectSchema), z.lazy(() => PublisherUpdateManyWithWhereWithoutParentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PublisherScalarWhereInputObjectSchema), z.lazy(() => PublisherScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PublisherUpdateManyWithoutParentNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateManyWithoutParentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateManyWithoutParentNestedInput>;
export const PublisherUpdateManyWithoutParentNestedInputObjectZodSchema = makeSchema();
