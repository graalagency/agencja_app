import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithoutClientInputObjectSchema as AgreementUpdateWithoutClientInputObjectSchema } from './AgreementUpdateWithoutClientInput.schema';
import { AgreementUncheckedUpdateWithoutClientInputObjectSchema as AgreementUncheckedUpdateWithoutClientInputObjectSchema } from './AgreementUncheckedUpdateWithoutClientInput.schema';
import { AgreementCreateWithoutClientInputObjectSchema as AgreementCreateWithoutClientInputObjectSchema } from './AgreementCreateWithoutClientInput.schema';
import { AgreementUncheckedCreateWithoutClientInputObjectSchema as AgreementUncheckedCreateWithoutClientInputObjectSchema } from './AgreementUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementUpdateWithoutClientInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutClientInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const AgreementUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithWhereUniqueWithoutClientInput>;
export const AgreementUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
