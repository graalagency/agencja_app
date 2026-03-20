import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const PublisherContactMaxAggregateInputObjectSchema: z.ZodType<Prisma.PublisherContactMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactMaxAggregateInputType>;
export const PublisherContactMaxAggregateInputObjectZodSchema = makeSchema();
