import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutTitleInputObjectSchema as SubmissionUpdateWithoutTitleInputObjectSchema } from './SubmissionUpdateWithoutTitleInput.schema';
import { SubmissionUncheckedUpdateWithoutTitleInputObjectSchema as SubmissionUncheckedUpdateWithoutTitleInputObjectSchema } from './SubmissionUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutTitleInputObjectSchema)])
}).strict();
export const SubmissionUpdateWithWhereUniqueWithoutTitleInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutTitleInput>;
export const SubmissionUpdateWithWhereUniqueWithoutTitleInputObjectZodSchema = makeSchema();
