import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleUpdateWithoutTitleAuthorsInputObjectSchema as TitleUpdateWithoutTitleAuthorsInputObjectSchema } from './TitleUpdateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedUpdateWithoutTitleAuthorsInput.schema';
import { TitleCreateWithoutTitleAuthorsInputObjectSchema as TitleCreateWithoutTitleAuthorsInputObjectSchema } from './TitleCreateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedCreateWithoutTitleAuthorsInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TitleUpdateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema)]),
  where: z.lazy(() => TitleWhereInputObjectSchema).optional()
}).strict();
export const TitleUpsertWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.TitleUpsertWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpsertWithoutTitleAuthorsInput>;
export const TitleUpsertWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
