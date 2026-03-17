import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './CountryDictionarySelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CountryDictionarySelectObjectSchema).optional()
}).strict();
export const CountryDictionaryArgsObjectSchema = makeSchema();
export const CountryDictionaryArgsObjectZodSchema = makeSchema();
