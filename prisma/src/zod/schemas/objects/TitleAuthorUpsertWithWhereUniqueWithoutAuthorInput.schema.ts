import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorUpdateWithoutAuthorInputObjectSchema as TitleAuthorUpdateWithoutAuthorInputObjectSchema } from './TitleAuthorUpdateWithoutAuthorInput.schema';
import { TitleAuthorUncheckedUpdateWithoutAuthorInputObjectSchema as TitleAuthorUncheckedUpdateWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedUpdateWithoutAuthorInput.schema';
import { TitleAuthorCreateWithoutAuthorInputObjectSchema as TitleAuthorCreateWithoutAuthorInputObjectSchema } from './TitleAuthorCreateWithoutAuthorInput.schema';
import { TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema as TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TitleAuthorUpdateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const TitleAuthorUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpsertWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpsertWithWhereUniqueWithoutAuthorInput>;
export const TitleAuthorUpsertWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
