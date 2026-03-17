import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DictCountryCountOrderByAggregateInputObjectSchema as DictCountryCountOrderByAggregateInputObjectSchema } from './DictCountryCountOrderByAggregateInput.schema';
import { DictCountryAvgOrderByAggregateInputObjectSchema as DictCountryAvgOrderByAggregateInputObjectSchema } from './DictCountryAvgOrderByAggregateInput.schema';
import { DictCountryMaxOrderByAggregateInputObjectSchema as DictCountryMaxOrderByAggregateInputObjectSchema } from './DictCountryMaxOrderByAggregateInput.schema';
import { DictCountryMinOrderByAggregateInputObjectSchema as DictCountryMinOrderByAggregateInputObjectSchema } from './DictCountryMinOrderByAggregateInput.schema';
import { DictCountrySumOrderByAggregateInputObjectSchema as DictCountrySumOrderByAggregateInputObjectSchema } from './DictCountrySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  tax: SortOrderSchema.optional(),
  eu: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DictCountryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DictCountryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DictCountryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DictCountryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DictCountrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DictCountryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DictCountryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryOrderByWithAggregationInput>;
export const DictCountryOrderByWithAggregationInputObjectZodSchema = makeSchema();
