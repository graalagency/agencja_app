import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutPublisherInputObjectSchema as AgreementCreateWithoutPublisherInputObjectSchema } from './AgreementCreateWithoutPublisherInput.schema';
import { AgreementUncheckedCreateWithoutPublisherInputObjectSchema as AgreementUncheckedCreateWithoutPublisherInputObjectSchema } from './AgreementUncheckedCreateWithoutPublisherInput.schema';
import { AgreementCreateOrConnectWithoutPublisherInputObjectSchema as AgreementCreateOrConnectWithoutPublisherInputObjectSchema } from './AgreementCreateOrConnectWithoutPublisherInput.schema';
import { AgreementUpsertWithWhereUniqueWithoutPublisherInputObjectSchema as AgreementUpsertWithWhereUniqueWithoutPublisherInputObjectSchema } from './AgreementUpsertWithWhereUniqueWithoutPublisherInput.schema';
import { AgreementCreateManyPublisherInputEnvelopeObjectSchema as AgreementCreateManyPublisherInputEnvelopeObjectSchema } from './AgreementCreateManyPublisherInputEnvelope.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithWhereUniqueWithoutPublisherInputObjectSchema as AgreementUpdateWithWhereUniqueWithoutPublisherInputObjectSchema } from './AgreementUpdateWithWhereUniqueWithoutPublisherInput.schema';
import { AgreementUpdateManyWithWhereWithoutPublisherInputObjectSchema as AgreementUpdateManyWithWhereWithoutPublisherInputObjectSchema } from './AgreementUpdateManyWithWhereWithoutPublisherInput.schema';
import { AgreementScalarWhereInputObjectSchema as AgreementScalarWhereInputObjectSchema } from './AgreementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => AgreementUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => AgreementCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementUpsertWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUpsertWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementUpdateWithWhereUniqueWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUpdateWithWhereUniqueWithoutPublisherInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementUpdateManyWithWhereWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUpdateManyWithWhereWithoutPublisherInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementScalarWhereInputObjectSchema), z.lazy(() => AgreementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementUncheckedUpdateManyWithoutPublisherNestedInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedUpdateManyWithoutPublisherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedUpdateManyWithoutPublisherNestedInput>;
export const AgreementUncheckedUpdateManyWithoutPublisherNestedInputObjectZodSchema = makeSchema();
