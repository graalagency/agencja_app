import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const SubmissionWhereUniqueInputObjectSchema: z.ZodType<Prisma.SubmissionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionWhereUniqueInput>;
export const SubmissionWhereUniqueInputObjectZodSchema = makeSchema();
