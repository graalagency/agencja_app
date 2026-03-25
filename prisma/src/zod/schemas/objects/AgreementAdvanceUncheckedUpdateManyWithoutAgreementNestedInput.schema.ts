import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceCreateWithoutAgreementInputObjectSchema as AgreementAdvanceCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceCreateWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedCreateWithoutAgreementInput.schema';
import { AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema as AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementAdvanceCreateOrConnectWithoutAgreementInput.schema';
import { AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema as AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementAdvanceCreateManyAgreementInputEnvelope.schema';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './AgreementAdvanceWhereUniqueInput.schema';
import { AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInputObjectSchema as AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInputObjectSchema } from './AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInput.schema';
import { AgreementAdvanceUpdateManyWithWhereWithoutAgreementInputObjectSchema as AgreementAdvanceUpdateManyWithWhereWithoutAgreementInputObjectSchema } from './AgreementAdvanceUpdateManyWithWhereWithoutAgreementInput.schema';
import { AgreementAdvanceScalarWhereInputObjectSchema as AgreementAdvanceScalarWhereInputObjectSchema } from './AgreementAdvanceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementAdvanceCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema), z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema), z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema), z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema), z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgreementAdvanceUpdateManyWithWhereWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUpdateManyWithWhereWithoutAgreementInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgreementAdvanceScalarWhereInputObjectSchema), z.lazy(() => AgreementAdvanceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgreementAdvanceUncheckedUpdateManyWithoutAgreementNestedInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceUncheckedUpdateManyWithoutAgreementNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceUncheckedUpdateManyWithoutAgreementNestedInput>;
export const AgreementAdvanceUncheckedUpdateManyWithoutAgreementNestedInputObjectZodSchema = makeSchema();
