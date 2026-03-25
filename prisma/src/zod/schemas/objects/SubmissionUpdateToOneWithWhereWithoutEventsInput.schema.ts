import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './SubmissionWhereInput.schema';
import { SubmissionUpdateWithoutEventsInputObjectSchema as SubmissionUpdateWithoutEventsInputObjectSchema } from './SubmissionUpdateWithoutEventsInput.schema';
import { SubmissionUncheckedUpdateWithoutEventsInputObjectSchema as SubmissionUncheckedUpdateWithoutEventsInputObjectSchema } from './SubmissionUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SubmissionUpdateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const SubmissionUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateToOneWithWhereWithoutEventsInput>;
export const SubmissionUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
