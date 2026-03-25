import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './AgreementOrderByWithRelationInput.schema';
import { AgreementRoyRateOrderByRelationAggregateInputObjectSchema as AgreementRoyRateOrderByRelationAggregateInputObjectSchema } from './AgreementRoyRateOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agreementId: SortOrderSchema.optional(),
  rightFormId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  priceTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  royPriceTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  royAccountIntervalId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  distributionTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Agreement: z.lazy(() => AgreementOrderByWithRelationInputObjectSchema).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AgreementRightOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgreementRightOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightOrderByWithRelationInput>;
export const AgreementRightOrderByWithRelationInputObjectZodSchema = makeSchema();
