import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubmissionEventCountOrderByAggregateInputObjectSchema as SubmissionEventCountOrderByAggregateInputObjectSchema } from './SubmissionEventCountOrderByAggregateInput.schema';
import { SubmissionEventAvgOrderByAggregateInputObjectSchema as SubmissionEventAvgOrderByAggregateInputObjectSchema } from './SubmissionEventAvgOrderByAggregateInput.schema';
import { SubmissionEventMaxOrderByAggregateInputObjectSchema as SubmissionEventMaxOrderByAggregateInputObjectSchema } from './SubmissionEventMaxOrderByAggregateInput.schema';
import { SubmissionEventMinOrderByAggregateInputObjectSchema as SubmissionEventMinOrderByAggregateInputObjectSchema } from './SubmissionEventMinOrderByAggregateInput.schema';
import { SubmissionEventSumOrderByAggregateInputObjectSchema as SubmissionEventSumOrderByAggregateInputObjectSchema } from './SubmissionEventSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submissionId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  eventDate: SortOrderSchema.optional(),
  noOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SubmissionEventCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SubmissionEventAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SubmissionEventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SubmissionEventMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SubmissionEventSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SubmissionEventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SubmissionEventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionEventOrderByWithAggregationInput>;
export const SubmissionEventOrderByWithAggregationInputObjectZodSchema = makeSchema();
