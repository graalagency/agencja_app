import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './DictCountrySelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCountrySelectObjectSchema).optional()
}).strict();
export const DictCountryArgsObjectSchema = makeSchema();
export const DictCountryArgsObjectZodSchema = makeSchema();
