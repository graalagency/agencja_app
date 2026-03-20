import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const ClientContactAvgAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactAvgAggregateInputType>;
export const ClientContactAvgAggregateInputObjectZodSchema = makeSchema();
