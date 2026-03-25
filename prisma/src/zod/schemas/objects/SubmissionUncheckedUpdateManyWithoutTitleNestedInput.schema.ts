import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutTitleInputObjectSchema as SubmissionCreateWithoutTitleInputObjectSchema } from './SubmissionCreateWithoutTitleInput.schema';
import { SubmissionUncheckedCreateWithoutTitleInputObjectSchema as SubmissionUncheckedCreateWithoutTitleInputObjectSchema } from './SubmissionUncheckedCreateWithoutTitleInput.schema';
import { SubmissionCreateOrConnectWithoutTitleInputObjectSchema as SubmissionCreateOrConnectWithoutTitleInputObjectSchema } from './SubmissionCreateOrConnectWithoutTitleInput.schema';
import { SubmissionUpsertWithWhereUniqueWithoutTitleInputObjectSchema as SubmissionUpsertWithWhereUniqueWithoutTitleInputObjectSchema } from './SubmissionUpsertWithWhereUniqueWithoutTitleInput.schema';
import { SubmissionCreateManyTitleInputEnvelopeObjectSchema as SubmissionCreateManyTitleInputEnvelopeObjectSchema } from './SubmissionCreateManyTitleInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithWhereUniqueWithoutTitleInputObjectSchema as SubmissionUpdateWithWhereUniqueWithoutTitleInputObjectSchema } from './SubmissionUpdateWithWhereUniqueWithoutTitleInput.schema';
import { SubmissionUpdateManyWithWhereWithoutTitleInputObjectSchema as SubmissionUpdateManyWithWhereWithoutTitleInputObjectSchema } from './SubmissionUpdateManyWithWhereWithoutTitleInput.schema';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionCreateWithoutTitleInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutTitleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutTitleInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutTitleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutTitleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyTitleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutTitleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubmissionUpdateManyWithWhereWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUpdateManyWithWhereWithoutTitleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubmissionScalarWhereInputObjectSchema), z.lazy(() => SubmissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUncheckedUpdateManyWithoutTitleNestedInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedUpdateManyWithoutTitleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedUpdateManyWithoutTitleNestedInput>;
export const SubmissionUncheckedUpdateManyWithoutTitleNestedInputObjectZodSchema = makeSchema();
