import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCountOutputTypeSelectObjectSchema as TitleCountOutputTypeSelectObjectSchema } from './TitleCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TitleCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TitleCountOutputTypeArgsObjectSchema = makeSchema();
export const TitleCountOutputTypeArgsObjectZodSchema = makeSchema();
