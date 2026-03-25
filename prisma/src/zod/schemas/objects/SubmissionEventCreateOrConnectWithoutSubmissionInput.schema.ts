import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventCreateWithoutSubmissionInputObjectSchema as SubmissionEventCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateWithoutSubmissionInput.schema';
import { SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedCreateWithoutSubmissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubmissionEventCreateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema)])
}).strict();
export const SubmissionEventCreateOrConnectWithoutSubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventCreateOrConnectWithoutSubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventCreateOrConnectWithoutSubmissionInput>;
export const SubmissionEventCreateOrConnectWithoutSubmissionInputObjectZodSchema = makeSchema();
