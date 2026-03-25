import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventCreateWithoutSubmissionInputObjectSchema as SubmissionEventCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateWithoutSubmissionInput.schema';
import { SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedCreateWithoutSubmissionInput.schema';
import { SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema as SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateOrConnectWithoutSubmissionInput.schema';
import { SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema as SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema } from './SubmissionEventCreateManySubmissionInputEnvelope.schema';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './SubmissionEventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionEventCreateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventCreateWithoutSubmissionInputObjectSchema).array(), z.lazy(() => SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionEventCreateManySubmissionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema), z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionEventUncheckedCreateNestedManyWithoutSubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventUncheckedCreateNestedManyWithoutSubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventUncheckedCreateNestedManyWithoutSubmissionInput>;
export const SubmissionEventUncheckedCreateNestedManyWithoutSubmissionInputObjectZodSchema = makeSchema();
