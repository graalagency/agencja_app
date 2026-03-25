import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementCountOrderByAggregateInputObjectSchema as AgreementCountOrderByAggregateInputObjectSchema } from './AgreementCountOrderByAggregateInput.schema';
import { AgreementAvgOrderByAggregateInputObjectSchema as AgreementAvgOrderByAggregateInputObjectSchema } from './AgreementAvgOrderByAggregateInput.schema';
import { AgreementMaxOrderByAggregateInputObjectSchema as AgreementMaxOrderByAggregateInputObjectSchema } from './AgreementMaxOrderByAggregateInput.schema';
import { AgreementMinOrderByAggregateInputObjectSchema as AgreementMinOrderByAggregateInputObjectSchema } from './AgreementMinOrderByAggregateInput.schema';
import { AgreementSumOrderByAggregateInputObjectSchema as AgreementSumOrderByAggregateInputObjectSchema } from './AgreementSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  titleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agrDate: SortOrderSchema.optional(),
  validYY: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pubTermMM: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maxCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copiesToOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copiesToGraal: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  currencyCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimatedCopyPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  graalShare: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  graalRepresent: SortOrderSchema.optional(),
  languageCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  countryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  localTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  localIsbn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  localPubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientReference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AgreementCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AgreementAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgreementMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgreementMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AgreementSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgreementOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgreementOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementOrderByWithAggregationInput>;
export const AgreementOrderByWithAggregationInputObjectZodSchema = makeSchema();
