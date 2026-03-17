import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './DictCurrencySelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCurrencySelectObjectSchema).optional()
}).strict();
export const DictCurrencyArgsObjectSchema = makeSchema();
export const DictCurrencyArgsObjectZodSchema = makeSchema();
