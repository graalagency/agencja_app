import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutPublisherInputObjectSchema as SubmissionCreateWithoutPublisherInputObjectSchema } from './SubmissionCreateWithoutPublisherInput.schema';
import { SubmissionUncheckedCreateWithoutPublisherInputObjectSchema as SubmissionUncheckedCreateWithoutPublisherInputObjectSchema } from './SubmissionUncheckedCreateWithoutPublisherInput.schema';
import { SubmissionCreateOrConnectWithoutPublisherInputObjectSchema as SubmissionCreateOrConnectWithoutPublisherInputObjectSchema } from './SubmissionCreateOrConnectWithoutPublisherInput.schema';
import { SubmissionUpsertWithWhereUniqueWithoutPublisherInputObjectSchema as SubmissionUpsertWithWhereUniqueWithoutPublisherInputObjectSchema } from './SubmissionUpsertWithWhereUniqueWithoutPublisherInput.schema';
import { SubmissionCreateManyPublisherInputEnvelopeObjectSchema as SubmissionCreateManyPublisherInputEnvelopeObjectSchema } from './SubmissionCreateManyPublisherInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithWhereUniqueWithoutPublisherInputObjectSchema as SubmissionUpdateWithWhereUniqueWithoutPublisherInputObjectSchema } from './SubmissionUpdateWithWhereUniqueWithoutPublisherInput.schema';
import { SubmissionUpdateManyWithWhereWithoutPublisherInputObjectSchema as SubmissionUpdateManyWithWhereWithoutPublisherInputObjectSchema } from './SubmissionUpdateManyWithWhereWithoutPublisherInput.schema';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubmissionUpdateManyWithWhereWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUpdateManyWithWhereWithoutPublisherInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubmissionScalarWhereInputObjectSchema), z.lazy(() => SubmissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUpdateManyWithoutPublisherNestedInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateManyWithoutPublisherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateManyWithoutPublisherNestedInput>;
export const SubmissionUpdateManyWithoutPublisherNestedInputObjectZodSchema = makeSchema();
