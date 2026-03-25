import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  eventDate: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  noOfCopies: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  userMod: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AgreementEventMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementEventMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventMinOrderByAggregateInput>;
export const AgreementEventMinOrderByAggregateInputObjectZodSchema = makeSchema();
