import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './AgreementRoyRateSelect.schema';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './AgreementRoyRateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementRoyRateSelectObjectSchema).optional(),
  include: z.lazy(() => AgreementRoyRateIncludeObjectSchema).optional()
}).strict();
export const AgreementRoyRateArgsObjectSchema = makeSchema();
export const AgreementRoyRateArgsObjectZodSchema = makeSchema();
