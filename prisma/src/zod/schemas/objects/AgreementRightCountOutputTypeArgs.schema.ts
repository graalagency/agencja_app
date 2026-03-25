import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCountOutputTypeSelectObjectSchema as AgreementRightCountOutputTypeSelectObjectSchema } from './AgreementRightCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementRightCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AgreementRightCountOutputTypeArgsObjectSchema = makeSchema();
export const AgreementRightCountOutputTypeArgsObjectZodSchema = makeSchema();
