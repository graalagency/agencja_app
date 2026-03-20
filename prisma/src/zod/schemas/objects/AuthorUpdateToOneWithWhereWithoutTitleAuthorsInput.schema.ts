import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema';
import { AuthorUpdateWithoutTitleAuthorsInputObjectSchema as AuthorUpdateWithoutTitleAuthorsInputObjectSchema } from './AuthorUpdateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedUpdateWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AuthorUpdateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema)])
}).strict();
export const AuthorUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.AuthorUpdateToOneWithWhereWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUpdateToOneWithWhereWithoutTitleAuthorsInput>;
export const AuthorUpdateToOneWithWhereWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
