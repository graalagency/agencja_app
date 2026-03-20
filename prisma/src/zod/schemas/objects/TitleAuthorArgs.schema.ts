import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './TitleAuthorSelect.schema';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './TitleAuthorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TitleAuthorSelectObjectSchema).optional(),
  include: z.lazy(() => TitleAuthorIncludeObjectSchema).optional()
}).strict();
export const TitleAuthorArgsObjectSchema = makeSchema();
export const TitleAuthorArgsObjectZodSchema = makeSchema();
