import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema as AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateNestedOneWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  isMain: z.boolean().optional(),
  order: z.number().int().optional(),
  Author: z.lazy(() => AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema)
}).strict();
export const TitleAuthorCreateWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateWithoutTitleInput>;
export const TitleAuthorCreateWithoutTitleInputObjectZodSchema = makeSchema();
