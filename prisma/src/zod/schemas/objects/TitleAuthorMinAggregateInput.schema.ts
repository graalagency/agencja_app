import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  isMain: z.literal(true).optional(),
  order: z.literal(true).optional()
}).strict();
export const TitleAuthorMinAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorMinAggregateInputType>;
export const TitleAuthorMinAggregateInputObjectZodSchema = makeSchema();
