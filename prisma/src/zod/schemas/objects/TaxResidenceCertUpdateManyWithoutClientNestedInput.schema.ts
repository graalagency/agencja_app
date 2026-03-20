import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateWithoutClientInputObjectSchema as TaxResidenceCertCreateWithoutClientInputObjectSchema } from './TaxResidenceCertCreateWithoutClientInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutClientInput.schema';
import { TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema as TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema } from './TaxResidenceCertCreateOrConnectWithoutClientInput.schema';
import { TaxResidenceCertUpsertWithWhereUniqueWithoutClientInputObjectSchema as TaxResidenceCertUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './TaxResidenceCertUpsertWithWhereUniqueWithoutClientInput.schema';
import { TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema as TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema } from './TaxResidenceCertCreateManyClientInputEnvelope.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateWithWhereUniqueWithoutClientInputObjectSchema as TaxResidenceCertUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './TaxResidenceCertUpdateWithWhereUniqueWithoutClientInput.schema';
import { TaxResidenceCertUpdateManyWithWhereWithoutClientInputObjectSchema as TaxResidenceCertUpdateManyWithWhereWithoutClientInputObjectSchema } from './TaxResidenceCertUpdateManyWithWhereWithoutClientInput.schema';
import { TaxResidenceCertScalarWhereInputObjectSchema as TaxResidenceCertScalarWhereInputObjectSchema } from './TaxResidenceCertScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertCreateWithoutClientInputObjectSchema).array(), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaxResidenceCertUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaxResidenceCertUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaxResidenceCertUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceCertUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaxResidenceCertScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceCertScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceCertUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateManyWithoutClientNestedInput>;
export const TaxResidenceCertUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
