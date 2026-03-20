import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { TitleAuthorFindManySchema as TitleAuthorFindManySchema } from '../findManyTitleAuthor.schema';
import { AuthorCountOutputTypeArgsObjectSchema as AuthorCountOutputTypeArgsObjectSchema } from './AuthorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  suffix: z.boolean().optional(),
  penName: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  photos: z.boolean().optional(),
  personalEmail: z.boolean().optional(),
  workEmail: z.boolean().optional(),
  clientId: z.boolean().optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleAuthorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AuthorSelectObjectSchema: z.ZodType<Prisma.AuthorSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuthorSelect>;
export const AuthorSelectObjectZodSchema = makeSchema();
