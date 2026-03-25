import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutEventsInputObjectSchema as SubmissionCreateWithoutEventsInputObjectSchema } from './SubmissionCreateWithoutEventsInput.schema';
import { SubmissionUncheckedCreateWithoutEventsInputObjectSchema as SubmissionUncheckedCreateWithoutEventsInputObjectSchema } from './SubmissionUncheckedCreateWithoutEventsInput.schema';
import { SubmissionCreateOrConnectWithoutEventsInputObjectSchema as SubmissionCreateOrConnectWithoutEventsInputObjectSchema } from './SubmissionCreateOrConnectWithoutEventsInput.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SubmissionCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => SubmissionWhereUniqueInputObjectSchema).optional()
}).strict();
export const SubmissionCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.SubmissionCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateNestedOneWithoutEventsInput>;
export const SubmissionCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
