import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorCreateWithoutTitleAuthorsInputObjectSchema as AuthorCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedCreateWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AuthorCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema)])
}).strict();
export const AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateOrConnectWithoutTitleAuthorsInput>;
export const AuthorCreateOrConnectWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
