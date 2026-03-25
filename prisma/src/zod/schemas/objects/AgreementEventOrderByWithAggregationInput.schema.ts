import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementEventCountOrderByAggregateInputObjectSchema as AgreementEventCountOrderByAggregateInputObjectSchema } from './AgreementEventCountOrderByAggregateInput.schema';
import { AgreementEventAvgOrderByAggregateInputObjectSchema as AgreementEventAvgOrderByAggregateInputObjectSchema } from './AgreementEventAvgOrderByAggregateInput.schema';
import { AgreementEventMaxOrderByAggregateInputObjectSchema as AgreementEventMaxOrderByAggregateInputObjectSchema } from './AgreementEventMaxOrderByAggregateInput.schema';
import { AgreementEventMinOrderByAggregateInputObjectSchema as AgreementEventMinOrderByAggregateInputObjectSchema } from './AgreementEventMinOrderByAggregateInput.schema';
import { AgreementEventSumOrderByAggregateInputObjectSchema as AgreementEventSumOrderByAggregateInputObjectSchema } from './AgreementEventSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agreementId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  eventDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  noOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AgreementEventCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AgreementEventAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgreementEventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgreementEventMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AgreementEventSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgreementEventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgreementEventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventOrderByWithAggregationInput>;
export const AgreementEventOrderByWithAggregationInputObjectZodSchema = makeSchema();
