import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutPublisherInputObjectSchema as TitleCreateWithoutPublisherInputObjectSchema } from './TitleCreateWithoutPublisherInput.schema';
import { TitleUncheckedCreateWithoutPublisherInputObjectSchema as TitleUncheckedCreateWithoutPublisherInputObjectSchema } from './TitleUncheckedCreateWithoutPublisherInput.schema';
import { TitleCreateOrConnectWithoutPublisherInputObjectSchema as TitleCreateOrConnectWithoutPublisherInputObjectSchema } from './TitleCreateOrConnectWithoutPublisherInput.schema';
import { TitleUpsertWithWhereUniqueWithoutPublisherInputObjectSchema as TitleUpsertWithWhereUniqueWithoutPublisherInputObjectSchema } from './TitleUpsertWithWhereUniqueWithoutPublisherInput.schema';
import { TitleCreateManyPublisherInputEnvelopeObjectSchema as TitleCreateManyPublisherInputEnvelopeObjectSchema } from './TitleCreateManyPublisherInputEnvelope.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateWithWhereUniqueWithoutPublisherInputObjectSchema as TitleUpdateWithWhereUniqueWithoutPublisherInputObjectSchema } from './TitleUpdateWithWhereUniqueWithoutPublisherInput.schema';
import { TitleUpdateManyWithWhereWithoutPublisherInputObjectSchema as TitleUpdateManyWithWhereWithoutPublisherInputObjectSchema } from './TitleUpdateManyWithWhereWithoutPublisherInput.schema';
import { TitleScalarWhereInputObjectSchema as TitleScalarWhereInputObjectSchema } from './TitleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutPublisherInputObjectSchema), z.lazy(() => TitleCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => TitleUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => TitleCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TitleUpsertWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => TitleUpsertWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TitleUpdateWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => TitleUpdateWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TitleUpdateManyWithWhereWithoutPublisherInputObjectSchema), z.lazy(() => TitleUpdateManyWithWhereWithoutPublisherInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TitleScalarWhereInputObjectSchema), z.lazy(() => TitleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TitleUpdateManyWithoutPublisherNestedInputObjectSchema: z.ZodType<Prisma.TitleUpdateManyWithoutPublisherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateManyWithoutPublisherNestedInput>;
export const TitleUpdateManyWithoutPublisherNestedInputObjectZodSchema = makeSchema();
