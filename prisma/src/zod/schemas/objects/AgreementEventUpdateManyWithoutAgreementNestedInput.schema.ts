import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventCreateWithoutAgreementInputObjectSchema as AgreementEventCreateWithoutAgreementInputObjectSchema } from './AgreementEventCreateWithoutAgreementInput.schema';
import { AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema as AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedCreateWithoutAgreementInput.schema';
import { AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema as AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementEventCreateOrConnectWithoutAgreementInput.schema';
import { AgreementEventUpsertWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementEventUpsertWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementEventUpsertWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementEventCreateManyAgreementInputEnvelopeObjectSchema as AgreementEventCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementEventCreateManyAgreementInputEnvelope.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './AgreementEventWhereUniqueInput.schema';
import { AgreementEventUpdateWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementEventUpdateWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementEventUpdateWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementEventUpdateManyWithWhereWithoutAgreementInputObjectSchema as AgreementEventUpdateManyWithWhereWithoutAgreementInputObjectSchema } from './AgreementEventUpdateManyWithWhereWithoutAgreementInput.schema';
import { AgreementEventScalarWhereInputObjectSchema as AgreementEventScalarWhereInputObjectSchema } from './AgreementEventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementEventCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementEventUpsertWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUpsertWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementEventCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementEventWhereUniqueInputObjectSchema), z.lazy(() => AgreementEventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementEventWhereUniqueInputObjectSchema), z.lazy(() => AgreementEventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementEventWhereUniqueInputObjectSchema), z.lazy(() => AgreementEventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementEventWhereUniqueInputObjectSchema), z.lazy(() => AgreementEventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementEventUpdateWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUpdateWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementEventUpdateManyWithWhereWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUpdateManyWithWhereWithoutAgreementInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementEventScalarWhereInputObjectSchema), z.lazy(() => AgreementEventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementEventUpdateManyWithoutAgreementNestedInputObjectSchema: z.ZodType<Prisma.AgreementEventUpdateManyWithoutAgreementNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventUpdateManyWithoutAgreementNestedInput>;
export const AgreementEventUpdateManyWithoutAgreementNestedInputObjectZodSchema = makeSchema();
