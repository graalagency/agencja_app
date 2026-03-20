import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorUpdateWithoutAuthorInputObjectSchema as TitleAuthorUpdateWithoutAuthorInputObjectSchema } from './TitleAuthorUpdateWithoutAuthorInput.schema';
import { TitleAuthorUncheckedUpdateWithoutAuthorInputObjectSchema as TitleAuthorUncheckedUpdateWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedUpdateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TitleAuthorUpdateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUncheckedUpdateWithoutAuthorInputObjectSchema)])
}).strict();
export const TitleAuthorUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateWithWhereUniqueWithoutAuthorInput>;
export const TitleAuthorUpdateWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
