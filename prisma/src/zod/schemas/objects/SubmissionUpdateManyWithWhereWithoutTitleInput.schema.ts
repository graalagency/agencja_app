import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema';
import { SubmissionUpdateManyMutationInputObjectSchema as SubmissionUpdateManyMutationInputObjectSchema } from './SubmissionUpdateManyMutationInput.schema';
import { SubmissionUncheckedUpdateManyWithoutTitleInputObjectSchema as SubmissionUncheckedUpdateManyWithoutTitleInputObjectSchema } from './SubmissionUncheckedUpdateManyWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateManyMutationInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateManyWithoutTitleInputObjectSchema)])
}).strict();
export const SubmissionUpdateManyWithWhereWithoutTitleInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutTitleInput>;
export const SubmissionUpdateManyWithWhereWithoutTitleInputObjectZodSchema = makeSchema();
