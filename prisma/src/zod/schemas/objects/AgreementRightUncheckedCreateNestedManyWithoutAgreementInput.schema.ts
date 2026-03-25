import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCreateWithoutAgreementInputObjectSchema as AgreementRightCreateWithoutAgreementInputObjectSchema } from './AgreementRightCreateWithoutAgreementInput.schema';
import { AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedCreateWithoutAgreementInput.schema';
import { AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema as AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementRightCreateOrConnectWithoutAgreementInput.schema';
import { AgreementRightCreateManyAgreementInputEnvelopeObjectSchema as AgreementRightCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementRightCreateManyAgreementInputEnvelope.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRightCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementRightCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementRightWhereUniqueInputObjectSchema), z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightUncheckedCreateNestedManyWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUncheckedCreateNestedManyWithoutAgreementInput>;
export const AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectZodSchema = makeSchema();
