import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithoutTitleInputObjectSchema as AgreementUpdateWithoutTitleInputObjectSchema } from './AgreementUpdateWithoutTitleInput.schema';
import { AgreementUncheckedUpdateWithoutTitleInputObjectSchema as AgreementUncheckedUpdateWithoutTitleInputObjectSchema } from './AgreementUncheckedUpdateWithoutTitleInput.schema';
import { AgreementCreateWithoutTitleInputObjectSchema as AgreementCreateWithoutTitleInputObjectSchema } from './AgreementCreateWithoutTitleInput.schema';
import { AgreementUncheckedCreateWithoutTitleInputObjectSchema as AgreementUncheckedCreateWithoutTitleInputObjectSchema } from './AgreementUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementUpdateWithoutTitleInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutTitleInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutTitleInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const AgreementUpsertWithWhereUniqueWithoutTitleInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithWhereUniqueWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithWhereUniqueWithoutTitleInput>;
export const AgreementUpsertWithWhereUniqueWithoutTitleInputObjectZodSchema = makeSchema();
