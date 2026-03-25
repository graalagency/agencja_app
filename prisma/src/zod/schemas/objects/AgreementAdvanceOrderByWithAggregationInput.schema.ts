import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementAdvanceCountOrderByAggregateInputObjectSchema as AgreementAdvanceCountOrderByAggregateInputObjectSchema } from './AgreementAdvanceCountOrderByAggregateInput.schema';
import { AgreementAdvanceAvgOrderByAggregateInputObjectSchema as AgreementAdvanceAvgOrderByAggregateInputObjectSchema } from './AgreementAdvanceAvgOrderByAggregateInput.schema';
import { AgreementAdvanceMaxOrderByAggregateInputObjectSchema as AgreementAdvanceMaxOrderByAggregateInputObjectSchema } from './AgreementAdvanceMaxOrderByAggregateInput.schema';
import { AgreementAdvanceMinOrderByAggregateInputObjectSchema as AgreementAdvanceMinOrderByAggregateInputObjectSchema } from './AgreementAdvanceMinOrderByAggregateInput.schema';
import { AgreementAdvanceSumOrderByAggregateInputObjectSchema as AgreementAdvanceSumOrderByAggregateInputObjectSchema } from './AgreementAdvanceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agreementId: SortOrderSchema.optional(),
  instalment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  advTermId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  advTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: SortOrderSchema.optional(),
  termDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  royaltyId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AgreementAdvanceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AgreementAdvanceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgreementAdvanceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgreementAdvanceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AgreementAdvanceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgreementAdvanceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceOrderByWithAggregationInput>;
export const AgreementAdvanceOrderByWithAggregationInputObjectZodSchema = makeSchema();
