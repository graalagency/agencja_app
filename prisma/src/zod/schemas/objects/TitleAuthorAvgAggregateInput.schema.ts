import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  order: z.literal(true).optional()
}).strict();
export const TitleAuthorAvgAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorAvgAggregateInputType>;
export const TitleAuthorAvgAggregateInputObjectZodSchema = makeSchema();
