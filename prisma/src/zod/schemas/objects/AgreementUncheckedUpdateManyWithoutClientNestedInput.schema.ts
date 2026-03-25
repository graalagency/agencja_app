import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutClientInputObjectSchema as AgreementCreateWithoutClientInputObjectSchema } from './AgreementCreateWithoutClientInput.schema';
import { AgreementUncheckedCreateWithoutClientInputObjectSchema as AgreementUncheckedCreateWithoutClientInputObjectSchema } from './AgreementUncheckedCreateWithoutClientInput.schema';
import { AgreementCreateOrConnectWithoutClientInputObjectSchema as AgreementCreateOrConnectWithoutClientInputObjectSchema } from './AgreementCreateOrConnectWithoutClientInput.schema';
import { AgreementUpsertWithWhereUniqueWithoutClientInputObjectSchema as AgreementUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './AgreementUpsertWithWhereUniqueWithoutClientInput.schema';
import { AgreementCreateManyClientInputEnvelopeObjectSchema as AgreementCreateManyClientInputEnvelopeObjectSchema } from './AgreementCreateManyClientInputEnvelope.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithWhereUniqueWithoutClientInputObjectSchema as AgreementUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './AgreementUpdateWithWhereUniqueWithoutClientInput.schema';
import { AgreementUpdateManyWithWhereWithoutClientInputObjectSchema as AgreementUpdateManyWithWhereWithoutClientInputObjectSchema } from './AgreementUpdateManyWithWhereWithoutClientInput.schema';
import { AgreementScalarWhereInputObjectSchema as AgreementScalarWhereInputObjectSchema } from './AgreementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutClientInputObjectSchema), z.lazy(() => AgreementCreateWithoutClientInputObjectSchema).array(), z.lazy(() => AgreementUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => AgreementCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => AgreementUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => AgreementUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => AgreementUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementScalarWhereInputObjectSchema), z.lazy(() => AgreementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedUpdateManyWithoutClientNestedInput>;
export const AgreementUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
