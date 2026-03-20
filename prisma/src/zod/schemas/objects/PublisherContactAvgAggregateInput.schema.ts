import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  publisherId: z.literal(true).optional()
}).strict();
export const PublisherContactAvgAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactAvgAggregateInputType>;
export const PublisherContactAvgAggregateInputObjectZodSchema = makeSchema();
