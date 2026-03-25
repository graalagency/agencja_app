import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutPublisherInputObjectSchema as SubmissionUpdateWithoutPublisherInputObjectSchema } from './SubmissionUpdateWithoutPublisherInput.schema';
import { SubmissionUncheckedUpdateWithoutPublisherInputObjectSchema as SubmissionUncheckedUpdateWithoutPublisherInputObjectSchema } from './SubmissionUncheckedUpdateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutPublisherInputObjectSchema)])
}).strict();
export const SubmissionUpdateWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutPublisherInput>;
export const SubmissionUpdateWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
