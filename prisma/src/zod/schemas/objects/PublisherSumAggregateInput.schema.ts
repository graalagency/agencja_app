import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PublisherSumAggregateInputObjectSchema: z.ZodType<Prisma.PublisherSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherSumAggregateInputType>;
export const PublisherSumAggregateInputObjectZodSchema = makeSchema();
