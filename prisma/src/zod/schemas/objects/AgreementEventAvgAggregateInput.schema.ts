import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  agreementId: z.literal(true).optional(),
  eventCode: z.literal(true).optional(),
  noOfCopies: z.literal(true).optional()
}).strict();
export const AgreementEventAvgAggregateInputObjectSchema: z.ZodType<Prisma.AgreementEventAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventAvgAggregateInputType>;
export const AgreementEventAvgAggregateInputObjectZodSchema = makeSchema();
