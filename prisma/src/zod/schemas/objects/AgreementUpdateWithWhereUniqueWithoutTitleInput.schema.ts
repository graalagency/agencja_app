import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithoutTitleInputObjectSchema as AgreementUpdateWithoutTitleInputObjectSchema } from './AgreementUpdateWithoutTitleInput.schema';
import { AgreementUncheckedUpdateWithoutTitleInputObjectSchema as AgreementUncheckedUpdateWithoutTitleInputObjectSchema } from './AgreementUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementUpdateWithoutTitleInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutTitleInputObjectSchema)])
}).strict();
export const AgreementUpdateWithWhereUniqueWithoutTitleInputObjectSchema: z.ZodType<Prisma.AgreementUpdateWithWhereUniqueWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateWithWhereUniqueWithoutTitleInput>;
export const AgreementUpdateWithWhereUniqueWithoutTitleInputObjectZodSchema = makeSchema();
