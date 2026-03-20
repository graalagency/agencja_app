import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './TaxResidenceCertWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional(),
  some: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional(),
  none: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertListRelationFilterObjectSchema: z.ZodType<Prisma.TaxResidenceCertListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertListRelationFilter>;
export const TaxResidenceCertListRelationFilterObjectZodSchema = makeSchema();
