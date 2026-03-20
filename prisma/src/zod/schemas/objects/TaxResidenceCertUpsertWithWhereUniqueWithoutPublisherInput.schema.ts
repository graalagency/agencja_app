import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateWithoutPublisherInputObjectSchema as TaxResidenceCertUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUpdateWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutPublisherInput.schema';
import { TaxResidenceCertCreateWithoutPublisherInputObjectSchema as TaxResidenceCertCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaxResidenceCertUpdateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutPublisherInputObjectSchema)]),
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInput>;
export const TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
