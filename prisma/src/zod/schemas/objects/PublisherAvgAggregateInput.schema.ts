import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PublisherAvgAggregateInputObjectSchema: z.ZodType<Prisma.PublisherAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherAvgAggregateInputType>;
export const PublisherAvgAggregateInputObjectZodSchema = makeSchema();
