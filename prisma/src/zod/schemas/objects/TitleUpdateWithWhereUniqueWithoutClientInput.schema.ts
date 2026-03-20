import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateWithoutClientInputObjectSchema as TitleUpdateWithoutClientInputObjectSchema } from './TitleUpdateWithoutClientInput.schema';
import { TitleUncheckedUpdateWithoutClientInputObjectSchema as TitleUncheckedUpdateWithoutClientInputObjectSchema } from './TitleUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TitleUpdateWithoutClientInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const TitleUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.TitleUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateWithWhereUniqueWithoutClientInput>;
export const TitleUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
