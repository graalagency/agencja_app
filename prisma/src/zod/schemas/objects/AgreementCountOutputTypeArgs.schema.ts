import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCountOutputTypeSelectObjectSchema as AgreementCountOutputTypeSelectObjectSchema } from './AgreementCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AgreementCountOutputTypeArgsObjectSchema = makeSchema();
export const AgreementCountOutputTypeArgsObjectZodSchema = makeSchema();
