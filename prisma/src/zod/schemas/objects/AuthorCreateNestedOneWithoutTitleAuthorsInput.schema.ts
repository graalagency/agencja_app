import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCreateWithoutTitleAuthorsInputObjectSchema as AuthorCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedCreateWithoutTitleAuthorsInput.schema';
import { AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema as AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateOrConnectWithoutTitleAuthorsInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthorCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional()
}).strict();
export const AuthorCreateNestedOneWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateNestedOneWithoutTitleAuthorsInput>;
export const AuthorCreateNestedOneWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
