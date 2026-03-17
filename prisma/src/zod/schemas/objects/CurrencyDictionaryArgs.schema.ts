import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './CurrencyDictionarySelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CurrencyDictionarySelectObjectSchema).optional()
}).strict();
export const CurrencyDictionaryArgsObjectSchema = makeSchema();
export const CurrencyDictionaryArgsObjectZodSchema = makeSchema();
