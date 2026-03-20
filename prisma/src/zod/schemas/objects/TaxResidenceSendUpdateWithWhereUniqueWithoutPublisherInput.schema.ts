import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithoutPublisherInputObjectSchema as TaxResidenceSendUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUpdateWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedUpdateWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedUpdateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceSendUpdateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInput>;
export const TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
