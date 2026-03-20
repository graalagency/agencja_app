import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  certId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  dateSend: z.literal(true).optional(),
  sendOrig: z.literal(true).optional(),
  sendCopy: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TaxResidenceSendCountAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCountAggregateInputType>;
export const TaxResidenceSendCountAggregateInputObjectZodSchema = makeSchema();
