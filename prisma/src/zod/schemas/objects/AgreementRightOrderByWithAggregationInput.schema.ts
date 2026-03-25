import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementRightCountOrderByAggregateInputObjectSchema as AgreementRightCountOrderByAggregateInputObjectSchema } from './AgreementRightCountOrderByAggregateInput.schema';
import { AgreementRightAvgOrderByAggregateInputObjectSchema as AgreementRightAvgOrderByAggregateInputObjectSchema } from './AgreementRightAvgOrderByAggregateInput.schema';
import { AgreementRightMaxOrderByAggregateInputObjectSchema as AgreementRightMaxOrderByAggregateInputObjectSchema } from './AgreementRightMaxOrderByAggregateInput.schema';
import { AgreementRightMinOrderByAggregateInputObjectSchema as AgreementRightMinOrderByAggregateInputObjectSchema } from './AgreementRightMinOrderByAggregateInput.schema';
import { AgreementRightSumOrderByAggregateInputObjectSchema as AgreementRightSumOrderByAggregateInputObjectSchema } from './AgreementRightSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agreementId: SortOrderSchema.optional(),
  rightFormId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  priceTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  royPriceTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  royAccountIntervalId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  distributionTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AgreementRightCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AgreementRightAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgreementRightMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgreementRightMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AgreementRightSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgreementRightOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgreementRightOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightOrderByWithAggregationInput>;
export const AgreementRightOrderByWithAggregationInputObjectZodSchema = makeSchema();
