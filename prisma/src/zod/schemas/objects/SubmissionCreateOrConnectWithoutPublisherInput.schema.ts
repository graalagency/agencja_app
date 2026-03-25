import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionCreateWithoutPublisherInputObjectSchema as SubmissionCreateWithoutPublisherInputObjectSchema } from './SubmissionCreateWithoutPublisherInput.schema';
import { SubmissionUncheckedCreateWithoutPublisherInputObjectSchema as SubmissionUncheckedCreateWithoutPublisherInputObjectSchema } from './SubmissionUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubmissionCreateWithoutPublisherInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const SubmissionCreateOrConnectWithoutPublisherInputObjectSchema: z.ZodType<Prisma.SubmissionCreateOrConnectWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateOrConnectWithoutPublisherInput>;
export const SubmissionCreateOrConnectWithoutPublisherInputObjectZodSchema = makeSchema();
