import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactCreateWithoutPublisherInputObjectSchema as PublisherContactCreateWithoutPublisherInputObjectSchema } from './PublisherContactCreateWithoutPublisherInput.schema';
import { PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema as PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedCreateWithoutPublisherInput.schema';
import { PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema as PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema } from './PublisherContactCreateOrConnectWithoutPublisherInput.schema';
import { PublisherContactUpsertWithWhereUniqueWithoutPublisherInputObjectSchema as PublisherContactUpsertWithWhereUniqueWithoutPublisherInputObjectSchema } from './PublisherContactUpsertWithWhereUniqueWithoutPublisherInput.schema';
import { PublisherContactCreateManyPublisherInputEnvelopeObjectSchema as PublisherContactCreateManyPublisherInputEnvelopeObjectSchema } from './PublisherContactCreateManyPublisherInputEnvelope.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactUpdateWithWhereUniqueWithoutPublisherInputObjectSchema as PublisherContactUpdateWithWhereUniqueWithoutPublisherInputObjectSchema } from './PublisherContactUpdateWithWhereUniqueWithoutPublisherInput.schema';
import { PublisherContactUpdateManyWithWhereWithoutPublisherInputObjectSchema as PublisherContactUpdateManyWithWhereWithoutPublisherInputObjectSchema } from './PublisherContactUpdateManyWithWhereWithoutPublisherInput.schema';
import { PublisherContactScalarWhereInputObjectSchema as PublisherContactScalarWhereInputObjectSchema } from './PublisherContactScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherContactCreateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PublisherContactUpsertWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUpsertWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublisherContactCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PublisherContactUpdateWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUpdateWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PublisherContactUpdateManyWithWhereWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUpdateManyWithWhereWithoutPublisherInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PublisherContactScalarWhereInputObjectSchema), z.lazy(() => PublisherContactScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PublisherContactUncheckedUpdateManyWithoutPublisherNestedInputObjectSchema: z.ZodType<Prisma.PublisherContactUncheckedUpdateManyWithoutPublisherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUncheckedUpdateManyWithoutPublisherNestedInput>;
export const PublisherContactUncheckedUpdateManyWithoutPublisherNestedInputObjectZodSchema = makeSchema();
