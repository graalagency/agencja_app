import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional()
}).strict();
export const TaxResidenceCertAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertAvgOrderByAggregateInput>;
export const TaxResidenceCertAvgOrderByAggregateInputObjectZodSchema = makeSchema();
