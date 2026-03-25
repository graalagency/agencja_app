import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventCreateWithoutSubmissionInputObjectSchema as SubmissionEventCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateWithoutSubmissionInput.schema';
import { SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedCreateWithoutSubmissionInput.schema';
import { SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema as SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateOrConnectWithoutSubmissionInput.schema';
import { SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInputObjectSchema as SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInputObjectSchema } from './SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInput.schema';
import { SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema as SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema } from './SubmissionEventCreateManySubmissionInputEnvelope.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInputObjectSchema as SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInputObjectSchema } from './SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInput.schema';
import { SubmissionEventUpdateManyWithWhereWithoutSubmissionInputObjectSchema as SubmissionEventUpdateManyWithWhereWithoutSubmissionInputObjectSchema } from './SubmissionEventUpdateManyWithWhereWithoutSubmissionInput.schema';
import { SubmissionEventScalarWhereInputObjectSchema as SubmissionEventScalarWhereInputObjectSchema } from './SubmissionEventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionEventCreateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventCreateWithoutSubmissionInputObjectSchema).array(), z.lazy(() => SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema), z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema), z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema), z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema), z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubmissionEventUpdateManyWithWhereWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUpdateManyWithWhereWithoutSubmissionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubmissionEventScalarWhereInputObjectSchema), z.lazy(() => SubmissionEventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionEventUpdateManyWithoutSubmissionNestedInputObjectSchema: z.ZodType<Prisma.SubmissionEventUpdateManyWithoutSubmissionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventUpdateManyWithoutSubmissionNestedInput>;
export const SubmissionEventUpdateManyWithoutSubmissionNestedInputObjectZodSchema = makeSchema();
