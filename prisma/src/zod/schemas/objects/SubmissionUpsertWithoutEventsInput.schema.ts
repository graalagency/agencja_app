import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionUpdateWithoutEventsInputObjectSchema as SubmissionUpdateWithoutEventsInputObjectSchema } from './SubmissionUpdateWithoutEventsInput.schema';
import { SubmissionUncheckedUpdateWithoutEventsInputObjectSchema as SubmissionUncheckedUpdateWithoutEventsInputObjectSchema } from './SubmissionUncheckedUpdateWithoutEventsInput.schema';
import { SubmissionCreateWithoutEventsInputObjectSchema as SubmissionCreateWithoutEventsInputObjectSchema } from './SubmissionCreateWithoutEventsInput.schema';
import { SubmissionUncheckedCreateWithoutEventsInputObjectSchema as SubmissionUncheckedCreateWithoutEventsInputObjectSchema } from './SubmissionUncheckedCreateWithoutEventsInput.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './SubmissionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SubmissionUpdateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => SubmissionCreateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => SubmissionWhereInputObjectSchema).optional()
}).strict();
export const SubmissionUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.SubmissionUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpsertWithoutEventsInput>;
export const SubmissionUpsertWithoutEventsInputObjectZodSchema = makeSchema();
