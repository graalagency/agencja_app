import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCreateWithoutAgreementInputObjectSchema as AgreementRightCreateWithoutAgreementInputObjectSchema } from './AgreementRightCreateWithoutAgreementInput.schema';
import { AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedCreateWithoutAgreementInput.schema';
import { AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema as AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementRightCreateOrConnectWithoutAgreementInput.schema';
import { AgreementRightUpsertWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementRightUpsertWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementRightUpsertWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementRightCreateManyAgreementInputEnvelopeObjectSchema as AgreementRightCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementRightCreateManyAgreementInputEnvelope.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema';
import { AgreementRightUpdateWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementRightUpdateWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementRightUpdateWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementRightUpdateManyWithWhereWithoutAgreementInputObjectSchema as AgreementRightUpdateManyWithWhereWithoutAgreementInputObjectSchema } from './AgreementRightUpdateManyWithWhereWithoutAgreementInput.schema';
import { AgreementRightScalarWhereInputObjectSchema as AgreementRightScalarWhereInputObjectSchema } from './AgreementRightScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRightCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementRightUpsertWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUpsertWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementRightCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementRightWhereUniqueInputObjectSchema), z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementRightWhereUniqueInputObjectSchema), z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementRightWhereUniqueInputObjectSchema), z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementRightWhereUniqueInputObjectSchema), z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementRightUpdateWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUpdateWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementRightUpdateManyWithWhereWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUpdateManyWithWhereWithoutAgreementInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementRightScalarWhereInputObjectSchema), z.lazy(() => AgreementRightScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementRightUpdateManyWithoutAgreementNestedInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateManyWithoutAgreementNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateManyWithoutAgreementNestedInput>;
export const AgreementRightUpdateManyWithoutAgreementNestedInputObjectZodSchema = makeSchema();
