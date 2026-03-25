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
export const AgreementRoyRateCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCountOrderByAggregateInput>;
export const AgreementRoyRateCountOrderByAggregateInputObjectZodSchema = makeSchema();
