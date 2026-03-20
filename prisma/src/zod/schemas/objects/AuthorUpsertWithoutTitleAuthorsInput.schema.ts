import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorUpdateWithoutTitleAuthorsInputObjectSchema as AuthorUpdateWithoutTitleAuthorsInputObjectSchema } from './AuthorUpdateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedUpdateWithoutTitleAuthorsInput.schema';
import { AuthorCreateWithoutTitleAuthorsInputObjectSchema as AuthorCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedCreateWithoutTitleAuthorsInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AuthorUpdateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => AuthorCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema)]),
  where: z.lazy(() => AuthorWhereInputObjectSchema).optional()
}).strict();
export const AuthorUpsertWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.AuthorUpsertWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUpsertWithoutTitleAuthorsInput>;
export const AuthorUpsertWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
