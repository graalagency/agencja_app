import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutTitleInputObjectSchema as SubmissionUpdateWithoutTitleInputObjectSchema } from './SubmissionUpdateWithoutTitleInput.schema';
import { SubmissionUncheckedUpdateWithoutTitleInputObjectSchema as SubmissionUncheckedUpdateWithoutTitleInputObjectSchema } from './SubmissionUncheckedUpdateWithoutTitleInput.schema';
import { SubmissionCreateWithoutTitleInputObjectSchema as SubmissionCreateWithoutTitleInputObjectSchema } from './SubmissionCreateWithoutTitleInput.schema';
import { SubmissionUncheckedCreateWithoutTitleInputObjectSchema as SubmissionUncheckedCreateWithoutTitleInputObjectSchema } from './SubmissionUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubmissionUpdateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutTitleInputObjectSchema)]),
  create: z.union([z.lazy(() => SubmissionCreateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const SubmissionUpsertWithWhereUniqueWithoutTitleInputObjectSchema: z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutTitleInput>;
export const SubmissionUpsertWithWhereUniqueWithoutTitleInputObjectZodSchema = makeSchema();
