import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutTitleInputObjectSchema as AgreementCreateWithoutTitleInputObjectSchema } from './AgreementCreateWithoutTitleInput.schema';
import { AgreementUncheckedCreateWithoutTitleInputObjectSchema as AgreementUncheckedCreateWithoutTitleInputObjectSchema } from './AgreementUncheckedCreateWithoutTitleInput.schema';
import { AgreementCreateOrConnectWithoutTitleInputObjectSchema as AgreementCreateOrConnectWithoutTitleInputObjectSchema } from './AgreementCreateOrConnectWithoutTitleInput.schema';
import { AgreementCreateManyTitleInputEnvelopeObjectSchema as AgreementCreateManyTitleInputEnvelopeObjectSchema } from './AgreementCreateManyTitleInputEnvelope.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutTitleInputObjectSchema), z.lazy(() => AgreementCreateWithoutTitleInputObjectSchema).array(), z.lazy(() => AgreementUncheckedCreateWithoutTitleInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutTitleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementCreateOrConnectWithoutTitleInputObjectSchema), z.lazy(() => AgreementCreateOrConnectWithoutTitleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementCreateManyTitleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementCreateNestedManyWithoutTitleInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedManyWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedManyWithoutTitleInput>;
export const AgreementCreateNestedManyWithoutTitleInputObjectZodSchema = makeSchema();
