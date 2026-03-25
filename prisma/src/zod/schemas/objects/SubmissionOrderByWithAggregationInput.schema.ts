import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubmissionCountOrderByAggregateInputObjectSchema as SubmissionCountOrderByAggregateInputObjectSchema } from './SubmissionCountOrderByAggregateInput.schema';
import { SubmissionAvgOrderByAggregateInputObjectSchema as SubmissionAvgOrderByAggregateInputObjectSchema } from './SubmissionAvgOrderByAggregateInput.schema';
import { SubmissionMaxOrderByAggregateInputObjectSchema as SubmissionMaxOrderByAggregateInputObjectSchema } from './SubmissionMaxOrderByAggregateInput.schema';
import { SubmissionMinOrderByAggregateInputObjectSchema as SubmissionMinOrderByAggregateInputObjectSchema } from './SubmissionMinOrderByAggregateInput.schema';
import { SubmissionSumOrderByAggregateInputObjectSchema as SubmissionSumOrderByAggregateInputObjectSchema } from './SubmissionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  titleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  contactId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copyTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submSentTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submDate: SortOrderSchema.optional(),
  sentDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  returnDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  noOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  trackingNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  exclusive: SortOrderSchema.optional(),
  submNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SubmissionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SubmissionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SubmissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SubmissionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SubmissionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SubmissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SubmissionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionOrderByWithAggregationInput>;
export const SubmissionOrderByWithAggregationInputObjectZodSchema = makeSchema();
