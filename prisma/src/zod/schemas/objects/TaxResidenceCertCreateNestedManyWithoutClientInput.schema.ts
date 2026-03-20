import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateWithoutClientInputObjectSchema as TaxResidenceCertCreateWithoutClientInputObjectSchema } from './TaxResidenceCertCreateWithoutClientInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutClientInput.schema';
import { TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema as TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema } from './TaxResidenceCertCreateOrConnectWithoutClientInput.schema';
import { TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema as TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema } from './TaxResidenceCertCreateManyClientInputEnvelope.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertCreateWithoutClientInputObjectSchema).array(), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceCertCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateNestedManyWithoutClientInput>;
export const TaxResidenceCertCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
