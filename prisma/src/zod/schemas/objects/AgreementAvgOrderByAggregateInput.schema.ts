import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  titleId: SortOrderSchema.optional(),
  validYY: SortOrderSchema.optional(),
  pubTermMM: SortOrderSchema.optional(),
  maxCopies: SortOrderSchema.optional(),
  minCopies: SortOrderSchema.optional(),
  copiesToOwner: SortOrderSchema.optional(),
  copiesToGraal: SortOrderSchema.optional(),
  commission: SortOrderSchema.optional(),
  commissionMaterials: SortOrderSchema.optional(),
  estimatedCopyPrice: SortOrderSchema.optional(),
  graalShare: SortOrderSchema.optional(),
  countryId: SortOrderSchema.optional(),
  agentId: SortOrderSchema.optional()
}).strict();
export const AgreementAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAvgOrderByAggregateInput>;
export const AgreementAvgOrderByAggregateInputObjectZodSchema = makeSchema();
