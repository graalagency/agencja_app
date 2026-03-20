import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './TaxResidenceCertSelect.schema';
import { TaxResidenceCertIncludeObjectSchema as TaxResidenceCertIncludeObjectSchema } from './TaxResidenceCertInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaxResidenceCertSelectObjectSchema).optional(),
  include: z.lazy(() => TaxResidenceCertIncludeObjectSchema).optional()
}).strict();
export const TaxResidenceCertArgsObjectSchema = makeSchema();
export const TaxResidenceCertArgsObjectZodSchema = makeSchema();
