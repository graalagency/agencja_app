import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCountOutputTypeCountEventsArgsObjectSchema as SubmissionCountOutputTypeCountEventsArgsObjectSchema } from './SubmissionCountOutputTypeCountEventsArgs.schema'

const makeSchema = () => z.object({
  Events: z.union([z.boolean(), z.lazy(() => SubmissionCountOutputTypeCountEventsArgsObjectSchema)]).optional()
}).strict();
export const SubmissionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SubmissionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCountOutputTypeSelect>;
export const SubmissionCountOutputTypeSelectObjectZodSchema = makeSchema();
