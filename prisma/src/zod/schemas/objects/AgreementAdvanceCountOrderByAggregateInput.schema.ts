import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  instalment: SortOrderSchema.optional(),
  advTermId: SortOrderSchema.optional(),
  advTypeId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  termDate: SortOrderSchema.optional(),
  royaltyId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AgreementAdvanceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceCountOrderByAggregateInput>;
export const AgreementAdvanceCountOrderByAggregateInputObjectZodSchema = makeSchema();
