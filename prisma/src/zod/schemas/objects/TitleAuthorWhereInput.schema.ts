import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { TitleScalarRelationFilterObjectSchema as TitleScalarRelationFilterObjectSchema } from './TitleScalarRelationFilter.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { AuthorScalarRelationFilterObjectSchema as AuthorScalarRelationFilterObjectSchema } from './AuthorScalarRelationFilter.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'

const titleauthorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TitleAuthorWhereInputObjectSchema), z.lazy(() => TitleAuthorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TitleAuthorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TitleAuthorWhereInputObjectSchema), z.lazy(() => TitleAuthorWhereInputObjectSchema).array()]).optional(),
  titleId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  authorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isMain: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Title: z.union([z.lazy(() => TitleScalarRelationFilterObjectSchema), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  Author: z.union([z.lazy(() => AuthorScalarRelationFilterObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema)]).optional()
}).strict();
export const TitleAuthorWhereInputObjectSchema: z.ZodType<Prisma.TitleAuthorWhereInput> = titleauthorwhereinputSchema as unknown as z.ZodType<Prisma.TitleAuthorWhereInput>;
export const TitleAuthorWhereInputObjectZodSchema = titleauthorwhereinputSchema;
