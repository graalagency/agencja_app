import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './AgreementEventSelect.schema';
import { AgreementEventIncludeObjectSchema as AgreementEventIncludeObjectSchema } from './AgreementEventInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementEventSelectObjectSchema).optional(),
  include: z.lazy(() => AgreementEventIncludeObjectSchema).optional()
}).strict();
export const AgreementEventArgsObjectSchema = makeSchema();
export const AgreementEventArgsObjectZodSchema = makeSchema();
