import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithoutClientInputObjectSchema as TaxResidenceSendUpdateWithoutClientInputObjectSchema } from './TaxResidenceSendUpdateWithoutClientInput.schema';
import { TaxResidenceSendUncheckedUpdateWithoutClientInputObjectSchema as TaxResidenceSendUncheckedUpdateWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedUpdateWithoutClientInput.schema';
import { TaxResidenceSendCreateWithoutClientInputObjectSchema as TaxResidenceSendCreateWithoutClientInputObjectSchema } from './TaxResidenceSendCreateWithoutClientInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaxResidenceSendUpdateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpsertWithWhereUniqueWithoutClientInput>;
export const TaxResidenceSendUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
