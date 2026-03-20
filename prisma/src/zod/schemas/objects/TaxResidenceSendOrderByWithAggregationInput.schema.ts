import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaxResidenceSendCountOrderByAggregateInputObjectSchema as TaxResidenceSendCountOrderByAggregateInputObjectSchema } from './TaxResidenceSendCountOrderByAggregateInput.schema';
import { TaxResidenceSendAvgOrderByAggregateInputObjectSchema as TaxResidenceSendAvgOrderByAggregateInputObjectSchema } from './TaxResidenceSendAvgOrderByAggregateInput.schema';
import { TaxResidenceSendMaxOrderByAggregateInputObjectSchema as TaxResidenceSendMaxOrderByAggregateInputObjectSchema } from './TaxResidenceSendMaxOrderByAggregateInput.schema';
import { TaxResidenceSendMinOrderByAggregateInputObjectSchema as TaxResidenceSendMinOrderByAggregateInputObjectSchema } from './TaxResidenceSendMinOrderByAggregateInput.schema';
import { TaxResidenceSendSumOrderByAggregateInputObjectSchema as TaxResidenceSendSumOrderByAggregateInputObjectSchema } from './TaxResidenceSendSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  certId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateSend: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sendOrig: SortOrderSchema.optional(),
  sendCopy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TaxResidenceSendCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TaxResidenceSendAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaxResidenceSendMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaxResidenceSendMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TaxResidenceSendSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendOrderByWithAggregationInput>;
export const TaxResidenceSendOrderByWithAggregationInputObjectZodSchema = makeSchema();
