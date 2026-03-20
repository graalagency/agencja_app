import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorCreateWithoutTitleInputObjectSchema as TitleAuthorCreateWithoutTitleInputObjectSchema } from './TitleAuthorCreateWithoutTitleInput.schema';
import { TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema as TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutTitleInput.schema';
import { TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema as TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema } from './TitleAuthorCreateOrConnectWithoutTitleInput.schema';
import { TitleAuthorUpsertWithWhereUniqueWithoutTitleInputObjectSchema as TitleAuthorUpsertWithWhereUniqueWithoutTitleInputObjectSchema } from './TitleAuthorUpsertWithWhereUniqueWithoutTitleInput.schema';
import { TitleAuthorCreateManyTitleInputEnvelopeObjectSchema as TitleAuthorCreateManyTitleInputEnvelopeObjectSchema } from './TitleAuthorCreateManyTitleInputEnvelope.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorUpdateWithWhereUniqueWithoutTitleInputObjectSchema as TitleAuthorUpdateWithWhereUniqueWithoutTitleInputObjectSchema } from './TitleAuthorUpdateWithWhereUniqueWithoutTitleInput.schema';
import { TitleAuthorUpdateManyWithWhereWithoutTitleInputObjectSchema as TitleAuthorUpdateManyWithWhereWithoutTitleInputObjectSchema } from './TitleAuthorUpdateManyWithWhereWithoutTitleInput.schema';
import { TitleAuthorScalarWhereInputObjectSchema as TitleAuthorScalarWhereInputObjectSchema } from './TitleAuthorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorCreateWithoutTitleInputObjectSchema).array(), z.lazy(() => TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TitleAuthorUpsertWithWhereUniqueWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUpsertWithWhereUniqueWithoutTitleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleAuthorCreateManyTitleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TitleAuthorUpdateWithWhereUniqueWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUpdateWithWhereUniqueWithoutTitleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TitleAuthorUpdateManyWithWhereWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUpdateManyWithWhereWithoutTitleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TitleAuthorScalarWhereInputObjectSchema), z.lazy(() => TitleAuthorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TitleAuthorUpdateManyWithoutTitleNestedInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateManyWithoutTitleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyWithoutTitleNestedInput>;
export const TitleAuthorUpdateManyWithoutTitleNestedInputObjectZodSchema = makeSchema();
