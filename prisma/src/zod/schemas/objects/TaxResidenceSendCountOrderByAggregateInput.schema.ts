import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  certId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  dateSend: SortOrderSchema.optional(),
  sendOrig: SortOrderSchema.optional(),
  sendCopy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TaxResidenceSendCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCountOrderByAggregateInput>;
export const TaxResidenceSendCountOrderByAggregateInputObjectZodSchema = makeSchema();
