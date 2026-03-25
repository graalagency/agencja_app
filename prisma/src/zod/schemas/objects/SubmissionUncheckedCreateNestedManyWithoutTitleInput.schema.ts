import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutTitleInputObjectSchema as SubmissionCreateWithoutTitleInputObjectSchema } from './SubmissionCreateWithoutTitleInput.schema';
import { SubmissionUncheckedCreateWithoutTitleInputObjectSchema as SubmissionUncheckedCreateWithoutTitleInputObjectSchema } from './SubmissionUncheckedCreateWithoutTitleInput.schema';
import { SubmissionCreateOrConnectWithoutTitleInputObjectSchema as SubmissionCreateOrConnectWithoutTitleInputObjectSchema } from './SubmissionCreateOrConnectWithoutTitleInput.schema';
import { SubmissionCreateManyTitleInputEnvelopeObjectSchema as SubmissionCreateManyTitleInputEnvelopeObjectSchema } from './SubmissionCreateManyTitleInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionCreateWithoutTitleInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutTitleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutTitleInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutTitleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyTitleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUncheckedCreateNestedManyWithoutTitleInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutTitleInput>;
export const SubmissionUncheckedCreateNestedManyWithoutTitleInputObjectZodSchema = makeSchema();
