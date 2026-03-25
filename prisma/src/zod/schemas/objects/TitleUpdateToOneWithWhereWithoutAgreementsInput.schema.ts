import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { TitleUpdateWithoutAgreementsInputObjectSchema as TitleUpdateWithoutAgreementsInputObjectSchema } from './TitleUpdateWithoutAgreementsInput.schema';
import { TitleUncheckedUpdateWithoutAgreementsInputObjectSchema as TitleUncheckedUpdateWithoutAgreementsInputObjectSchema } from './TitleUncheckedUpdateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TitleUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutAgreementsInputObjectSchema)])
}).strict();
export const TitleUpdateToOneWithWhereWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.TitleUpdateToOneWithWhereWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateToOneWithWhereWithoutAgreementsInput>;
export const TitleUpdateToOneWithWhereWithoutAgreementsInputObjectZodSchema = makeSchema();
