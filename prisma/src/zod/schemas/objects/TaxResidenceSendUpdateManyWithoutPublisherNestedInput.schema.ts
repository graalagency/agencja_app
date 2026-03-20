import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateWithoutPublisherInputObjectSchema as TaxResidenceSendCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutPublisherInput.schema';
import { TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema as TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateOrConnectWithoutPublisherInput.schema';
import { TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInputObjectSchema as TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInputObjectSchema } from './TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInput.schema';
import { TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema as TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema } from './TaxResidenceSendCreateManyPublisherInputEnvelope.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInputObjectSchema as TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInputObjectSchema } from './TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInput.schema';
import { TaxResidenceSendUpdateManyWithWhereWithoutPublisherInputObjectSchema as TaxResidenceSendUpdateManyWithWhereWithoutPublisherInputObjectSchema } from './TaxResidenceSendUpdateManyWithWhereWithoutPublisherInput.schema';
import { TaxResidenceSendScalarWhereInputObjectSchema as TaxResidenceSendScalarWhereInputObjectSchema } from './TaxResidenceSendScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUpsertWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUpdateWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaxResidenceSendUpdateManyWithWhereWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUpdateManyWithWhereWithoutPublisherInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceSendUpdateManyWithoutPublisherNestedInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyWithoutPublisherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyWithoutPublisherNestedInput>;
export const TaxResidenceSendUpdateManyWithoutPublisherNestedInputObjectZodSchema = makeSchema();
