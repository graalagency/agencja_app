import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutPublisherInputObjectSchema as SubmissionCreateWithoutPublisherInputObjectSchema } from './SubmissionCreateWithoutPublisherInput.schema';
import { SubmissionUncheckedCreateWithoutPublisherInputObjectSchema as SubmissionUncheckedCreateWithoutPublisherInputObjectSchema } from './SubmissionUncheckedCreateWithoutPublisherInput.schema';
import { SubmissionCreateOrConnectWithoutPublisherInputObjectSchema as SubmissionCreateOrConnectWithoutPublisherInputObjectSchema } from './SubmissionCreateOrConnectWithoutPublisherInput.schema';
import { SubmissionCreateManyPublisherInputEnvelopeObjectSchema as SubmissionCreateManyPublisherInputEnvelopeObjectSchema } from './SubmissionCreateManyPublisherInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUncheckedCreateNestedManyWithoutPublisherInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutPublisherInput>;
export const SubmissionUncheckedCreateNestedManyWithoutPublisherInputObjectZodSchema = makeSchema();
