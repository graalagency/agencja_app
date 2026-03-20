import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema as TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema } from './TitleCreateNestedOneWithoutTitleAuthorsInput.schema';
import { AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema as AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateNestedOneWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  isMain: z.boolean().optional(),
  order: z.number().int().optional(),
  Title: z.lazy(() => TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema),
  Author: z.lazy(() => AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema)
}).strict();
export const TitleAuthorCreateInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateInput>;
export const TitleAuthorCreateInputObjectZodSchema = makeSchema();
