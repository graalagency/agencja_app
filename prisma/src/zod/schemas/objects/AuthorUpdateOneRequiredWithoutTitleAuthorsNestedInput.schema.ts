import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCreateWithoutTitleAuthorsInputObjectSchema as AuthorCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedCreateWithoutTitleAuthorsInput.schema';
import { AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema as AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema } from './AuthorCreateOrConnectWithoutTitleAuthorsInput.schema';
import { AuthorUpsertWithoutTitleAuthorsInputObjectSchema as AuthorUpsertWithoutTitleAuthorsInputObjectSchema } from './AuthorUpsertWithoutTitleAuthorsInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema as AuthorUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema } from './AuthorUpdateToOneWithWhereWithoutTitleAuthorsInput.schema';
import { AuthorUpdateWithoutTitleAuthorsInputObjectSchema as AuthorUpdateWithoutTitleAuthorsInputObjectSchema } from './AuthorUpdateWithoutTitleAuthorsInput.schema';
import { AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema as AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema } from './AuthorUncheckedUpdateWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthorCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutTitleAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutTitleAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => AuthorUpsertWithoutTitleAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AuthorUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUpdateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutTitleAuthorsInputObjectSchema)]).optional()
}).strict();
export const AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema: z.ZodType<Prisma.AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInput>;
export const AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectZodSchema = makeSchema();
