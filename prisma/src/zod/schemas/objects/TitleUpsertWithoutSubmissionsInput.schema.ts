import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleUpdateWithoutSubmissionsInputObjectSchema as TitleUpdateWithoutSubmissionsInputObjectSchema } from './TitleUpdateWithoutSubmissionsInput.schema';
import { TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema as TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedUpdateWithoutSubmissionsInput.schema';
import { TitleCreateWithoutSubmissionsInputObjectSchema as TitleCreateWithoutSubmissionsInputObjectSchema } from './TitleCreateWithoutSubmissionsInput.schema';
import { TitleUncheckedCreateWithoutSubmissionsInputObjectSchema as TitleUncheckedCreateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedCreateWithoutSubmissionsInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TitleUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutSubmissionsInputObjectSchema)]),
  where: z.lazy(() => TitleWhereInputObjectSchema).optional()
}).strict();
export const TitleUpsertWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.TitleUpsertWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpsertWithoutSubmissionsInput>;
export const TitleUpsertWithoutSubmissionsInputObjectZodSchema = makeSchema();
