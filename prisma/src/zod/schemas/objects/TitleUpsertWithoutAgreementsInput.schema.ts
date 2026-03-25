import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleUpdateWithoutAgreementsInputObjectSchema as TitleUpdateWithoutAgreementsInputObjectSchema } from './TitleUpdateWithoutAgreementsInput.schema';
import { TitleUncheckedUpdateWithoutAgreementsInputObjectSchema as TitleUncheckedUpdateWithoutAgreementsInputObjectSchema } from './TitleUncheckedUpdateWithoutAgreementsInput.schema';
import { TitleCreateWithoutAgreementsInputObjectSchema as TitleCreateWithoutAgreementsInputObjectSchema } from './TitleCreateWithoutAgreementsInput.schema';
import { TitleUncheckedCreateWithoutAgreementsInputObjectSchema as TitleUncheckedCreateWithoutAgreementsInputObjectSchema } from './TitleUncheckedCreateWithoutAgreementsInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TitleUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleCreateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutAgreementsInputObjectSchema)]),
  where: z.lazy(() => TitleWhereInputObjectSchema).optional()
}).strict();
export const TitleUpsertWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.TitleUpsertWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpsertWithoutAgreementsInput>;
export const TitleUpsertWithoutAgreementsInputObjectZodSchema = makeSchema();
