import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionEventWhereInputObjectSchema as SubmissionEventWhereInputObjectSchema } from './SubmissionEventWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionEventWhereInputObjectSchema).optional()
}).strict();
export const SubmissionCountOutputTypeCountEventsArgsObjectSchema = makeSchema();
export const SubmissionCountOutputTypeCountEventsArgsObjectZodSchema = makeSchema();
