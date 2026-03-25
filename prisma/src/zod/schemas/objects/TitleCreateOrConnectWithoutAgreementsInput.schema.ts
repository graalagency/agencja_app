import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleCreateWithoutAgreementsInputObjectSchema as TitleCreateWithoutAgreementsInputObjectSchema } from './TitleCreateWithoutAgreementsInput.schema';
import { TitleUncheckedCreateWithoutAgreementsInputObjectSchema as TitleUncheckedCreateWithoutAgreementsInputObjectSchema } from './TitleUncheckedCreateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleCreateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutAgreementsInputObjectSchema)])
}).strict();
export const TitleCreateOrConnectWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.TitleCreateOrConnectWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateOrConnectWithoutAgreementsInput>;
export const TitleCreateOrConnectWithoutAgreementsInputObjectZodSchema = makeSchema();
