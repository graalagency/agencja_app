import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateWithoutPublisherInputObjectSchema as TaxResidenceCertCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutPublisherInput.schema';
import { TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema as TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateOrConnectWithoutPublisherInput.schema';
import { TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema as TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema } from './TaxResidenceCertCreateManyPublisherInputEnvelope.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceCertCreateNestedManyWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateNestedManyWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateNestedManyWithoutPublisherInput>;
export const TaxResidenceCertCreateNestedManyWithoutPublisherInputObjectZodSchema = makeSchema();
