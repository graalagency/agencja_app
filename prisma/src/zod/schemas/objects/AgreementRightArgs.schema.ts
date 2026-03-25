import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './AgreementRightInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementRightSelectObjectSchema).optional(),
  include: z.lazy(() => AgreementRightIncludeObjectSchema).optional()
}).strict();
export const AgreementRightArgsObjectSchema = makeSchema();
export const AgreementRightArgsObjectZodSchema = makeSchema();
