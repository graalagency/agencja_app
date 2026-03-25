import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './AgreementSelect.schema';
import { AgreementIncludeObjectSchema as AgreementIncludeObjectSchema } from './AgreementInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementSelectObjectSchema).optional(),
  include: z.lazy(() => AgreementIncludeObjectSchema).optional()
}).strict();
export const AgreementArgsObjectSchema = makeSchema();
export const AgreementArgsObjectZodSchema = makeSchema();
