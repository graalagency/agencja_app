import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  rightFormId: SortOrderSchema.optional(),
  priceTypeId: SortOrderSchema.optional(),
  royPriceTypeId: SortOrderSchema.optional(),
  royAccountIntervalId: SortOrderSchema.optional(),
  distributionTypeId: SortOrderSchema.optional()
}).strict();
export const AgreementRightSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRightSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightSumOrderByAggregateInput>;
export const AgreementRightSumOrderByAggregateInputObjectZodSchema = makeSchema();
