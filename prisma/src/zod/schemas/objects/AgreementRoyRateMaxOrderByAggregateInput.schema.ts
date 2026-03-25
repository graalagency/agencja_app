import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  rightId: SortOrderSchema.optional(),
  step: SortOrderSchema.optional(),
  copiesMax: SortOrderSchema.optional(),
  rate: SortOrderSchema.optional()
}).strict();
export const AgreementRoyRateMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateMaxOrderByAggregateInput>;
export const AgreementRoyRateMaxOrderByAggregateInputObjectZodSchema = makeSchema();
