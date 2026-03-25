import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventScalarWhereInputObjectSchema as SubmissionEventScalarWhereInputObjectSchema } from './SubmissionEventScalarWhereInput.schema';
import { SubmissionEventUpdateManyMutationInputObjectSchema as SubmissionEventUpdateManyMutationInputObjectSchema } from './SubmissionEventUpdateManyMutationInput.schema';
import { SubmissionEventUncheckedUpdateManyWithoutSubmissionInputObjectSchema as SubmissionEventUncheckedUpdateManyWithoutSubmissionInputObjectSchema } from './SubmissionEventUncheckedUpdateManyWithoutSubmissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionEventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionEventUpdateManyMutationInputObjectSchema), z.lazy(() => SubmissionEventUncheckedUpdateManyWithoutSubmissionInputObjectSchema)])
}).strict();
export const SubmissionEventUpdateManyWithWhereWithoutSubmissionInputObjectSchema: z.ZodType<Prisma.SubmissionEventUpdateManyWithWhereWithoutSubmissionInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventUpdateManyWithWhereWithoutSubmissionInput>;
export const SubmissionEventUpdateManyWithWhereWithoutSubmissionInputObjectZodSchema = makeSchema();
