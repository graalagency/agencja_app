import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contactId: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const ClientContactSumAggregateInputObjectSchema: z.ZodType<Prisma.ClientContactSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactSumAggregateInputType>;
export const ClientContactSumAggregateInputObjectZodSchema = makeSchema();
