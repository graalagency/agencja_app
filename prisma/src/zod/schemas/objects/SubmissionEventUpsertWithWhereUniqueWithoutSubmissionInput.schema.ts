import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventUpdateWithoutSubmissionInputObjectSchema as SubmissionEventUpdateWithoutSubmissionInputObjectSchema } from './SubmissionEventUpdateWithoutSubmissionInput.schema';
import { SubmissionEventUncheckedUpdateWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedUpdateWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedUpdateWithoutSubmissionInput.schema';
import { SubmissionEventCreateWithoutSubmissionInputObjectSchema as SubmissionEventCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventCreateWithoutSubmissionInput.schema';
import { SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedCreateWithoutSubmissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubmissionEventUpdateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUncheckedUpdateWithoutSubmissionInputObjectSchema)]),
  create: z.union([z.lazy(() => SubmissionEventCreateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUncheckedCreateWithoutSubmissionInputObjectSchema)])
}).strict();
export const SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInput>;
export const SubmissionEventUpsertWithWhereUniqueWithoutSubmissionInputObjectZodSchema = makeSchema();
