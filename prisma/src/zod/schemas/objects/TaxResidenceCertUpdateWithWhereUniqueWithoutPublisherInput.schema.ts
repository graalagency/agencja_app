import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateWithoutPublisherInputObjectSchema as TaxResidenceCertUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUpdateWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceCertUpdateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInput>;
export const TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
