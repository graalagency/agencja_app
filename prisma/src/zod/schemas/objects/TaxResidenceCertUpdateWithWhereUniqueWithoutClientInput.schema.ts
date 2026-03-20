import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateWithoutClientInputObjectSchema as TaxResidenceCertUpdateWithoutClientInputObjectSchema } from './TaxResidenceCertUpdateWithoutClientInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutClientInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceCertUpdateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateWithWhereUniqueWithoutClientInput>;
export const TaxResidenceCertUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
