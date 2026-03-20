import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaxResidenceCertCountOrderByAggregateInputObjectSchema as TaxResidenceCertCountOrderByAggregateInputObjectSchema } from './TaxResidenceCertCountOrderByAggregateInput.schema';
import { TaxResidenceCertAvgOrderByAggregateInputObjectSchema as TaxResidenceCertAvgOrderByAggregateInputObjectSchema } from './TaxResidenceCertAvgOrderByAggregateInput.schema';
import { TaxResidenceCertMaxOrderByAggregateInputObjectSchema as TaxResidenceCertMaxOrderByAggregateInputObjectSchema } from './TaxResidenceCertMaxOrderByAggregateInput.schema';
import { TaxResidenceCertMinOrderByAggregateInputObjectSchema as TaxResidenceCertMinOrderByAggregateInputObjectSchema } from './TaxResidenceCertMinOrderByAggregateInput.schema';
import { TaxResidenceCertSumOrderByAggregateInputObjectSchema as TaxResidenceCertSumOrderByAggregateInputObjectSchema } from './TaxResidenceCertSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  validDate: SortOrderSchema.optional(),
  requestDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  receiveDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hasCert: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fileData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fileName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TaxResidenceCertCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TaxResidenceCertAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaxResidenceCertMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaxResidenceCertMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TaxResidenceCertSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertOrderByWithAggregationInput>;
export const TaxResidenceCertOrderByWithAggregationInputObjectZodSchema = makeSchema();
