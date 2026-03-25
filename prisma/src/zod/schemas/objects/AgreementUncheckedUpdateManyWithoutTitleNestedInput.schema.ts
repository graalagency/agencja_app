import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutTitleInputObjectSchema as AgreementCreateWithoutTitleInputObjectSchema } from './AgreementCreateWithoutTitleInput.schema';
import { AgreementUncheckedCreateWithoutTitleInputObjectSchema as AgreementUncheckedCreateWithoutTitleInputObjectSchema } from './AgreementUncheckedCreateWithoutTitleInput.schema';
import { AgreementCreateOrConnectWithoutTitleInputObjectSchema as AgreementCreateOrConnectWithoutTitleInputObjectSchema } from './AgreementCreateOrConnectWithoutTitleInput.schema';
import { AgreementUpsertWithWhereUniqueWithoutTitleInputObjectSchema as AgreementUpsertWithWhereUniqueWithoutTitleInputObjectSchema } from './AgreementUpsertWithWhereUniqueWithoutTitleInput.schema';
import { AgreementCreateManyTitleInputEnvelopeObjectSchema as AgreementCreateManyTitleInputEnvelopeObjectSchema } from './AgreementCreateManyTitleInputEnvelope.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithWhereUniqueWithoutTitleInputObjectSchema as AgreementUpdateWithWhereUniqueWithoutTitleInputObjectSchema } from './AgreementUpdateWithWhereUniqueWithoutTitleInput.schema';
import { AgreementUpdateManyWithWhereWithoutTitleInputObjectSchema as AgreementUpdateManyWithWhereWithoutTitleInputObjectSchema } from './AgreementUpdateManyWithWhereWithoutTitleInput.schema';
import { AgreementScalarWhereInputObjectSchema as AgreementScalarWhereInputObjectSchema } from './AgreementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutTitleInputObjectSchema), z.lazy(() => AgreementCreateWithoutTitleInputObjectSchema).array(), z.lazy(() => AgreementUncheckedCreateWithoutTitleInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutTitleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementCreateOrConnectWithoutTitleInputObjectSchema), z.lazy(() => AgreementCreateOrConnectWithoutTitleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementUpsertWithWhereUniqueWithoutTitleInputObjectSchema), z.lazy(() => AgreementUpsertWithWhereUniqueWithoutTitleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementCreateManyTitleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementUpdateWithWhereUniqueWithoutTitleInputObjectSchema), z.lazy(() => AgreementUpdateWithWhereUniqueWithoutTitleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementUpdateManyWithWhereWithoutTitleInputObjectSchema), z.lazy(() => AgreementUpdateManyWithWhereWithoutTitleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementScalarWhereInputObjectSchema), z.lazy(() => AgreementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementUncheckedUpdateManyWithoutTitleNestedInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedUpdateManyWithoutTitleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedUpdateManyWithoutTitleNestedInput>;
export const AgreementUncheckedUpdateManyWithoutTitleNestedInputObjectZodSchema = makeSchema();
