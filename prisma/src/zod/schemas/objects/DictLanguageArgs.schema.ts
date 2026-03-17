import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './DictLanguageSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictLanguageSelectObjectSchema).optional()
}).strict();
export const DictLanguageArgsObjectSchema = makeSchema();
export const DictLanguageArgsObjectZodSchema = makeSchema();
