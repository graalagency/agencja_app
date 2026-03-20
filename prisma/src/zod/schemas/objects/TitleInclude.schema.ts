import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { TitleAuthorFindManySchema as TitleAuthorFindManySchema } from '../findManyTitleAuthor.schema';
import { TitleCountOutputTypeArgsObjectSchema as TitleCountOutputTypeArgsObjectSchema } from './TitleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleAuthorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TitleIncludeObjectSchema: z.ZodType<Prisma.TitleInclude> = makeSchema() as unknown as z.ZodType<Prisma.TitleInclude>;
export const TitleIncludeObjectZodSchema = makeSchema();
