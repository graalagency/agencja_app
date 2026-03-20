import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorCreateWithoutAuthorInputObjectSchema as TitleAuthorCreateWithoutAuthorInputObjectSchema } from './TitleAuthorCreateWithoutAuthorInput.schema';
import { TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema as TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutAuthorInput.schema';
import { TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema as TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema } from './TitleAuthorCreateOrConnectWithoutAuthorInput.schema';
import { TitleAuthorUpsertWithWhereUniqueWithoutAuthorInputObjectSchema as TitleAuthorUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './TitleAuthorUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema as TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema } from './TitleAuthorCreateManyAuthorInputEnvelope.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorUpdateWithWhereUniqueWithoutAuthorInputObjectSchema as TitleAuthorUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './TitleAuthorUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { TitleAuthorUpdateManyWithWhereWithoutAuthorInputObjectSchema as TitleAuthorUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './TitleAuthorUpdateManyWithWhereWithoutAuthorInput.schema';
import { TitleAuthorScalarWhereInputObjectSchema as TitleAuthorScalarWhereInputObjectSchema } from './TitleAuthorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TitleAuthorUpsertWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TitleAuthorUpdateWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TitleAuthorUpdateManyWithWhereWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUpdateManyWithWhereWithoutAuthorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TitleAuthorScalarWhereInputObjectSchema), z.lazy(() => TitleAuthorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TitleAuthorUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateManyWithoutAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyWithoutAuthorNestedInput>;
export const TitleAuthorUpdateManyWithoutAuthorNestedInputObjectZodSchema = makeSchema();
