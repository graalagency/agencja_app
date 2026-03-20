import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { TitleAuthorFindManySchema as TitleAuthorFindManySchema } from '../findManyTitleAuthor.schema';
import { AuthorCountOutputTypeArgsObjectSchema as AuthorCountOutputTypeArgsObjectSchema } from './AuthorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleAuthorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AuthorIncludeObjectSchema: z.ZodType<Prisma.AuthorInclude> = makeSchema() as unknown as z.ZodType<Prisma.AuthorInclude>;
export const AuthorIncludeObjectZodSchema = makeSchema();
