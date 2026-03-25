import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AgreementOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AgreementOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementOrderByRelationAggregateInput>;
export const AgreementOrderByRelationAggregateInputObjectZodSchema = makeSchema();
