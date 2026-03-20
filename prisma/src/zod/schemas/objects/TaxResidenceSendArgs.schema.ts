import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './TaxResidenceSendInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaxResidenceSendSelectObjectSchema).optional(),
  include: z.lazy(() => TaxResidenceSendIncludeObjectSchema).optional()
}).strict();
export const TaxResidenceSendArgsObjectSchema = makeSchema();
export const TaxResidenceSendArgsObjectZodSchema = makeSchema();
