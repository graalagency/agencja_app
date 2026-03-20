import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  validDate: SortOrderSchema.optional(),
  requestDate: SortOrderSchema.optional(),
  receiveDate: SortOrderSchema.optional(),
  hasCert: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  fileData: SortOrderSchema.optional(),
  fileName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TaxResidenceCertMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertMinOrderByAggregateInput>;
export const TaxResidenceCertMinOrderByAggregateInputObjectZodSchema = makeSchema();
