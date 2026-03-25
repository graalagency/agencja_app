import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AgreementRightOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRightOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightOrderByRelationAggregateInput>;
export const AgreementRightOrderByRelationAggregateInputObjectZodSchema = makeSchema();
