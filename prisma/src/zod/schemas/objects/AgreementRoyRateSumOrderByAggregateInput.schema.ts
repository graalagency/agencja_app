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
export const AgreementRoyRateSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateSumOrderByAggregateInput>;
export const AgreementRoyRateSumOrderByAggregateInputObjectZodSchema = makeSchema();
