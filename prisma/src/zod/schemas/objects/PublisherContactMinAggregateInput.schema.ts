import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const PublisherContactMinAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactMinAggregateInputType>;
export const PublisherContactMinAggregateInputObjectZodSchema = makeSchema();
