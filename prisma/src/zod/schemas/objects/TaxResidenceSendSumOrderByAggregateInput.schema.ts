import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  certId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional()
}).strict();
export const TaxResidenceSendSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendSumOrderByAggregateInput>;
export const TaxResidenceSendSumOrderByAggregateInputObjectZodSchema = makeSchema();
