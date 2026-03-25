import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithoutClientInputObjectSchema as AgreementUpdateWithoutClientInputObjectSchema } from './AgreementUpdateWithoutClientInput.schema';
import { AgreementUncheckedUpdateWithoutClientInputObjectSchema as AgreementUncheckedUpdateWithoutClientInputObjectSchema } from './AgreementUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementUpdateWithoutClientInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const AgreementUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.AgreementUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateWithWhereUniqueWithoutClientInput>;
export const AgreementUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
