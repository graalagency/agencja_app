import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AgreementAdvanceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceOrderByRelationAggregateInput>;
export const AgreementAdvanceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
