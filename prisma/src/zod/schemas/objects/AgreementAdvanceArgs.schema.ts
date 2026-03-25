import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './AgreementAdvanceSelect.schema';
import { AgreementAdvanceIncludeObjectSchema as AgreementAdvanceIncludeObjectSchema } from './AgreementAdvanceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementAdvanceSelectObjectSchema).optional(),
  include: z.lazy(() => AgreementAdvanceIncludeObjectSchema).optional()
}).strict();
export const AgreementAdvanceArgsObjectSchema = makeSchema();
export const AgreementAdvanceArgsObjectZodSchema = makeSchema();
