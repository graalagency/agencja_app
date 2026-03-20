import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithoutPublisherInputObjectSchema as TaxResidenceSendUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUpdateWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedUpdateWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedUpdateWithoutPublisherInput.schema';
import { TaxResidenceSendCreateWithoutPublisherInputObjectSchema as TaxResidenceSendCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaxResidenceSendUpdateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateWithoutPublisherInputObjectSchema)]),
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInput>;
export const TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
