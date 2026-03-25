import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutEventsInputObjectSchema as SubmissionCreateWithoutEventsInputObjectSchema } from './SubmissionCreateWithoutEventsInput.schema';
import { SubmissionUncheckedCreateWithoutEventsInputObjectSchema as SubmissionUncheckedCreateWithoutEventsInputObjectSchema } from './SubmissionUncheckedCreateWithoutEventsInput.schema';
import { SubmissionCreateOrConnectWithoutEventsInputObjectSchema as SubmissionCreateOrConnectWithoutEventsInputObjectSchema } from './SubmissionCreateOrConnectWithoutEventsInput.schema';
import { SubmissionUpsertWithoutEventsInputObjectSchema as SubmissionUpsertWithoutEventsInputObjectSchema } from './SubmissionUpsertWithoutEventsInput.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateToOneWithWhereWithoutEventsInputObjectSchema as SubmissionUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './SubmissionUpdateToOneWithWhereWithoutEventsInput.schema';
import { SubmissionUpdateWithoutEventsInputObjectSchema as SubmissionUpdateWithoutEventsInputObjectSchema } from './SubmissionUpdateWithoutEventsInput.schema';
import { SubmissionUncheckedUpdateWithoutEventsInputObjectSchema as SubmissionUncheckedUpdateWithoutEventsInputObjectSchema } from './SubmissionUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SubmissionCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => SubmissionUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => SubmissionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SubmissionUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUpdateWithoutEventsInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const SubmissionUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateOneRequiredWithoutEventsNestedInput>;
export const SubmissionUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
