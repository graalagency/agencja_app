import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionCreateWithoutEventsInputObjectSchema as SubmissionCreateWithoutEventsInputObjectSchema } from './SubmissionCreateWithoutEventsInput.schema';
import { SubmissionUncheckedCreateWithoutEventsInputObjectSchema as SubmissionUncheckedCreateWithoutEventsInputObjectSchema } from './SubmissionUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubmissionCreateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const SubmissionCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.SubmissionCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateOrConnectWithoutEventsInput>;
export const SubmissionCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
