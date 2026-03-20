import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ClientContactMinAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactMinAggregateInputType>;
export const ClientContactMinAggregateInputObjectZodSchema = makeSchema();
