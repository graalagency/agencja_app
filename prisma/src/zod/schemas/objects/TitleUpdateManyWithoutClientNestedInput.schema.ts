import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutClientInputObjectSchema as TitleCreateWithoutClientInputObjectSchema } from './TitleCreateWithoutClientInput.schema';
import { TitleUncheckedCreateWithoutClientInputObjectSchema as TitleUncheckedCreateWithoutClientInputObjectSchema } from './TitleUncheckedCreateWithoutClientInput.schema';
import { TitleCreateOrConnectWithoutClientInputObjectSchema as TitleCreateOrConnectWithoutClientInputObjectSchema } from './TitleCreateOrConnectWithoutClientInput.schema';
import { TitleUpsertWithWhereUniqueWithoutClientInputObjectSchema as TitleUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './TitleUpsertWithWhereUniqueWithoutClientInput.schema';
import { TitleCreateManyClientInputEnvelopeObjectSchema as TitleCreateManyClientInputEnvelopeObjectSchema } from './TitleCreateManyClientInputEnvelope.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateWithWhereUniqueWithoutClientInputObjectSchema as TitleUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './TitleUpdateWithWhereUniqueWithoutClientInput.schema';
import { TitleUpdateManyWithWhereWithoutClientInputObjectSchema as TitleUpdateManyWithWhereWithoutClientInputObjectSchema } from './TitleUpdateManyWithWhereWithoutClientInput.schema';
import { TitleScalarWhereInputObjectSchema as TitleScalarWhereInputObjectSchema } from './TitleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutClientInputObjectSchema), z.lazy(() => TitleCreateWithoutClientInputObjectSchema).array(), z.lazy(() => TitleUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => TitleCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TitleUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => TitleUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TitleUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => TitleUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TitleUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => TitleUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TitleScalarWhereInputObjectSchema), z.lazy(() => TitleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TitleUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.TitleUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateManyWithoutClientNestedInput>;
export const TitleUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
