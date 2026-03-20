import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ClientContactMaxAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactMaxAggregateInputType>;
export const ClientContactMaxAggregateInputObjectZodSchema = makeSchema();
