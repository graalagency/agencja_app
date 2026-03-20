import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateWithoutClientInputObjectSchema as TitleUpdateWithoutClientInputObjectSchema } from './TitleUpdateWithoutClientInput.schema';
import { TitleUncheckedUpdateWithoutClientInputObjectSchema as TitleUncheckedUpdateWithoutClientInputObjectSchema } from './TitleUncheckedUpdateWithoutClientInput.schema';
import { TitleCreateWithoutClientInputObjectSchema as TitleCreateWithoutClientInputObjectSchema } from './TitleCreateWithoutClientInput.schema';
import { TitleUncheckedCreateWithoutClientInputObjectSchema as TitleUncheckedCreateWithoutClientInputObjectSchema } from './TitleUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TitleUpdateWithoutClientInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleCreateWithoutClientInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const TitleUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.TitleUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpsertWithWhereUniqueWithoutClientInput>;
export const TitleUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
