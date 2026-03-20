import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  validDate: z.literal(true).optional(),
  requestDate: z.literal(true).optional(),
  receiveDate: z.literal(true).optional(),
  hasCert: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  fileData: z.literal(true).optional(),
  fileName: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TaxResidenceCertCountAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCountAggregateInputType>;
export const TaxResidenceCertCountAggregateInputObjectZodSchema = makeSchema();
