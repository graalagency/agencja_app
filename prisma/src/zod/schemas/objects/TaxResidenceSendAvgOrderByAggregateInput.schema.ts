import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  certId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional()
}).strict();
export const TaxResidenceSendAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendAvgOrderByAggregateInput>;
export const TaxResidenceSendAvgOrderByAggregateInputObjectZodSchema = makeSchema();
