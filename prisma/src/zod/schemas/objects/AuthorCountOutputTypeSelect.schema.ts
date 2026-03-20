import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCountOutputTypeCountTitleAuthorsArgsObjectSchema as AuthorCountOutputTypeCountTitleAuthorsArgsObjectSchema } from './AuthorCountOutputTypeCountTitleAuthorsArgs.schema'

const makeSchema = () => z.object({
  TitleAuthors: z.union([z.boolean(), z.lazy(() => AuthorCountOutputTypeCountTitleAuthorsArgsObjectSchema)]).optional()
}).strict();
export const AuthorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AuthorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCountOutputTypeSelect>;
export const AuthorCountOutputTypeSelectObjectZodSchema = makeSchema();
