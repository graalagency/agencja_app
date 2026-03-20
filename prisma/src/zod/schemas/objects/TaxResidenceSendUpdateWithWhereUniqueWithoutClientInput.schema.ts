import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithoutClientInputObjectSchema as TaxResidenceSendUpdateWithoutClientInputObjectSchema } from './TaxResidenceSendUpdateWithoutClientInput.schema';
import { TaxResidenceSendUncheckedUpdateWithoutClientInputObjectSchema as TaxResidenceSendUncheckedUpdateWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceSendUpdateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateWithWhereUniqueWithoutClientInput>;
export const TaxResidenceSendUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
