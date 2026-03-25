import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventWhereUniqueInputObjectSchema as SubmissionEventWhereUniqueInputObjectSchema } from './SubmissionEventWhereUniqueInput.schema';
import { SubmissionEventUpdateWithoutSubmissionInputObjectSchema as SubmissionEventUpdateWithoutSubmissionInputObjectSchema } from './SubmissionEventUpdateWithoutSubmissionInput.schema';
import { SubmissionEventUncheckedUpdateWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedUpdateWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedUpdateWithoutSubmissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionEventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionEventUpdateWithoutSubmissionInputObjectSchema), z.lazy(() => SubmissionEventUncheckedUpdateWithoutSubmissionInputObjectSchema)])
}).strict();
export const SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInput>;
export const SubmissionEventUpdateWithWhereUniqueWithoutSubmissionInputObjectZodSchema = makeSchema();
