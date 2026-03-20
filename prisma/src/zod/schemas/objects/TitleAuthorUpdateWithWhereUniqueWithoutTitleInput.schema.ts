import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorUpdateWithoutTitleInputObjectSchema as TitleAuthorUpdateWithoutTitleInputObjectSchema } from './TitleAuthorUpdateWithoutTitleInput.schema';
import { TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema as TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TitleAuthorUpdateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema)])
}).strict();
export const TitleAuthorUpdateWithWhereUniqueWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateWithWhereUniqueWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateWithWhereUniqueWithoutTitleInput>;
export const TitleAuthorUpdateWithWhereUniqueWithoutTitleInputObjectZodSchema = makeSchema();
