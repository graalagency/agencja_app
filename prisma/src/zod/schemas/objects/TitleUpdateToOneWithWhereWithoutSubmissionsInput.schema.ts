import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { TitleUpdateWithoutSubmissionsInputObjectSchema as TitleUpdateWithoutSubmissionsInputObjectSchema } from './TitleUpdateWithoutSubmissionsInput.schema';
import { TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema as TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TitleUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const TitleUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.TitleUpdateToOneWithWhereWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateToOneWithWhereWithoutSubmissionsInput>;
export const TitleUpdateToOneWithWhereWithoutSubmissionsInputObjectZodSchema = makeSchema();
