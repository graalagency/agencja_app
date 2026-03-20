import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TaxResidenceCertOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertOrderByRelationAggregateInput>;
export const TaxResidenceCertOrderByRelationAggregateInputObjectZodSchema = makeSchema();
