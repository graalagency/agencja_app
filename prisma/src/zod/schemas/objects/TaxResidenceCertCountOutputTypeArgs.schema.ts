import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCountOutputTypeSelectObjectSchema as TaxResidenceCertCountOutputTypeSelectObjectSchema } from './TaxResidenceCertCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaxResidenceCertCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TaxResidenceCertCountOutputTypeArgsObjectSchema = makeSchema();
export const TaxResidenceCertCountOutputTypeArgsObjectZodSchema = makeSchema();
