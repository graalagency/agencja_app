import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateWithoutClientInputObjectSchema as TaxResidenceCertUpdateWithoutClientInputObjectSchema } from './TaxResidenceCertUpdateWithoutClientInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutClientInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutClientInput.schema';
import { TaxResidenceCertCreateWithoutClientInputObjectSchema as TaxResidenceCertCreateWithoutClientInputObjectSchema } from './TaxResidenceCertCreateWithoutClientInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaxResidenceCertUpdateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpsertWithWhereUniqueWithoutClientInput>;
export const TaxResidenceCertUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
