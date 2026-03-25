import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const SubmissionEventWhereUniqueInputObjectSchema: z.ZodType<Prisma.SubmissionEventWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventWhereUniqueInput>;
export const SubmissionEventWhereUniqueInputObjectZodSchema = makeSchema();
