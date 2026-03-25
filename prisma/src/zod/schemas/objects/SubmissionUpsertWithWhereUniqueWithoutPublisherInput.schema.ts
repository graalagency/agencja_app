import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutPublisherInputObjectSchema as SubmissionUpdateWithoutPublisherInputObjectSchema } from './SubmissionUpdateWithoutPublisherInput.schema';
import { SubmissionUncheckedUpdateWithoutPublisherInputObjectSchema as SubmissionUncheckedUpdateWithoutPublisherInputObjectSchema } from './SubmissionUncheckedUpdateWithoutPublisherInput.schema';
import { SubmissionCreateWithoutPublisherInputObjectSchema as SubmissionCreateWithoutPublisherInputObjectSchema } from './SubmissionCreateWithoutPublisherInput.schema';
import { SubmissionUncheckedCreateWithoutPublisherInputObjectSchema as SubmissionUncheckedCreateWithoutPublisherInputObjectSchema } from './SubmissionUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubmissionUpdateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutPublisherInputObjectSchema)]),
  create: z.union([z.lazy(() => SubmissionCreateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const SubmissionUpsertWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutPublisherInput>;
export const SubmissionUpsertWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
