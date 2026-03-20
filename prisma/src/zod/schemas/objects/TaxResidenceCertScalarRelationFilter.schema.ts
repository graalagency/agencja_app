import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './TaxResidenceCertWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertScalarRelationFilterObjectSchema: z.ZodType<Prisma.TaxResidenceCertScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertScalarRelationFilter>;
export const TaxResidenceCertScalarRelationFilterObjectZodSchema = makeSchema();
