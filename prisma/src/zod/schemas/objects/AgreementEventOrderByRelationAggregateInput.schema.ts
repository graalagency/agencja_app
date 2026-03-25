import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AgreementEventOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AgreementEventOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventOrderByRelationAggregateInput>;
export const AgreementEventOrderByRelationAggregateInputObjectZodSchema = makeSchema();
