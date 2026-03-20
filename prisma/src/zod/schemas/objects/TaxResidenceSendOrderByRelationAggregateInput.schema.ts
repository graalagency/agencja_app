import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TaxResidenceSendOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendOrderByRelationAggregateInput>;
export const TaxResidenceSendOrderByRelationAggregateInputObjectZodSchema = makeSchema();
