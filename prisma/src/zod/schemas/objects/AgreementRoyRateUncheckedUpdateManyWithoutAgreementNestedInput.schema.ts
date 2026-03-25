import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateWithoutAgreementInputObjectSchema as AgreementRoyRateCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateCreateWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutAgreementInput.schema';
import { AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema as AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementRoyRateCreateOrConnectWithoutAgreementInput.schema';
import { AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema as AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementRoyRateCreateManyAgreementInputEnvelope.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementRoyRateUpdateManyWithWhereWithoutAgreementInputObjectSchema as AgreementRoyRateUpdateManyWithWhereWithoutAgreementInputObjectSchema } from './AgreementRoyRateUpdateManyWithWhereWithoutAgreementInput.schema';
import { AgreementRoyRateScalarWhereInputObjectSchema as AgreementRoyRateScalarWhereInputObjectSchema } from './AgreementRoyRateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementRoyRateUpdateManyWithWhereWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUpdateManyWithWhereWithoutAgreementInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema), z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementRoyRateUncheckedUpdateManyWithoutAgreementNestedInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUncheckedUpdateManyWithoutAgreementNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUncheckedUpdateManyWithoutAgreementNestedInput>;
export const AgreementRoyRateUncheckedUpdateManyWithoutAgreementNestedInputObjectZodSchema = makeSchema();
