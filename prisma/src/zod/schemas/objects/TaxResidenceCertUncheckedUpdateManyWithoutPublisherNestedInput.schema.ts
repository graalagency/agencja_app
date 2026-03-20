import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateWithoutPublisherInputObjectSchema as TaxResidenceCertCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutPublisherInput.schema';
import { TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema as TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateOrConnectWithoutPublisherInput.schema';
import { TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInputObjectSchema as TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInputObjectSchema } from './TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInput.schema';
import { TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema as TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema } from './TaxResidenceCertCreateManyPublisherInputEnvelope.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInputObjectSchema as TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInputObjectSchema } from './TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInput.schema';
import { TaxResidenceCertUpdateManyWithWhereWithoutPublisherInputObjectSchema as TaxResidenceCertUpdateManyWithWhereWithoutPublisherInputObjectSchema } from './TaxResidenceCertUpdateManyWithWhereWithoutPublisherInput.schema';
import { TaxResidenceCertScalarWhereInputObjectSchema as TaxResidenceCertScalarWhereInputObjectSchema } from './TaxResidenceCertScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUpsertWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUpdateWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaxResidenceCertUpdateManyWithWhereWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertUpdateManyWithWhereWithoutPublisherInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaxResidenceCertScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceCertScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceCertUncheckedUpdateManyWithoutPublisherNestedInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUncheckedUpdateManyWithoutPublisherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUncheckedUpdateManyWithoutPublisherNestedInput>;
export const TaxResidenceCertUncheckedUpdateManyWithoutPublisherNestedInputObjectZodSchema = makeSchema();
