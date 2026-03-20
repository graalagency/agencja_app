import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCountOutputTypeSelectObjectSchema as AuthorCountOutputTypeSelectObjectSchema } from './AuthorCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuthorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AuthorCountOutputTypeArgsObjectSchema = makeSchema();
export const AuthorCountOutputTypeArgsObjectZodSchema = makeSchema();
