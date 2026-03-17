import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './LanguageDictionarySelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LanguageDictionarySelectObjectSchema).optional()
}).strict();
export const LanguageDictionaryArgsObjectSchema = makeSchema();
export const LanguageDictionaryArgsObjectZodSchema = makeSchema();
