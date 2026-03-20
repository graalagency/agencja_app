import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateWithoutClientInputObjectSchema as TaxResidenceSendCreateWithoutClientInputObjectSchema } from './TaxResidenceSendCreateWithoutClientInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutClientInput.schema';
import { TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema as TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema } from './TaxResidenceSendCreateOrConnectWithoutClientInput.schema';
import { TaxResidenceSendUpsertWithWhereUniqueWithoutClientInputObjectSchema as TaxResidenceSendUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './TaxResidenceSendUpsertWithWhereUniqueWithoutClientInput.schema';
import { TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema as TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema } from './TaxResidenceSendCreateManyClientInputEnvelope.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithWhereUniqueWithoutClientInputObjectSchema as TaxResidenceSendUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './TaxResidenceSendUpdateWithWhereUniqueWithoutClientInput.schema';
import { TaxResidenceSendUpdateManyWithWhereWithoutClientInputObjectSchema as TaxResidenceSendUpdateManyWithWhereWithoutClientInputObjectSchema } from './TaxResidenceSendUpdateManyWithWhereWithoutClientInput.schema';
import { TaxResidenceSendScalarWhereInputObjectSchema as TaxResidenceSendScalarWhereInputObjectSchema } from './TaxResidenceSendScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendCreateWithoutClientInputObjectSchema).array(), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaxResidenceSendUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaxResidenceSendUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaxResidenceSendUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceSendUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyWithoutClientNestedInput>;
export const TaxResidenceSendUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
