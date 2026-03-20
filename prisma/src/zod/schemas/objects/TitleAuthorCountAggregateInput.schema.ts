import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  isMain: z.literal(true).optional(),
  order: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TitleAuthorCountAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCountAggregateInputType>;
export const TitleAuthorCountAggregateInputObjectZodSchema = makeSchema();
