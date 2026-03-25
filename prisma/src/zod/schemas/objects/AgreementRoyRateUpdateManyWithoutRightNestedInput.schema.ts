import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateWithoutRightInputObjectSchema as AgreementRoyRateCreateWithoutRightInputObjectSchema } from './AgreementRoyRateCreateWithoutRightInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutRightInput.schema';
import { AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema as AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema } from './AgreementRoyRateCreateOrConnectWithoutRightInput.schema';
import { AgreementRoyRateUpsertWithWhereUniqueWithoutRightInputObjectSchema as AgreementRoyRateUpsertWithWhereUniqueWithoutRightInputObjectSchema } from './AgreementRoyRateUpsertWithWhereUniqueWithoutRightInput.schema';
import { AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema as AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema } from './AgreementRoyRateCreateManyRightInputEnvelope.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateUpdateWithWhereUniqueWithoutRightInputObjectSchema as AgreementRoyRateUpdateWithWhereUniqueWithoutRightInputObjectSchema } from './AgreementRoyRateUpdateWithWhereUniqueWithoutRightInput.schema';
import { AgreementRoyRateUpdateManyWithWhereWithoutRightInputObjectSchema as AgreementRoyRateUpdateManyWithWhereWithoutRightInputObjectSchema } from './AgreementRoyRateUpdateManyWithWhereWithoutRightInput.schema';
import { AgreementRoyRateScalarWhereInputObjectSchema as AgreementRoyRateScalarWhereInputObjectSchema } from './AgreementRoyRateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateCreateWithoutRightInputObjectSchema).array(), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementRoyRateUpsertWithWhereUniqueWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUpsertWithWhereUniqueWithoutRightInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementRoyRateUpdateWithWhereUniqueWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUpdateWithWhereUniqueWithoutRightInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementRoyRateUpdateManyWithWhereWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUpdateManyWithWhereWithoutRightInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema), z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpdateManyWithoutRightNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateManyWithoutRightNestedInput>;
export const AgreementRoyRateUpdateManyWithoutRightNestedInputObjectZodSchema = makeSchema();
