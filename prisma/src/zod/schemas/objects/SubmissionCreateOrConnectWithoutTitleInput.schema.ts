import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionCreateWithoutTitleInputObjectSchema as SubmissionCreateWithoutTitleInputObjectSchema } from './SubmissionCreateWithoutTitleInput.schema';
import { SubmissionUncheckedCreateWithoutTitleInputObjectSchema as SubmissionUncheckedCreateWithoutTitleInputObjectSchema } from './SubmissionUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubmissionCreateWithoutTitleInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const SubmissionCreateOrConnectWithoutTitleInputObjectSchema: z.ZodType<Prisma.SubmissionCreateOrConnectWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateOrConnectWithoutTitleInput>;
export const SubmissionCreateOrConnectWithoutTitleInputObjectZodSchema = makeSchema();
