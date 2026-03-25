import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  noOfCopies: SortOrderSchema.optional()
}).strict();
export const AgreementEventSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementEventSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventSumOrderByAggregateInput>;
export const AgreementEventSumOrderByAggregateInputObjectZodSchema = makeSchema();
