import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorUpdateWithoutTitleInputObjectSchema as TitleAuthorUpdateWithoutTitleInputObjectSchema } from './TitleAuthorUpdateWithoutTitleInput.schema';
import { TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema as TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedUpdateWithoutTitleInput.schema';
import { TitleAuthorCreateWithoutTitleInputObjectSchema as TitleAuthorCreateWithoutTitleInputObjectSchema } from './TitleAuthorCreateWithoutTitleInput.schema';
import { TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema as TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TitleAuthorUpdateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const TitleAuthorUpsertWithWhereUniqueWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpsertWithWhereUniqueWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpsertWithWhereUniqueWithoutTitleInput>;
export const TitleAuthorUpsertWithWhereUniqueWithoutTitleInputObjectZodSchema = makeSchema();
