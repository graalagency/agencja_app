import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementRoyRateCountOrderByAggregateInputObjectSchema as AgreementRoyRateCountOrderByAggregateInputObjectSchema } from './AgreementRoyRateCountOrderByAggregateInput.schema';
import { AgreementRoyRateAvgOrderByAggregateInputObjectSchema as AgreementRoyRateAvgOrderByAggregateInputObjectSchema } from './AgreementRoyRateAvgOrderByAggregateInput.schema';
import { AgreementRoyRateMaxOrderByAggregateInputObjectSchema as AgreementRoyRateMaxOrderByAggregateInputObjectSchema } from './AgreementRoyRateMaxOrderByAggregateInput.schema';
import { AgreementRoyRateMinOrderByAggregateInputObjectSchema as AgreementRoyRateMinOrderByAggregateInputObjectSchema } from './AgreementRoyRateMinOrderByAggregateInput.schema';
import { AgreementRoyRateSumOrderByAggregateInputObjectSchema as AgreementRoyRateSumOrderByAggregateInputObjectSchema } from './AgreementRoyRateSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  rightId: SortOrderSchema.optional(),
  step: SortOrderSchema.optional(),
  copiesMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rate: SortOrderSchema.optional(),
  _count: z.lazy(() => AgreementRoyRateCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AgreementRoyRateAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgreementRoyRateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgreementRoyRateMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AgreementRoyRateSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgreementRoyRateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateOrderByWithAggregationInput>;
export const AgreementRoyRateOrderByWithAggregationInputObjectZodSchema = makeSchema();
