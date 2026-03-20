import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertCreateWithoutClientInputObjectSchema as TaxResidenceCertCreateWithoutClientInputObjectSchema } from './TaxResidenceCertCreateWithoutClientInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateOrConnectWithoutClientInput>;
export const TaxResidenceCertCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
