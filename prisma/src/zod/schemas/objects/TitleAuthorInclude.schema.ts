import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleArgsObjectSchema as TitleArgsObjectSchema } from './TitleArgs.schema';
import { AuthorArgsObjectSchema as AuthorArgsObjectSchema } from './AuthorArgs.schema'

const makeSchema = () => z.object({
  Title: z.union([z.boolean(), z.lazy(() => TitleArgsObjectSchema)]).optional(),
  Author: z.union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)]).optional()
}).strict();
export const TitleAuthorIncludeObjectSchema: z.ZodType<Prisma.TitleAuthorInclude> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorInclude>;
export const TitleAuthorIncludeObjectZodSchema = makeSchema();
