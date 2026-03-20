import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereInputObjectSchema as TaxResidenceSendWhereInputObjectSchema } from './TaxResidenceSendWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TaxResidenceSendWhereInputObjectSchema).optional(),
  some: z.lazy(() => TaxResidenceSendWhereInputObjectSchema).optional(),
  none: z.lazy(() => TaxResidenceSendWhereInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendListRelationFilterObjectSchema: z.ZodType<Prisma.TaxResidenceSendListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendListRelationFilter>;
export const TaxResidenceSendListRelationFilterObjectZodSchema = makeSchema();
