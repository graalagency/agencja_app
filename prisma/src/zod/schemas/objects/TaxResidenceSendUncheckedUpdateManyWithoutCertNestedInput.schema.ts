import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateWithoutCertInputObjectSchema as TaxResidenceSendCreateWithoutCertInputObjectSchema } from './TaxResidenceSendCreateWithoutCertInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutCertInput.schema';
import { TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema as TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema } from './TaxResidenceSendCreateOrConnectWithoutCertInput.schema';
import { TaxResidenceSendUpsertWithWhereUniqueWithoutCertInputObjectSchema as TaxResidenceSendUpsertWithWhereUniqueWithoutCertInputObjectSchema } from './TaxResidenceSendUpsertWithWhereUniqueWithoutCertInput.schema';
import { TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema as TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema } from './TaxResidenceSendCreateManyCertInputEnvelope.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithWhereUniqueWithoutCertInputObjectSchema as TaxResidenceSendUpdateWithWhereUniqueWithoutCertInputObjectSchema } from './TaxResidenceSendUpdateWithWhereUniqueWithoutCertInput.schema';
import { TaxResidenceSendUpdateManyWithWhereWithoutCertInputObjectSchema as TaxResidenceSendUpdateManyWithWhereWithoutCertInputObjectSchema } from './TaxResidenceSendUpdateManyWithWhereWithoutCertInput.schema';
import { TaxResidenceSendScalarWhereInputObjectSchema as TaxResidenceSendScalarWhereInputObjectSchema } from './TaxResidenceSendScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendCreateWithoutCertInputObjectSchema).array(), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaxResidenceSendUpsertWithWhereUniqueWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUpsertWithWhereUniqueWithoutCertInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaxResidenceSendUpdateWithWhereUniqueWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUpdateWithWhereUniqueWithoutCertInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaxResidenceSendUpdateManyWithWhereWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUpdateManyWithWhereWithoutCertInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceSendUncheckedUpdateManyWithoutCertNestedInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUncheckedUpdateManyWithoutCertNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUncheckedUpdateManyWithoutCertNestedInput>;
export const TaxResidenceSendUncheckedUpdateManyWithoutCertNestedInputObjectZodSchema = makeSchema();
