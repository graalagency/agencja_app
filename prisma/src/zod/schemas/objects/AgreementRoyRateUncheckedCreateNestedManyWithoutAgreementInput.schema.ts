import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateWithoutAgreementInputObjectSchema as AgreementRoyRateCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateCreateWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutAgreementInput.schema';
import { AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema as AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementRoyRateCreateOrConnectWithoutAgreementInput.schema';
import { AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema as AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementRoyRateCreateManyAgreementInputEnvelope.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInput>;
export const AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInputObjectZodSchema = makeSchema();
