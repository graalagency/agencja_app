import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleArgsObjectSchema as TitleArgsObjectSchema } from './TitleArgs.schema';
import { AuthorArgsObjectSchema as AuthorArgsObjectSchema } from './AuthorArgs.schema'

const makeSchema = () => z.object({
  titleId: z.boolean().optional(),
  authorId: z.boolean().optional(),
  isMain: z.boolean().optional(),
  order: z.boolean().optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleArgsObjectSchema)]).optional(),
  Author: z.union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)]).optional()
}).strict();
export const TitleAuthorSelectObjectSchema: z.ZodType<Prisma.TitleAuthorSelect> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorSelect>;
export const TitleAuthorSelectObjectZodSchema = makeSchema();
