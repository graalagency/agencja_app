import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema';
import { SubmissionUpdateManyMutationInputObjectSchema as SubmissionUpdateManyMutationInputObjectSchema } from './SubmissionUpdateManyMutationInput.schema';
import { SubmissionUncheckedUpdateManyWithoutPublisherInputObjectSchema as SubmissionUncheckedUpdateManyWithoutPublisherInputObjectSchema } from './SubmissionUncheckedUpdateManyWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateManyMutationInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateManyWithoutPublisherInputObjectSchema)])
}).strict();
export const SubmissionUpdateManyWithWhereWithoutPublisherInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutPublisherInput>;
export const SubmissionUpdateManyWithWhereWithoutPublisherInputObjectZodSchema = makeSchema();
