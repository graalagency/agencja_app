import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  isMain: z.literal(true).optional(),
  order: z.literal(true).optional()
}).strict();
export const TitleAuthorMaxAggregateInputObjectSchema: z.ZodType<Prisma.TitleAuthorMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorMaxAggregateInputType>;
export const TitleAuthorMaxAggregateInputObjectZodSchema = makeSchema();
