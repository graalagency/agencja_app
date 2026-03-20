import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertCreateWithoutPublisherInputObjectSchema as TaxResidenceCertCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateOrConnectWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateOrConnectWithoutPublisherInput>;
export const TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectZodSchema = makeSchema();
