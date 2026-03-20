import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './TitleSelect.schema';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './TitleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TitleSelectObjectSchema).optional(),
  include: z.lazy(() => TitleIncludeObjectSchema).optional()
}).strict();
export const TitleArgsObjectSchema = makeSchema();
export const TitleArgsObjectZodSchema = makeSchema();
