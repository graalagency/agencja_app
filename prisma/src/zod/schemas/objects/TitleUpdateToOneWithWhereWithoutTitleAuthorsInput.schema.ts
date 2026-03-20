import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { TitleUpdateWithoutTitleAuthorsInputObjectSchema as TitleUpdateWithoutTitleAuthorsInputObjectSchema } from './TitleUpdateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedUpdateWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TitleUpdateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema)])
}).strict();
export const TitleUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.TitleUpdateToOneWithWhereWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateToOneWithWhereWithoutTitleAuthorsInput>;
export const TitleUpdateToOneWithWhereWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
